// scripts/optimize-images.js - Updated with better quality settings
const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// Updated Configuration - Better quality thumbnails
const CONFIG = {
    inputDir: "./public/images/album",
    thumbnailDir: "./public/images/thumbnails", // Now higher quality for grid view

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
        pipeline = pipeline.webp({ quality, effort: 6 }); // Higher effort for better compression
    } else if (format === "jpeg") {
        pipeline = pipeline.jpeg({ quality, progressive: true, mozjpeg: true });
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

    await ensureDirectoryExists(thumbnailSubDir);

    try {
        // Generate optimized thumbnail WebP (for grid display)
        const thumbnailWebP = path.join(thumbnailSubDir, `${fileName}.webp`);
        const thumbnailSize = await optimizeImage(filePath, thumbnailWebP, {
            ...CONFIG.thumbnail,
            format: "webp",
        });

        // Generate optimized thumbnail JPEG fallback
        const thumbnailJPEG = path.join(thumbnailSubDir, `${fileName}.jpg`);
        await optimizeImage(filePath, thumbnailJPEG, {
            ...CONFIG.thumbnail,
            format: "jpeg",
            quality: CONFIG.fallback.thumbnail.quality,
        });

        console.log(
            `✅ ${fileName}: Optimized thumbnail ${thumbnailSize}KB (original for lightbox)`
        );

        return {
            original: filePath,
            thumbnail: {
                webp: thumbnailWebP,
                jpeg: thumbnailJPEG,
                size: thumbnailSize,
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
        strategy: "optimized_thumbnails_original_lightbox",
        description:
            "Thumbnails are optimized for grid display, originals shown in lightbox",
        images: processedImages.filter(Boolean).map((img) => ({
            original: img.original.replace("./public", ""),
            thumbnail: {
                webp: img.thumbnail.webp.replace("./public", ""),
                jpeg: img.thumbnail.jpeg.replace("./public", ""),
                size: img.thumbnail.size,
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
    console.log("🚀 Starting image optimization (Updated Strategy)...");
    console.log(
        "📋 Strategy: Optimized thumbnails for grid + Original images for lightbox"
    );

    // Ensure output directories exist
    await ensureDirectoryExists(CONFIG.thumbnailDir);

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
            totalOptimizedSize += result.thumbnail.size * 1024; // Only count thumbnails
        }
    }

    // Generate manifest file
    await generateManifest(processedImages);

    // Print summary
    console.log("\n📊 Optimization Summary:");
    console.log("============================");
    console.log(`   Strategy: Better thumbnails + Original lightbox`);
    console.log(`   Thumbnail quality: Higher (78% WebP, ~80-120KB each)`);
    console.log(`   Lightbox: Original images (~500KB each)`);
    console.log(
        `   Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB`
    );
    console.log(
        `   Grid load size: ${(totalOptimizedSize / 1024 / 1024).toFixed(1)}MB`
    );
    console.log(
        `   Average thumbnail: ${Math.round(
            totalOptimizedSize / 1024 / processedImages.length
        )}KB`
    );
    console.log(`   Images processed: ${processedImages.length}`);
    console.log("\n✅ Image optimization complete!");
    console.log("🎯 Result: Better quality grid + Full originals on click");
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { optimizeImage, CONFIG };
