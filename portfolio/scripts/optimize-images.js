// Run this script to automatically create thumbnails and optimize images
const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// Configuration
const CONFIG = {
    inputDir: "./public/images/album",
    outputDir: "./public/images/optimized",
    thumbnailDir: "./public/images/thumbnails",

    // Image quality settings
    thumbnail: {
        width: 400,
        height: 400,
        quality: 60, // Lower quality for thumbnails (30-50KB target)
        format: "webp",
    },

    fullsize: {
        width: 1200,
        height: 1200,
        quality: 80, // Higher quality for lightbox (150-250KB target)
        format: "webp",
    },

    // Fallback JPEG versions
    fallback: {
        thumbnail: { quality: 70 },
        fullsize: { quality: 85 },
    },
};

async function ensureDirectoryExists(dirPath) {
    try {
        await fs.access(dirPath);
    } catch {
        await fs.mkdir(dirPath, { recursive: true });
        console.log(`📁 Created directory: ${dirPath}`);
    }
}

async function optimizeImage(inputPath, outputPath, options) {
    const { width, height, quality, format } = options;

    let pipeline = sharp(inputPath).resize(width, height, {
        fit: "cover",
        position: "center",
    });

    if (format === "webp") {
        pipeline = pipeline.webp({ quality });
    } else if (format === "jpeg") {
        pipeline = pipeline.jpeg({ quality, progressive: true });
    }

    await pipeline.toFile(outputPath);

    // Get file size for reporting
    const stats = await fs.stat(outputPath);
    return Math.round(stats.size / 1024); // Size in KB
}

async function processImageFile(filePath, relativePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const subDir = path.dirname(relativePath);

    // Create subdirectories
    const thumbnailSubDir = path.join(CONFIG.thumbnailDir, subDir);
    const fullsizeSubDir = path.join(CONFIG.outputDir, subDir);

    await ensureDirectoryExists(thumbnailSubDir);
    await ensureDirectoryExists(fullsizeSubDir);

    try {
        // Generate thumbnail WebP
        const thumbnailWebP = path.join(thumbnailSubDir, `${fileName}.webp`);
        const thumbnailSize = await optimizeImage(filePath, thumbnailWebP, {
            ...CONFIG.thumbnail,
            format: "webp",
        });

        // Generate thumbnail JPEG fallback
        const thumbnailJPEG = path.join(thumbnailSubDir, `${fileName}.jpg`);
        await optimizeImage(filePath, thumbnailJPEG, {
            ...CONFIG.thumbnail,
            format: "jpeg",
            quality: CONFIG.fallback.thumbnail.quality,
        });

        // Generate full-size WebP
        const fullsizeWebP = path.join(fullsizeSubDir, `${fileName}.webp`);
        const fullsizeSize = await optimizeImage(filePath, fullsizeWebP, {
            ...CONFIG.fullsize,
            format: "webp",
        });

        // Generate full-size JPEG fallback
        const fullsizeJPEG = path.join(fullsizeSubDir, `${fileName}.jpg`);
        await optimizeImage(filePath, fullsizeJPEG, {
            ...CONFIG.fullsize,
            format: "jpeg",
            quality: CONFIG.fallback.fullsize.quality,
        });

        console.log(
            `✅ ${fileName}: Thumbnail ${thumbnailSize}KB, Full ${fullsizeSize}KB`
        );

        return {
            original: filePath,
            thumbnail: {
                webp: thumbnailWebP,
                jpeg: thumbnailJPEG,
                size: thumbnailSize,
            },
            fullsize: {
                webp: fullsizeWebP,
                jpeg: fullsizeJPEG,
                size: fullsizeSize,
            },
        };
    } catch (error) {
        console.error(`❌ Error processing ${fileName}:`, error.message);
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
        images: processedImages.filter(Boolean).map((img) => ({
            original: img.original,
            thumbnail: {
                webp: img.thumbnail.webp.replace("./public", ""),
                jpeg: img.thumbnail.jpeg.replace("./public", ""),
                size: img.thumbnail.size,
            },
            fullsize: {
                webp: img.fullsize.webp.replace("./public", ""),
                jpeg: img.fullsize.jpeg.replace("./public", ""),
                size: img.fullsize.size,
            },
        })),
    };

    await fs.writeFile(
        "./public/images/optimization-manifest.json",
        JSON.stringify(manifest, null, 2)
    );

    console.log("📄 Generated optimization manifest");
}

async function main() {
    console.log("🚀 Starting image optimization...");

    // Ensure output directories exist
    await ensureDirectoryExists(CONFIG.thumbnailDir);
    await ensureDirectoryExists(CONFIG.outputDir);

    // Find all image files
    const imageFiles = await findImageFiles(CONFIG.inputDir);
    console.log(`📸 Found ${imageFiles.length} images to process`);

    // Process images
    const processedImages = [];
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;

    for (const { fullPath, relativePath } of imageFiles) {
        const originalStats = await fs.stat(fullPath);
        totalOriginalSize += originalStats.size;

        const result = await processImageFile(fullPath, relativePath);
        if (result) {
            processedImages.push(result);
            totalOptimizedSize +=
                (result.thumbnail.size + result.fullsize.size) * 1024;
        }
    }

    // Generate manifest file
    await generateManifest(processedImages);

    // Print summary
    const savings = (
        ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) *
        100
    ).toFixed(1);
    console.log("\n📊 Optimization Summary:");
    console.log(
        `   Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB`
    );
    console.log(
        `   Optimized total: ${(totalOptimizedSize / 1024 / 1024).toFixed(1)}MB`
    );
    console.log(`   Space saved: ${savings}%`);
    console.log(`   Images processed: ${processedImages.length}`);
    console.log("\n✅ Image optimization complete!");
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { optimizeImage, CONFIG };
