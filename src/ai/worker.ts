import { pipeline, env } from '@xenova/transformers';
import MiniSearch from 'minisearch';
import { CreateMLCEngine, prebuiltAppConfig } from '@mlc-ai/web-llm';
import { db, hybridSearch, type Chunk } from './vectorstore';

// Skip local check, download models from HuggingFace
env.allowLocalModels = false;

let embedder: any = null;
let miniSearch: MiniSearch | null = null;
let allChunks: Chunk[] = [];
let engine: any = null;
let isWebLLMLoaded = false;

async function loadEmbedder() {
  if (!embedder) {
    postMessage({ type: 'status', message: 'Loading embedding model...' });
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
      progress_callback: (progress: any) => {
        postMessage({ type: 'progress', data: progress });
      }
    });
  }
}

async function initIndex() {
  postMessage({ type: 'status', message: 'Fetching website content chunks...' });
  try {
    const response = await fetch('/content-chunks.json');
    if (!response.ok) {
      postMessage({ type: 'status', message: 'No content chunks found. Please run "npm run build" to generate them.' });
      return;
    }
    
    const rawChunks: Chunk[] = await response.json();
    postMessage({ type: 'status', message: `Found ${rawChunks.length} chunks. Checking local DB...` });

    await loadEmbedder();

    miniSearch = new MiniSearch({
      fields: ['pageTitle', 'heading', 'content'],
      storeFields: ['id']
    });

    allChunks = [];

    // Check Dexie for cached embeddings
    const cachedChunks = await db.chunks.toArray();
    const cachedMap = new Map(cachedChunks.map(c => [c.id, c]));

    let newEmbeddingsCount = 0;

    for (let i = 0; i < rawChunks.length; i++) {
      const chunk = rawChunks[i];
      let embedding = cachedMap.get(chunk.id)?.embedding;

      if (!embedding) {
        // Generate embedding
        const output = await embedder(chunk.content, { pooling: 'mean', normalize: true });
        embedding = Array.from(output.data);
        chunk.embedding = embedding;
        await db.chunks.put(chunk);
        newEmbeddingsCount++;

        if (newEmbeddingsCount % 10 === 0) {
          postMessage({ type: 'status', message: `Indexed ${newEmbeddingsCount} new chunks...` });
        }
      } else {
        chunk.embedding = embedding;
      }
      allChunks.push(chunk);
      miniSearch.add(chunk);
    }

    postMessage({ type: 'status', message: 'Ready!' });
    postMessage({ type: 'ready' });
  } catch (err) {
    postMessage({ type: 'error', message: 'Failed to initialize AI search index. ' + String(err) });
  }
}

// Handler for incoming messages
self.addEventListener('message', async (event) => {
  const { type, payload } = event.data;

  if (type === 'init') {
    await initIndex();
  }

  if (type === 'loadWebLLM') {
    postMessage({ type: 'status', message: 'Loading WebLLM Model (Gemma-2B) from Tirwin Servers...' });
    try {
      const modelId = 'gemma-2b-it-q4f32_1-MLC';
      const defaultModelConfig = prebuiltAppConfig.model_list.find((m: any) => m.model_id === modelId);

      const appConfig = {
        model_list: [
          {
            ...defaultModelConfig!,
            model_id: modelId,
            model: '/models/gemma-2b-it-q4f32_1-MLC/', // Override fetch path to S3
          }
        ]
      };

      engine = await CreateMLCEngine(
        modelId,
        {
          appConfig,
          initProgressCallback: (progress) => {
            postMessage({ type: 'webllm_progress', data: progress });
          }
        }
      );
      isWebLLMLoaded = true;
      postMessage({ type: 'webllm_ready' });
    } catch (e: any) {
      console.error(e);
      postMessage({ type: 'error', message: 'WebGPU not supported or model failed to load.' });
    }
  }

  if (type === 'ask') {
    const { question, useOllama } = payload;
    
    // 1. Embed query
    postMessage({ type: 'status', message: 'Searching...' });
    const output = await embedder(question, { pooling: 'mean', normalize: true });
    const queryEmbedding = Array.from(output.data) as number[];

    // 2. Hybrid Search
    const topChunks = await hybridSearch(question, queryEmbedding, allChunks, miniSearch!, 4);
    
    if (topChunks.length === 0) {
      postMessage({ type: 'chunk_results', chunks: [] });
      postMessage({ type: 'chunk', chunk: "I couldn't find any relevant information about that on the Tirwin website." });
      postMessage({ type: 'done' });
      return;
    }

    const context = topChunks.map(c => `[Source: ${c.chunk.pageTitle}] (${c.chunk.route})\n${c.chunk.heading}\n${c.chunk.content}`).join('\n\n');
    postMessage({ type: 'chunk_results', chunks: topChunks.map(c => c.chunk) });

    const systemPrompt = `You are the Tirwin Talent AI Assistant. You must answer questions using ONLY the provided website content below. If the answer is not in the context, politely say you don't know and direct them to contact support. Do not hallucinate. Be professional, concise, and helpful. 

Context:
${context}`;

    postMessage({ type: 'status', message: 'Generating answer...' });

    if (useOllama) {
      try {
        const response = await fetch('http://localhost:11434/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'llama3', // User can change this in settings if they want
            prompt: `System: ${systemPrompt}\n\nUser: ${question}\n\nAssistant:`,
            stream: true
          })
        });

        if (!response.ok) throw new Error('Ollama not running or unreachable');
        
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        
        while (reader) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunkStr = decoder.decode(value);
          const lines = chunkStr.split('\n').filter(Boolean);
          for (const line of lines) {
            const data = JSON.parse(line);
            postMessage({ type: 'chunk', chunk: data.response });
          }
        }
      } catch (e) {
        postMessage({ type: 'chunk', chunk: "Error: Could not reach local Ollama on port 11434. Make sure Ollama is running, or switch to Browser AI Mode in settings." });
      }
    } else {
      if (!isWebLLMLoaded) {
        postMessage({ type: 'chunk', chunk: "WebLLM is not loaded yet. Please click 'Load Browser AI' in settings." });
        postMessage({ type: 'done' });
        return;
      }

      const messages = [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question }
      ];

      const asyncChunkGenerator = await engine.chat.completions.create({
        messages,
        temperature: 0.2,
        stream: true,
      });

      for await (const chunk of asyncChunkGenerator) {
        postMessage({ type: 'chunk', chunk: chunk.choices[0]?.delta?.content || "" });
      }
    }

    postMessage({ type: 'done' });
  }
});
