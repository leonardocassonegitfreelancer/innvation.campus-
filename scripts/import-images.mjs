#!/usr/bin/env node
/**
 * Import and optimise images from a zip file into src/assets/.
 *
 * Usage:
 *   node scripts/import-images.mjs <path-to-zip> [--force]
 *
 * The prefix is derived from the root folder inside the zip (if one exists)
 * or from the zip filename, converted to lowercase with spaces → dashes.
 */

import AdmZip from 'adm-zip';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

// ── helpers ─────────────────────────────────────────────────────────────────

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.avif', '.gif', '.heic', '.heif']);

function toSlug(name) {
  return name.trim().toLowerCase().replace(/\s+/g, '-');
}

function isImage(entryName) {
  return SUPPORTED.has(path.extname(entryName).toLowerCase());
}

// ── args ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const force = args.includes('--force');
const zipArg = args.find(a => !a.startsWith('--'));

if (!zipArg) {
  console.error('Usage: node scripts/import-images.mjs <path-to-zip> [--force]');
  process.exit(1);
}

const zipPath = path.resolve(zipArg);

// ── validate zip path ────────────────────────────────────────────────────────

if (!fs.existsSync(zipPath)) {
  console.error(`Error: file not found — ${zipPath}`);
  process.exit(1);
}

if (path.extname(zipPath).toLowerCase() !== '.zip') {
  console.error(`Error: expected a .zip file, got "${path.extname(zipPath)}"`);
  process.exit(1);
}

// ── open zip ─────────────────────────────────────────────────────────────────

let zip;
try {
  zip = new AdmZip(zipPath);
} catch (err) {
  console.error(`Error: could not open zip — ${err.message}`);
  process.exit(1);
}

const entries = zip.getEntries().filter(e => !e.isDirectory && isImage(e.entryName));

if (entries.length === 0) {
  console.error('Error: zip contains no supported image files (jpg, jpeg, png, webp, tiff, avif, gif).');
  process.exit(1);
}

// ── determine prefix ─────────────────────────────────────────────────────────

// Primary: use the zip filename (what the user controls when they name the file).
// This is more reliable than the internal folder name which may differ.
const prefix = toSlug(path.basename(zipPath, '.zip'));

console.log(`\nPrefix: ${prefix}`);
console.log(`Images found in zip: ${entries.length}`);

// ── sort entries alphabetically by filename ───────────────────────────────────

entries.sort((a, b) => path.basename(a.entryName).localeCompare(path.basename(b.entryName)));

// ── setup temp dir ────────────────────────────────────────────────────────────

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'import-images-'));

// ── determine output paths & check for conflicts ──────────────────────────────

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(projectRoot, 'src', 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error(`Error: assets directory not found at ${assetsDir}`);
  fs.rmSync(tmpDir, { recursive: true, force: true });
  process.exit(1);
}

const outputPaths = entries.map((_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return path.join(assetsDir, `${prefix}-${n}.webp`);
});

const conflicts = outputPaths.filter(p => fs.existsSync(p));
if (conflicts.length > 0) {
  if (!force) {
    console.warn(`\nWarning: ${conflicts.length} file(s) already exist in src/assets/ and will NOT be overwritten:`);
    conflicts.forEach(c => console.warn(`  ${path.basename(c)}`));
    console.warn('Run with --force to overwrite.\n');
  } else {
    console.log(`\n--force active: overwriting ${conflicts.length} existing file(s).`);
  }
}

// ── extract + optimise ────────────────────────────────────────────────────────

console.log('\nProcessing images…\n');

let skipped = 0;
let written = 0;
let errors = 0;

for (let i = 0; i < entries.length; i++) {
  const entry = entries[i];
  const dest = outputPaths[i];
  const label = path.basename(dest);

  if (fs.existsSync(dest) && !force) {
    console.log(`  skip  ${label}  (already exists)`);
    skipped++;
    continue;
  }

  // Extract raw bytes from zip entry
  const buffer = entry.getData();
  const tmpFile = path.join(tmpDir, `img-${i}${path.extname(entry.entryName)}`);

  try {
    fs.writeFileSync(tmpFile, buffer);

    // HEIC/HEIF: convert to JPEG first via ffmpeg (sharp lacks HEIC support)
    let sharpInput = tmpFile;
    const isHeic = ['.heic', '.heif'].includes(path.extname(tmpFile).toLowerCase());
    const tmpJpeg = tmpFile.replace(/\.\w+$/, '.jpg');
    if (isHeic) {
      execFileSync('ffmpeg', ['-y', '-i', tmpFile, tmpJpeg], { stdio: 'pipe' });
      sharpInput = tmpJpeg;
    }

    await sharp(sharpInput)
      .resize({ width: 2400, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(dest);

    if (isHeic && fs.existsSync(tmpJpeg)) fs.rmSync(tmpJpeg);

    const srcSize = (buffer.length / 1024).toFixed(0);
    const outSize = (fs.statSync(dest).size / 1024).toFixed(0);
    console.log(`  ok    ${label}  (${srcSize} KB → ${outSize} KB)`);
    written++;
  } catch (err) {
    console.error(`  error ${label}  — ${err.message}`);
    errors++;
    // Remove partial output if any
    if (fs.existsSync(dest)) fs.rmSync(dest);
  } finally {
    if (fs.existsSync(tmpFile)) fs.rmSync(tmpFile);
  }
}

// ── cleanup temp ──────────────────────────────────────────────────────────────

fs.rmSync(tmpDir, { recursive: true, force: true });

// ── summary ───────────────────────────────────────────────────────────────────

console.log('\n────────────────────────────────');
console.log(`Done.  written: ${written}  skipped: ${skipped}  errors: ${errors}`);
if (written > 0) {
  console.log(`Output → src/assets/${prefix}-01.webp … ${prefix}-${String(written + skipped).padStart(2, '0')}.webp`);
}
console.log('');
