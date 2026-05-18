import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = path.join(process.cwd(), "public", "frames");
const OUTPUT_DIR = path.join(process.cwd(), "public", "frames-webp");
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;
const WEBP_QUALITY = 85;

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await fs.readdir(SOURCE_DIR))
    .filter((name) => name.endsWith(".png"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const inputPath = path.join(SOURCE_DIR, file);
    const outputName = file.replace(/\.png$/i, ".webp");
    const outputPath = path.join(OUTPUT_DIR, outputName);

    const inputStat = await fs.stat(inputPath);
    totalBefore += inputStat.size;

    await sharp(inputPath)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: "contain",
        background: { r: 5, g: 5, b: 5, alpha: 1 },
        kernel: sharp.kernel.lanczos3,
      })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(outputPath);

    const outputStat = await fs.stat(outputPath);
    totalAfter += outputStat.size;
  }

  const saved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`Optimized ${files.length} frames.`);
  console.log(`Before: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
  console.log(`After:  ${(totalAfter / 1024 / 1024).toFixed(1)} MB (${saved}% smaller)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
