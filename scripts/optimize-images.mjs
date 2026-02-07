import sharp from "sharp";
import { readdir, mkdir, stat, rename, unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, "../src/assets");
const PRODUCTS_DIR = path.join(ASSETS_DIR, "products");

// Configuración de tamaños máximos
const CONFIG = {
  products: { maxWidth: 800, maxHeight: 800, quality: 80 },
  landing: { maxWidth: 1920, maxHeight: 1080, quality: 85 },
  default: { maxWidth: 1200, maxHeight: 1200, quality: 80 },
};

async function optimizeImage(inputPath, config) {
  const ext = path.extname(inputPath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  const dir = path.dirname(inputPath);
  const basename = path.basename(inputPath, ext);
  const tempPath = path.join(dir, `${basename}_optimized${ext}`);

  try {
    const statBefore = await stat(inputPath);
    const sizeBefore = statBefore.size;

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Solo redimensionar si es más grande que el máximo
    const needsResize =
      (metadata.width && metadata.width > config.maxWidth) ||
      (metadata.height && metadata.height > config.maxHeight);

    let pipeline = image;

    if (needsResize) {
      pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    // Optimizar según formato
    if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({ quality: config.quality, mozjpeg: true });
    } else if (ext === ".png") {
      pipeline = pipeline.png({ quality: config.quality, compressionLevel: 9 });
    } else if (ext === ".webp") {
      pipeline = pipeline.webp({ quality: config.quality });
    }

    // Guardar a archivo temporal
    await pipeline.toFile(tempPath);

    const statAfter = await stat(tempPath);
    const sizeAfter = statAfter.size;

    // Solo reemplazar si es más pequeño
    if (sizeAfter < sizeBefore) {
      await unlink(inputPath);
      await rename(tempPath, inputPath);
      const reduction = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
      console.log(
        `✓ ${path.basename(inputPath)}: ${formatSize(sizeBefore)} → ${formatSize(sizeAfter)} (-${reduction}%)`
      );
    } else {
      await unlink(tempPath);
      console.log(`○ ${path.basename(inputPath)}: ya optimizada`);
    }
  } catch (error) {
    // Limpiar archivo temporal si existe
    try {
      await unlink(tempPath);
    } catch {}
    console.error(`✗ Error procesando ${path.basename(inputPath)}:`, error.message);
  }
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  if (bytes >= 1024) return (bytes / 1024).toFixed(0) + " KB";
  return bytes + " B";
}

async function processDirectory(dir, config) {
  try {
    const files = await readdir(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const fileStat = await stat(filePath);
      if (fileStat.isFile()) {
        await optimizeImage(filePath, config);
      }
    }
  } catch (error) {
    console.error(`Error leyendo directorio ${dir}:`, error.message);
  }
}

async function main() {
  console.log("🖼️  Optimizando imágenes...\n");

  console.log("📁 Carpeta products:");
  await processDirectory(PRODUCTS_DIR, CONFIG.products);

  console.log("\n📁 Carpeta assets:");
  const assetsFiles = await readdir(ASSETS_DIR);
  for (const file of assetsFiles) {
    const filePath = path.join(ASSETS_DIR, file);
    const fileStat = await stat(filePath);
    if (fileStat.isFile()) {
      const config = file.includes("landing")
        ? CONFIG.landing
        : CONFIG.default;
      await optimizeImage(filePath, config);
    }
  }

  console.log("\n✅ Optimización completada");
}

main();
