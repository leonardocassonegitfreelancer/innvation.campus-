import sharp from "sharp";
import { readdirSync, unlinkSync } from "fs";
import { join, extname, basename } from "path";

const assetsDir = "./src/assets";
const files = readdirSync(assetsDir);

let converted = 0;
let skipped = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    skipped++;
    continue;
  }

  const input = join(assetsDir, file);
  const outName = basename(file, ext) + ".webp";
  const output = join(assetsDir, outName);

  try {
    await sharp(input)
      .webp({ quality: 82 })
      .toFile(output);
    unlinkSync(input);
    console.log(`✓ ${file} → ${outName}`);
    converted++;
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log(`\nDone: ${converted} converted, ${skipped} skipped.`);
