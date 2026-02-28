/**
 * Replace local /images/... paths with Vercel Blob URLs in source files.
 *
 * Prerequisites:
 *   1. Run `npm run migrate:blob` first to generate image-map.json
 *
 * Usage:
 *   node scripts/replace-image-paths.mjs
 *   — or —
 *   npm run replace:blob-paths
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC_DIR = path.resolve('src');
const IMAGE_MAP_FILE = path.resolve('image-map.json');
const EXTENSIONS = new Set(['.tsx', '.ts', '.json', '.js', '.jsx']);

/**
 * Recursively collect all source files.
 */
async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)));
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  // Load image map
  let imageMap;
  try {
    const raw = await readFile(IMAGE_MAP_FILE, 'utf-8');
    imageMap = JSON.parse(raw);
  } catch {
    console.error(
      '❌ Could not read image-map.json.\n' +
        '   Run `npm run migrate:blob` first.'
    );
    process.exit(1);
  }

  const entries = Object.entries(imageMap);
  console.log(`📄 Loaded ${entries.length} mappings from image-map.json\n`);

  // Sort by longest path first to avoid partial replacements
  entries.sort((a, b) => b[0].length - a[0].length);

  const sourceFiles = await getAllFiles(SRC_DIR);
  console.log(`🔍 Scanning ${sourceFiles.length} source files...\n`);

  let totalReplacements = 0;
  let modifiedFiles = 0;
  const unmatchedPaths = new Set();

  for (const filePath of sourceFiles) {
    let content = await readFile(filePath, 'utf-8');
    let fileModified = false;
    let fileReplacements = 0;

    for (const [localPath, blobUrl] of entries) {
      if (content.includes(localPath)) {
        content = content.replaceAll(localPath, blobUrl);
        fileReplacements++;
        fileModified = true;
      }
    }

    // Check for any remaining /images/ references not in the map
    const remainingMatches = content.match(/["'`/]\/images\/[^"'`\s)}\]]+/g);
    if (remainingMatches) {
      for (const match of remainingMatches) {
        // Extract just the path part
        const imgPath = match.replace(/^["'`/]/, '');
        // Make sure it starts with /images/ and isn't already a blob URL
        if (
          imgPath.startsWith('/images/') &&
          !imgPath.includes('blob.vercel')
        ) {
          unmatchedPaths.add(imgPath);
        }
      }
    }

    if (fileModified) {
      await writeFile(filePath, content, 'utf-8');
      const relPath = path.relative(process.cwd(), filePath);
      console.log(`  ✅ ${relPath} (${fileReplacements} replacements)`);
      modifiedFiles++;
      totalReplacements += fileReplacements;
    }
  }

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`✅ Modified: ${modifiedFiles} files`);
  console.log(`🔄 Total replacements: ${totalReplacements}`);

  if (unmatchedPaths.size > 0) {
    console.log(
      `\n⚠️  ${unmatchedPaths.size} image path(s) NOT in image-map.json:`
    );
    for (const p of unmatchedPaths) {
      console.log(`    - ${p}`);
    }
    console.log(
      '\n   These may be missing files or need to be uploaded manually.'
    );
  }

  console.log(`${'─'.repeat(50)}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
