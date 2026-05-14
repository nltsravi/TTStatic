import Dexie, { type Table } from 'dexie';
import MiniSearch from 'minisearch';

export interface Chunk {
  id: string;
  route: string;
  pageTitle: string;
  heading: string;
  content: string;
  embedding?: number[];
}

export class AIVectorStore extends Dexie {
  chunks!: Table<Chunk, string>;

  constructor() {
    super('AIVectorStoreDB');
    this.version(1).stores({
      chunks: 'id, route, content'
    });
  }
}

export const db = new AIVectorStore();

// Cosine Similarity Function
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Hybrid Search
export async function hybridSearch(
  query: string,
  queryEmbedding: number[],
  allChunks: Chunk[],
  miniSearch: MiniSearch,
  topK: number = 5
) {
  // 1. Keyword Search
  const keywordResults = miniSearch.search(query, { prefix: true, fuzzy: 0.2 });
  const keywordScoreMap = new Map(keywordResults.map(r => [r.id, r.score]));

  // Normalize keyword scores
  const maxKeywordScore = Math.max(...Array.from(keywordScoreMap.values()), 1);

  // 2. Semantic Search & Hybrid Scoring
  const scoredChunks = allChunks.map(chunk => {
    let semanticScore = 0;
    if (chunk.embedding && queryEmbedding.length > 0) {
      semanticScore = cosineSimilarity(queryEmbedding, chunk.embedding);
    }
    
    const rawKeywordScore = keywordScoreMap.get(chunk.id) || 0;
    const normalizedKeywordScore = rawKeywordScore / maxKeywordScore;

    // Hybrid calculation (e.g., 70% semantic, 30% keyword)
    const hybridScore = (semanticScore * 0.7) + (normalizedKeywordScore * 0.3);

    return {
      chunk,
      score: hybridScore,
      semanticScore,
      keywordScore: normalizedKeywordScore
    };
  });

  // Sort by highest score
  scoredChunks.sort((a, b) => b.score - a.score);

  return scoredChunks.slice(0, topK);
}
