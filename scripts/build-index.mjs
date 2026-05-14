import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import { globSync } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.join(__dirname, '../out');
const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'content-chunks.json');

// Configuration for chunking
const MIN_CHUNK_LENGTH = 50;
const MAX_CHUNK_LENGTH = 1000;

console.log('🤖 Starting AI RAG Indexing...');

if (!fs.existsSync(OUT_DIR)) {
  console.error(`❌ Output directory ${OUT_DIR} does not exist. Run "npm run build" first.`);
  process.exit(1);
}

const htmlFiles = globSync('**/*.html', { cwd: OUT_DIR, absolute: true });
console.log(`📄 Found ${htmlFiles.length} HTML files to index.`);

const chunks = [];
let chunkIdCounter = 1;

for (const filePath of htmlFiles) {
  const relativePath = path.relative(OUT_DIR, filePath);
  
  // Calculate URL route
  let route = '/' + relativePath.replace(/\\/g, '/').replace(/\/index\.html$/, '').replace(/\.html$/, '');
  if (route === '/index') route = '/';

  // Read and parse HTML
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  // Remove boilerplate navigation/footer elements
  $('nav, header, footer, script, style, noscript, svg, button, .hidden').remove();

  const pageTitle = $('title').text().trim() || route;

  // Extract text nodes with structure. 
  // We'll target main content blocks. If no main tag, use body.
  const mainContent = $('main').length ? $('main') : $('body');

  // Find all headings and paragraphs
  const elements = mainContent.find('h1, h2, h3, h4, p, li, td, th');
  
  let currentHeading = pageTitle;
  let currentChunkText = '';

  elements.each((_, el) => {
    const tagName = el.tagName.toLowerCase();
    const text = $(el).text().replace(/\s+/g, ' ').trim();

    if (!text || text.length < 10) return; // Skip very short artifacts

    if (['h1', 'h2', 'h3', 'h4'].includes(tagName)) {
      // It's a heading. Start a new context but optionally flush the old one.
      if (currentChunkText.length >= MIN_CHUNK_LENGTH) {
        chunks.push({
          id: `chunk_${chunkIdCounter++}`,
          route,
          pageTitle,
          heading: currentHeading,
          content: currentChunkText.trim(),
        });
        currentChunkText = '';
      }
      currentHeading = text;
    } else {
      // It's content
      if ((currentChunkText.length + text.length) > MAX_CHUNK_LENGTH) {
        // Flush current chunk
        if (currentChunkText.length >= MIN_CHUNK_LENGTH) {
          chunks.push({
            id: `chunk_${chunkIdCounter++}`,
            route,
            pageTitle,
            heading: currentHeading,
            content: currentChunkText.trim(),
          });
        }
        currentChunkText = text;
      } else {
        currentChunkText += (currentChunkText ? ' ' : '') + text;
      }
    }
  });

  // Flush remaining
  if (currentChunkText.length >= MIN_CHUNK_LENGTH) {
    chunks.push({
      id: `chunk_${chunkIdCounter++}`,
      route,
      pageTitle,
      heading: currentHeading,
      content: currentChunkText.trim(),
    });
  }
}

// Deduplicate exactly identical chunks (from shared layout pieces that weren't caught)
const uniqueChunks = Array.from(new Map(chunks.map(c => [c.content, c])).values());

console.log(`✅ Extracted ${uniqueChunks.length} unique chunks.`);

// Ensure output directory exists (in case it was deleted right after glob)
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(uniqueChunks, null, 2));
console.log(`💾 Saved chunks to ${OUTPUT_FILE}`);

// Copy to out/ so it's included in the final static export deployed to S3
const OUT_CHUNKS_FILE = path.join(OUT_DIR, 'content-chunks.json');
fs.copyFileSync(OUTPUT_FILE, OUT_CHUNKS_FILE);
console.log(`📦 Copied to ${OUT_CHUNKS_FILE}`);
