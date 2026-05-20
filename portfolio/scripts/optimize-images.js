// scripts/optimize-images.js - Enhanced with smart duplicate checking
const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// Updated Configuration - Better quality thumbnails
const CONFIG = {
  inputDir: "../public/images/album",
  thumbnailDir: "../public/images/thumbnails", // Now higher quality for grid view

  // Grid thumbnails - Good quality for browsing (80-120KB target)
  thumbnail: {
    width: 600, // Larger size for better grid display
    height: 600,
    quality: 78, // Higher quality - good balance
    format: "webp",
  },

  // Fallback JPEG versions
  fallback: {
    thumbnail: { quality: 85 }, // Higher fallback quality
  },
};

// Color codes for better console output
const colors = {
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
  reset: "\x1b[0m",
  bright: "\x1b[1m",
};

const log = (message, color = colors.reset) => {
  console.log(`${color}${message}${colors.reset}`);
};

async function getFileStats(filePath) {
  try {
    return await fs.stat(filePath);
  } catch {
    return null;
  }
}

async function shouldProcessImage(inputPath, webpPath, jpegPath) {
  const inputStats = await getFileStats(inputPath);
  const webpStats = await getFileStats(webpPath);
  const jpegStats = await getFileStats(jpegPath);

  // If either output file doesn't exist, process it
  if (!webpStats || !jpegStats) {
    return true;
  }

  // If input is newer than any output, process it
  if (
    inputStats &&
    (inputStats.mtime > webpStats.mtime || inputStats.mtime > jpegStats.mtime)
  ) {
    return true;
  }

  // If both outputs exist and are newer, skip it
  return false;
}

async function ensureDirectoryExists(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
    log(`📁 Created directory: ${dirPath}`, colors.blue);
  }
}

async function optimizeImage(inputPath, outputPath, options) {
  const { width, height, quality, format } = options;

  let pipeline = sharp(inputPath).resize(width, height, {
    fit: "cover",
    position: "center",
  });

  if (format === "webp") {
    pipeline = pipeline.webp({ quality, effort: 6 }); // Higher effort for better compression
  } else if (format === "jpeg") {
    pipeline = pipeline.jpeg({ quality, progressive: true, mozjpeg: true });
  }

  await pipeline.toFile(outputPath);

  // Get file size for reporting
  const stats = await fs.stat(outputPath);
  return Math.round(stats.size / 1024); // Size in KB
}

async function processImageFile(filePath, relativePath, forceProcess = false) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const subDir = path.dirname(relativePath);

  // Create subdirectories
  const thumbnailSubDir = path.join(CONFIG.thumbnailDir, subDir);
  await ensureDirectoryExists(thumbnailSubDir);

  const thumbnailWebP = path.join(thumbnailSubDir, `${fileName}.webp`);
  const thumbnailJPEG = path.join(thumbnailSubDir, `${fileName}.jpg`);

  // Check if we should process this image
  if (
    !forceProcess &&
    !(await shouldProcessImage(filePath, thumbnailWebP, thumbnailJPEG))
  ) {
    // Get existing file size for reporting
    const webpStats = await getFileStats(thumbnailWebP);
    const existingSize = webpStats ? Math.round(webpStats.size / 1024) : 0;

    log(
      `⏭️  Skipped: ${fileName} (already optimized, ${existingSize}KB)`,
      colors.blue,
    );

    return {
      original: filePath,
      thumbnail: {
        webp: thumbnailWebP,
        jpeg: thumbnailJPEG,
        size: existingSize,
      },
      skipped: true,
    };
  }

  try {
    log(`🔄 Processing: ${fileName}`, colors.yellow);

    // Generate optimized thumbnail WebP (for grid display)
    const thumbnailSize = await optimizeImage(filePath, thumbnailWebP, {
      ...CONFIG.thumbnail,
      format: "webp",
    });

    // Generate optimized thumbnail JPEG fallback
    await optimizeImage(filePath, thumbnailJPEG, {
      ...CONFIG.thumbnail,
      format: "jpeg",
      quality: CONFIG.fallback.thumbnail.quality,
    });

    log(
      `✅ ${fileName}: Optimized thumbnail ${thumbnailSize}KB (original for lightbox)`,
      colors.green,
    );

    return {
      original: filePath,
      thumbnail: {
        webp: thumbnailWebP,
        jpeg: thumbnailJPEG,
        size: thumbnailSize,
      },
      skipped: false,
    };
  } catch (error) {
    log(`❌ Error processing ${fileName}: ${error.message}`, colors.red);
    return null;
  }
}

async function findImageFiles(dir, baseDir = dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recursively process subdirectories
      const subFiles = await findImageFiles(fullPath, baseDir);
      files.push(...subFiles);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
        const relativePath = path.relative(baseDir, fullPath);
        files.push({ fullPath, relativePath });
      }
    }
  }

  return files;
}

async function generateManifest(processedImages) {
  const manifest = {
    generated: new Date().toISOString(),
    config: CONFIG,
    strategy: "optimized_thumbnails_original_lightbox_smart_processing",
    description:
      "Thumbnails are optimized for grid display, originals shown in lightbox. Smart processing skips already optimized images.",
    images: processedImages.filter(Boolean).map((img) => ({
      original: img.original.replace("./public", ""),
      thumbnail: {
        webp: img.thumbnail.webp.replace("./public", ""),
        jpeg: img.thumbnail.jpeg.replace("./public", ""),
        size: img.thumbnail.size,
      },
      skipped: img.skipped || false,
    })),
  };

  await fs.writeFile(
    "../public/images/optimization-manifest.json",
    JSON.stringify(manifest, null, 2),
  );

  log("📄 Generated optimization manifest", colors.blue);
}

async function main() {
  log("🚀 Starting smart image optimization...", colors.bright);
  log(
    "📋 Strategy: Optimized thumbnails for grid + Original images for lightbox",
  );
  log("🧠 Smart processing: Only optimizes new or changed images");
  console.log("");

  // Check if input directory exists
  try {
    await fs.access(CONFIG.inputDir);
  } catch {
    log(`❌ Input directory not found: ${CONFIG.inputDir}`, colors.red);
    process.exit(1);
  }

  // Ensure output directories exist
  await ensureDirectoryExists(CONFIG.thumbnailDir);

  // Find all image files
  const imageFiles = await findImageFiles(CONFIG.inputDir);
  log(`📸 Found ${imageFiles.length} images to process`, colors.blue);
  console.log("");

  // Process images with smart checking
  const processedImages = [];
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const { fullPath, relativePath } of imageFiles) {
    const originalStats = await fs.stat(fullPath);
    totalOriginalSize += originalStats.size;

    const result = await processImageFile(fullPath, relativePath);
    if (result) {
      processedImages.push(result);
      totalOptimizedSize += result.thumbnail.size * 1024; // Only count thumbnails

      if (result.skipped) {
        skippedCount++;
      } else {
        processedCount++;
      }
    } else {
      errorCount++;
    }
  }

  // Generate manifest file
  await generateManifest(processedImages);

  // Print enhanced summary
  console.log("");
  log("📊 Optimization Summary:", colors.bright);
  log("============================");
  log(`   Strategy: Better thumbnails + Original lightbox`);
  log(`   Thumbnail quality: Higher (78% WebP, ~80-120KB each)`);
  log(`   Lightbox: Original images (~500KB each)`);
  log(`   Processed: ${processedCount} images`, colors.green);
  log(`   Skipped: ${skippedCount} images (already optimized)`, colors.blue);
  if (errorCount > 0) {
    log(`   Errors: ${errorCount} images`, colors.red);
  }
  log(`   Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB`);
  log(`   Grid load size: ${(totalOptimizedSize / 1024 / 1024).toFixed(1)}MB`);

  if (processedImages.length > 0) {
    log(
      `   Average thumbnail: ${Math.round(
        totalOptimizedSize / 1024 / processedImages.length,
      )}KB`,
    );
  }

  console.log("");
  log("✅ Smart image optimization complete!", colors.bright);
  log("🎯 Result: Better quality grid + Full originals on click", colors.green);

  if (skippedCount > 0) {
    log(
      `💡 Tip: ${skippedCount} images were skipped because they're already optimized!`,
      colors.yellow,
    );
  }
}

// Run the script
if (require.main === module) {
  main().catch((error) => {
    log(`💥 Fatal error: ${error.message}`, colors.red);
    process.exit(1);
  });
}

module.exports = { optimizeImage, CONFIG };
