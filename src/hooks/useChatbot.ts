import { useState, useEffect, useRef, useCallback } from 'react';

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export type Chunk = {
  id: string;
  route: string;
  pageTitle: string;
  heading: string;
  content: string;
};

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<string>('Initializing AI...');
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isWebLLMReady, setIsWebLLMReady] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [sources, setSources] = useState<Chunk[]>([]);
  const [webLLMProgress, setWebLLMProgress] = useState<{ text: string, progress: number } | null>(null);
  const [useOllama, setUseOllama] = useState<boolean>(false); // false = WebLLM

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Initialize Worker
    workerRef.current = new Worker(new URL('../ai/worker.ts', import.meta.url), { type: 'module' });

    workerRef.current.onmessage = (event) => {
      const { type, payload, message, chunk, chunks, data } = event.data;

      switch (type) {
        case 'status':
          setStatus(message);
          break;
        case 'progress':
          // Xenova progress (optional UI display)
          break;
        case 'ready':
          setIsReady(true);
          setStatus('Ready to assist.');
          break;
        case 'webllm_progress':
          setWebLLMProgress(data);
          setStatus(data.text);
          break;
        case 'webllm_ready':
          setIsWebLLMReady(true);
          setWebLLMProgress(null);
          setStatus('WebLLM is ready.');
          break;
        case 'chunk_results':
          setSources(chunks);
          break;
        case 'chunk':
          setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === 'assistant') {
              // Append to existing assistant message
              const newMessages = [...prev];
              newMessages[newMessages.length - 1].content += chunk;
              return newMessages;
            } else {
              // Create new assistant message
              return [...prev, { id: Date.now().toString(), role: 'assistant', content: chunk }];
            }
          });
          break;
        case 'done':
          setIsGenerating(false);
          setStatus('Ready.');
          break;
        case 'error':
          setStatus('Error: ' + message);
          setIsGenerating(false);
          break;
      }
    };

    // Trigger initialization
    workerRef.current.postMessage({ type: 'init' });

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const loadWebLLM = useCallback(() => {
    if (workerRef.current && !isWebLLMReady) {
      workerRef.current.postMessage({ type: 'loadWebLLM' });
    }
  }, [isWebLLMReady]);

  const askQuestion = useCallback((question: string) => {
    if (!question.trim()) return;
    
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: question }]);
    setIsGenerating(true);
    setSources([]);
    
    workerRef.current?.postMessage({
      type: 'ask',
      payload: { question, useOllama }
    });
  }, [useOllama]);

  // Auto-load WebLLM once the vector store is ready
  useEffect(() => {
    if (isReady && !isWebLLMReady && !useOllama) {
      loadWebLLM();
    }
  }, [isReady, isWebLLMReady, useOllama, loadWebLLM]);

  return {
    messages,
    status,
    isReady,
    isWebLLMReady,
    isGenerating,
    sources,
    useOllama,
    setUseOllama,
    loadWebLLM,
    webLLMProgress,
    askQuestion
  };
}
