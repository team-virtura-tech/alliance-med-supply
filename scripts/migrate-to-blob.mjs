/**
 * Migrate images from ./public/images to Vercel Blob storage.
 *
 * Prerequisites:
 *   1. Run `vercel env pull .env.local` to get BLOB_READ_WRITE_TOKEN
 *   2. Run `npm install` to ensure @vercel/blob and dotenv are installed
 *
 * Usage:
 *   node scripts/migrate-to-blob.mjs
 *   — or —
 *   npm run migrate:blob
 */

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const { put } = await import('@vercel/blob');

const IMAGES_DIR = path.resolve('public/images');
const BLOB_PREFIX = 'alliance-med';
const OUTPUT_FILE = path.resolve('image-map.json');

/**
 * Recursively collect all file paths under a directory.
 */
async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)));
    } else if (!entry.name.startsWith('.')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Derive the blob storage path and the local public path from a file path.
 * e.g. public/images/categories/rollator.png
 *   → blobPath:  alliance-med/categories/rollator.png
 *   → localPath: /images/categories/rollator.png
 */
function getPaths(filePath) {
  const relative = path.relative(IMAGES_DIR, filePath); // e.g. categories/rollator.png
  const blobPath = `${BLOB_PREFIX}/${relative}`;
  const localPath = `/images/${relative}`;
  return { blobPath, localPath };
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      '❌ BLOB_READ_WRITE_TOKEN not found.\n' +
        '   Run: vercel env pull .env.local'
    );
    process.exit(1);
  }

  console.log('🔍 Scanning for images in', IMAGES_DIR);
  const files = await getAllFiles(IMAGES_DIR);
  console.log(`📦 Found ${files.length} files to upload.\n`);

  const imageMap = {};
  let uploaded = 0;
  let failed = 0;

  for (const filePath of files) {
    const { blobPath, localPath } = getPaths(filePath);
    const fileSize = (await stat(filePath)).size;
    const sizeMB = (fileSize / 1024 / 1024).toFixed(1);

    try {
      process.stdout.write(
        `  [${uploaded + failed + 1}/${files.length}] Uploading ${blobPath} (${sizeMB} MB)...`
      );

      const fileBuffer = await readFile(filePath);
      const blob = await put(blobPath, fileBuffer, {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
      });

      imageMap[localPath] = blob.url;
      uploaded++;
      console.log(' ✅');
    } catch (err) {
      failed++;
      console.log(' ❌');
      console.error(`    Error: ${err.message}`);
    }
  }

  // Write the mapping file
  await writeFile(OUTPUT_FILE, JSON.stringify(imageMap, null, 2), 'utf-8');

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`✅ Uploaded: ${uploaded}`);
  if (failed > 0) console.log(`❌ Failed:   ${failed}`);
  console.log(`📄 Image map written to: ${OUTPUT_FILE}`);
  console.log(`${'─'.repeat(50)}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
