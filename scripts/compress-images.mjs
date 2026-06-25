import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const MAX_WIDTH = 1600;
const PNG_QUALITY = 82;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 82;

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp"]);

async function collectImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(fullPath)));
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (IMAGE_EXT.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function compressImage(filePath) {
  const before = (await fs.stat(filePath)).size;
  const ext = path.extname(filePath).toLowerCase();
  const image = sharp(filePath, { failOn: "none" });
  const metadata = await image.metadata();

  let pipeline = image.rotate();

  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: "inside",
    });
  }

  let buffer;
  if (ext === ".png") {
    buffer = await pipeline
      .png({
        quality: PNG_QUALITY,
        compressionLevel: 9,
        palette: true,
        effort: 10,
      })
      .toBuffer();
  } else if (ext === ".jpg" || ext === ".jpeg") {
    buffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  } else if (ext === ".webp") {
    buffer = await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer();
  } else {
    return null;
  }

  if (buffer.length >= before) {
    return {
      filePath,
      before,
      after: before,
      skipped: true,
    };
  }

  await fs.writeFile(filePath, buffer);

  return {
    filePath,
    before,
    after: buffer.length,
    skipped: false,
    width: metadata.width,
    height: metadata.height,
  };
}

async function main() {
  const files = await collectImages(PUBLIC_DIR);
  let totalBefore = 0;
  let totalAfter = 0;
  const results = [];

  console.log(`Compressing ${files.length} images in public/...\n`);

  for (const filePath of files) {
    const result = await compressImage(filePath);
    if (!result) continue;

    totalBefore += result.before;
    totalAfter += result.after;
    results.push(result);

    const rel = path.relative(process.cwd(), result.filePath);
    const saved = result.before - result.after;
    const pct = result.before ? ((saved / result.before) * 100).toFixed(1) : "0.0";

    if (result.skipped) {
      console.log(`- ${rel}: kept (${formatBytes(result.before)})`);
    } else {
      console.log(
        `✓ ${rel}: ${formatBytes(result.before)} → ${formatBytes(result.after)} (-${pct}%)`,
      );
    }
  }

  const totalSaved = totalBefore - totalAfter;
  const totalPct = totalBefore
    ? ((totalSaved / totalBefore) * 100).toFixed(1)
    : "0.0";

  console.log("\n---");
  console.log(
    `Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (-${totalPct}%, saved ${formatBytes(totalSaved)})`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
