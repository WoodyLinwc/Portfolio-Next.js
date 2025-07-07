// src/components/photography/PhotoGalleryShowcase.tsx
"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import { useBackgroundPreloader } from "@/hooks/useBackgroundPreloader";
import { photos, filterOptions } from "@/data/photography/photos";

interface PhotoGalleryShowcaseProps {
    className?: string;
}

interface OptimizedLazyImageProps {
    src: string;
    alt: string;
    fill: boolean;
    className: string;
    priority: boolean;
    sizes: string;
    onClick?: () => void;
}

// Optimized LazyImage that tries thumbnails first, falls back to originals
function OptimizedLazyImage({
    src,
    alt,
    fill,
    className,
    priority,
    sizes,
    onClick,
}: OptimizedLazyImageProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [useOriginal, setUseOriginal] = useState(false);

    // Generate optimized thumbnail paths
    const getOptimizedPath = (originalPath: string) => {
        const pathParts = originalPath.split("/");
        const fileName = pathParts[pathParts.length - 1];
        const nameWithoutExt = fileName.split(".")[0];
        const directory = pathParts.slice(0, -1).join("/");

        // Remove /images/album/ and replace with thumbnails path
        const relativePath = directory.replace("/images/album/", "");

        return `/images/thumbnails/${relativePath}/${nameWithoutExt}.webp`;
    };

    const optimizedPath = getOptimizedPath(src);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        console.log(`Optimized image not found, using original: ${src}`);
        setUseOriginal(true);
        setImageLoaded(false); // Reset loading state
    };

    return (
        <div className="relative w-full h-full">
            {/* Loading placeholder */}
            {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">
                        <i className="fa fa-image text-2xl"></i>
                    </div>
                </div>
            )}

            {/* Use optimized thumbnail or fall back to original */}
            <Image
                src={useOriginal ? src : optimizedPath}
                alt={alt}
                fill={fill}
                className={`${className} transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                sizes={sizes}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                onLoad={handleImageLoad}
                onError={handleImageError}
                onClick={onClick}
                quality={useOriginal ? 75 : 85}
            />
        </div>
    );
}

export default function PhotoGalleryShowcase({
    className = "",
}: PhotoGalleryShowcaseProps) {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedImageLoading, setSelectedImageLoading] = useState(false);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
    const [showDebugInfo, setShowDebugInfo] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    const filteredPhotos = useMemo(() => {
        return activeFilter === "all"
            ? photos
            : photos.filter((photo) => photo.category === activeFilter);
    }, [activeFilter]);

    // Get all original image paths for preloading
    const allOriginalImages = useMemo(() => {
        return photos.map((photo) => photo.src);
    }, []);

    // Use the background preloader hook with debug disabled for production
    const {
        preloadedImages,
        isComplete,
        loadedCount,
        failedCount,
        preloadProgress,
        isPreloading,
        failedImages,
        // debugStatus, // Commented out to avoid unused variable warning
    } = useBackgroundPreloader(allOriginalImages, {
        startDelay: 1000, // Start preloading after 1 second
        imageDelay: 50, // 50ms delay between each image
        concurrency: 2, // Load 2 images concurrently
        cacheKey: "photo-gallery", // Unique cache key for photo gallery
        debug: false, // Set to true for detailed debug logging when needed
    });

    // Enhanced debug logging to track preloader state
    useEffect(() => {
        console.log("🔍 Gallery Preloader Debug Info:", {
            environment: process.env.NODE_ENV,
            hostname:
                typeof window !== "undefined"
                    ? window.location.hostname
                    : "unknown",
            totalImages: allOriginalImages.length,
            loadedCount,
            failedCount,
            isComplete,
            preloadProgress: Math.round(preloadProgress),
            isPreloading,
            failedImagesCount: failedImages.length,
            sampleUrls: allOriginalImages.slice(0, 3),
            userAgent:
                typeof navigator !== "undefined"
                    ? navigator.userAgent
                    : "unknown",
        });

        if (failedImages.length > 0) {
            console.log("❌ Failed images details:", failedImages);

            // Log the first few failed URLs for quick debugging
            console.log(
                "🔗 First 3 failed URLs:",
                failedImages.slice(0, 3).map((f) => f.url)
            );
        }
    }, [
        loadedCount,
        failedCount,
        isComplete,
        preloadProgress,
        isPreloading,
        failedImages,
        allOriginalImages.length, // Added to dependency array
    ]);

    // Scroll lock effect for modal
    useEffect(() => {
        if (selectedImage) {
            // Prevent body scroll when modal is open
            const originalStyle = window.getComputedStyle(
                document.body
            ).overflow;
            document.body.style.overflow = "hidden";

            // Also prevent scroll on the root element for iOS
            document.documentElement.style.overflow = "hidden";

            // Add a class to the body for additional styling if needed
            document.body.classList.add("modal-open");

            return () => {
                // Restore original overflow style when modal closes
                document.body.style.overflow = originalStyle;
                document.documentElement.style.overflow = "";
                document.body.classList.remove("modal-open");
            };
        }
    }, [selectedImage]);

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
        // If image is already preloaded, it should load instantly
        setSelectedImageLoading(!preloadedImages.has(src));
    };

    const handleSelectedImageLoad = () => {
        setSelectedImageLoading(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!imageRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMagnifierPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setShowMagnifier(true);
    };

    const handleMouseLeave = () => {
        setShowMagnifier(false);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
        if (!imageRef.current || e.touches.length === 0) return;

        e.preventDefault();
        const rect = imageRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        setMagnifierPosition({ x, y });
    };

    const handleTouchStart = () => {
        setShowMagnifier(true);
    };

    const handleTouchEnd = () => {
        setShowMagnifier(false);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setSelectedImageLoading(false);
        setShowMagnifier(false);
    };

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && selectedImage) {
                handleCloseModal();
            }
        };

        if (selectedImage) {
            document.addEventListener("keydown", handleEscapeKey);
            return () => {
                document.removeEventListener("keydown", handleEscapeKey);
            };
        }
    }, [selectedImage]);

    const getPriority = (index: number) => {
        return index < 6;
    };

    // Toggle debug info visibility (commented out for production)
    // const toggleDebugInfo = () => {
    //     setShowDebugInfo(!showDebugInfo);
    // };

    return (
        <div className={`max-w-6xl mx-auto ${className}`}>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
                {filterOptions.map((filter) => (
                    <button
                        key={filter.key}
                        onClick={() => setActiveFilter(filter.key)}
                        className={`px-4 py-2 m-1 text-sm border rounded transition-colors ${
                            activeFilter === filter.key
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Enhanced Photo Count and Preload Status */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2">
                    <p className="text-gray-600 text-sm">
                        Showing {filteredPhotos.length} photos
                        {activeFilter !== "all" &&
                            ` in ${
                                filterOptions.find(
                                    (f) => f.key === activeFilter
                                )?.label
                            } category`}
                    </p>

                    {/* Enhanced preload status indicators */}
                    <div className="flex items-center space-x-2">
                        {!isComplete && (
                            <div className="flex items-center space-x-1">
                                <span className="text-xs text-gray-500">
                                    {Math.round(preloadProgress)}%
                                </span>
                                <div
                                    className="w-2 h-2 bg-yellow-500 rounded-full"
                                    title={`Loading... ${loadedCount}/${
                                        allOriginalImages.length
                                    } images (${Math.round(preloadProgress)}%)`}
                                />
                            </div>
                        )}

                        {isComplete &&
                            loadedCount === allOriginalImages.length && (
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full"
                                    title={`All ${loadedCount} original images preloaded`}
                                />
                            )}

                        {isComplete &&
                            loadedCount < allOriginalImages.length && (
                                <div
                                    className="w-2 h-2 bg-yellow-500 rounded-full"
                                    title={`${loadedCount}/${allOriginalImages.length} images loaded (${failedCount} failed)`}
                                />
                            )}

                        {/* Debug toggle button - commented out for production, uncomment for debugging */}
                        {/* 
                        <button
                            onClick={toggleDebugInfo}
                            className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 border rounded"
                            title="Toggle debug information"
                        >
                            {showDebugInfo ? 'Hide Debug' : 'Show Debug'}
                        </button>
                        */}
                    </div>
                </div>
            </div>

            {/* Debug Information Panel - commented out for production, uncomment for debugging */}
            {/* 
            {showDebugInfo && (
                <div className="mb-8 p-4 bg-gray-100 rounded-lg text-sm">
                    <h3 className="font-bold mb-2">Preloader Debug Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>Total Images:</strong> {debugStatus.totalImages}</p>
                            <p><strong>Loaded:</strong> {loadedCount}</p>
                            <p><strong>Failed:</strong> {failedCount}</p>
                            <p><strong>Progress:</strong> {Math.round(preloadProgress)}%</p>
                            <p><strong>Complete:</strong> {isComplete ? 'Yes' : 'No'}</p>
                            <p><strong>Processing Time:</strong> {debugStatus.processingTime}ms</p>
                        </div>
                        <div>
                            <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
                            {typeof window !== 'undefined' && (
                                <>
                                    <p><strong>Hostname:</strong> {window.location.hostname}</p>
                                    <p><strong>Base URL:</strong> {window.location.origin}</p>
                                </>
                            )}
                            <p><strong>Sample URLs:</strong></p>
                            <ul className="text-xs ml-4">
                                {allOriginalImages.slice(0, 3).map((url, i) => (
                                    <li key={i} className="break-all">{url}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {failedImages.length > 0 && (
                        <div className="mt-4">
                            <p className="text-red-600 font-semibold">Failed Images ({failedImages.length}):</p>
                            <div className="max-h-32 overflow-y-auto">
                                {failedImages.map((failed, i) => (
                                    <div key={i} className="text-xs text-red-500 break-all">
                                        <strong>{failed.url.split('/').pop()}:</strong> {failed.error}
                                    </div>
                                ))}
                            </div>
                            
                            <button
                                onClick={() => {
                                    console.log('Testing first failed image...');
                                    if (failedImages.length > 0) {
                                        const testUrl = failedImages[0].url;
                                        console.log(`Attempting to load: ${testUrl}`);
                                        fetch(testUrl)
                                            .then(response => {
                                                console.log(`Fetch response for ${testUrl}:`, response.status, response.statusText);
                                            })
                                            .catch(error => {
                                                console.log(`Fetch error for ${testUrl}:`, error);
                                            });
                                    }
                                }}
                                className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                            >
                                Test First Failed Image
                            </button>
                        </div>
                    )}
                </div>
            )}
            */}

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo, index) => (
                    <div
                        key={`${photo.src}-${activeFilter}-${index}`}
                        className="portfolio-item group relative hover:cursor-pointer aspect-square bg-gray-200 rounded-lg overflow-hidden"
                        onClick={() => handleImageClick(photo.src)}
                    >
                        {/* Optimized image for grid */}
                        <OptimizedLazyImage
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            priority={getPriority(index)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        <div className="portfolio-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <i className="fa fa-plus text-white text-4xl"></i>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredPhotos.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No photos found for this category.
                    </p>
                </div>
            )}

            {/* Lightbox Modal - With Magnifier Feature */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
                    onClick={handleCloseModal}
                    style={{
                        overflow: "hidden",
                    }}
                >
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                        aria-label="Close image"
                    >
                        ✕
                    </button>

                    {/* Instructions */}
                    <div className="absolute top-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded z-10">
                        <p className="hidden md:block">
                            Hover to magnify • Click to close
                        </p>
                        <p className="md:hidden">
                            Touch and hold to magnify • Tap outside to close
                        </p>
                    </div>

                    {/* Loading spinner */}
                    {selectedImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <Spinner size="large" color="white" />
                        </div>
                    )}

                    {/* Image with magnifier */}
                    <div className="relative">
                        <Image
                            ref={imageRef}
                            src={selectedImage}
                            alt="Enlarged photo"
                            width={1200}
                            height={800}
                            className={`max-w-[90vw] max-h-[90vh] object-contain transition-opacity duration-300 cursor-crosshair ${
                                selectedImageLoading
                                    ? "opacity-0"
                                    : "opacity-100"
                            }`}
                            onLoad={handleSelectedImageLoad}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            priority
                            quality={95}
                            style={{
                                width: "auto",
                                height: "auto",
                                userSelect: "none",
                            }}
                            onMouseDown={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Magnifier */}
                        {showMagnifier && imageRef.current && (
                            <div
                                className="absolute pointer-events-none border-2 border-white rounded-full shadow-lg overflow-hidden z-20"
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    // Position magnifier above the cursor/finger (offset by magnifier height + some padding)
                                    left: magnifierPosition.x - 75,
                                    top: magnifierPosition.y - 150 - 20, // Move up by magnifier height + 20px padding
                                    background: `url(${selectedImage}) no-repeat`,
                                    backgroundSize: `${
                                        imageRef.current.naturalWidth * 2
                                    }px ${
                                        imageRef.current.naturalHeight * 2
                                    }px`,
                                    backgroundPosition: `-${
                                        (magnifierPosition.x /
                                            imageRef.current.width) *
                                            imageRef.current.naturalWidth *
                                            2 -
                                        75
                                    }px -${
                                        (magnifierPosition.y /
                                            imageRef.current.height) *
                                            imageRef.current.naturalHeight *
                                            2 -
                                        75
                                    }px`,
                                    boxShadow:
                                        "0 0 20px rgba(255, 255, 255, 0.3)",
                                }}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
