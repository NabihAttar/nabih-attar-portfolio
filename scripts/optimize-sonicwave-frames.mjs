import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = path.join(process.cwd(), "public", "frames");
const DESKTOP_DIR = path.join(process.cwd(), "public", "frames-webp");
const MOBILE_DIR = path.join(process.cwd(), "public", "frames-webp-mobile");

const DESKTOP = { width: 1920, height: 1080, quality: 85 };
const MOBILE = { width: 960, height: 540, quality: 82 };

async function optimizeSet(files, outputDir, { width, height, quality }) {
  await fs.mkdir(outputDir, { recursive: true });

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const inputPath = path.join(SOURCE_DIR, file);
    const outputName = file.replace(/\.png$/i, ".webp");
    const outputPath = path.join(outputDir, outputName);

    const inputStat = await fs.stat(inputPath);
    totalBefore += inputStat.size;

    await sharp(inputPath)
      .resize(width, height, {
        fit: "contain",
        background: { r: 5, g: 5, b: 5, alpha: 1 },
        kernel: sharp.kernel.lanczos3,
      })
      .webp({ quality, effort: 5 })
      .toFile(outputPath);

    totalAfter += (await fs.stat(outputPath)).size;
  }

  return { totalBefore, totalAfter, count: files.length };
}

async function main() {
  const files = (await fs.readdir(SOURCE_DIR))
    .filter((name) => name.endsWith(".png"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (files.length === 0) {
    throw new Error(`No PNG frames found in ${SOURCE_DIR}`);
  }

  const desktop = await optimizeSet(files, DESKTOP_DIR, DESKTOP);
  const mobile = await optimizeSet(files, MOBILE_DIR, MOBILE);

  console.log(`Desktop ${DESKTOP.width}x${DESKTOP.height}: ${desktop.count} frames`);
  console.log(`  ${(desktop.totalAfter / 1024 / 1024).toFixed(1)} MB webp`);
  console.log(`Mobile ${MOBILE.width}x${MOBILE.height}: ${mobile.count} frames`);
  console.log(`  ${(mobile.totalAfter / 1024 / 1024).toFixed(1)} MB webp`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
