"use client";

import { useState, useMemo, useEffect } from "react";
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

    const filteredPhotos = useMemo(() => {
        return activeFilter === "all"
            ? photos
            : photos.filter((photo) => photo.category === activeFilter);
    }, [activeFilter]);

    // Get all original image paths for preloading
    const allOriginalImages = useMemo(() => {
        return photos.map((photo) => photo.src);
    }, []);

    // Use the background preloader hook with custom options
    const { preloadedImages, isComplete, loadedCount } = useBackgroundPreloader(
        allOriginalImages,
        {
            startDelay: 1000, // Start preloading after 1 second
            imageDelay: 50, // 50ms delay between each image
            concurrency: 2, // Load 2 images concurrently
            cacheKey: "photo-gallery", // Unique cache key for photo gallery
        }
    );

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

            // Temporarily re-enable zoom when modal is open by updating viewport
            const viewportMeta = document.querySelector(
                'meta[name="viewport"]'
            ) as HTMLMetaElement;
            let originalViewportContent = "";

            if (viewportMeta) {
                originalViewportContent = viewportMeta.content;
                // Allow zoom up to 10x in the modal for better image viewing
                viewportMeta.content =
                    "width=device-width, initial-scale=1.0, maximum-scale=10.0, user-scalable=yes";
            }

            // Remove the no-zoom CSS styles temporarily
            const noZoomStyle = document.getElementById("photography-no-zoom");
            let hadNoZoomStyle = false;
            if (noZoomStyle) {
                hadNoZoomStyle = true;
                noZoomStyle.style.display = "none";
            }

            return () => {
                // Restore original overflow style when modal closes
                document.body.style.overflow = originalStyle;
                document.documentElement.style.overflow = "";
                document.body.classList.remove("modal-open");

                // Restore original viewport settings
                if (viewportMeta && originalViewportContent) {
                    viewportMeta.content = originalViewportContent;
                }

                // Restore the no-zoom CSS styles
                if (hadNoZoomStyle && noZoomStyle) {
                    noZoomStyle.style.display = "";
                }
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

    const handleCloseModal = () => {
        setSelectedImage(null);
        setSelectedImageLoading(false);
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

            {/* Photo Count */}
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
                    {/* Green dot indicator when all images are preloaded */}
                    {isComplete && loadedCount === allOriginalImages.length && (
                        <div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            title={`All ${loadedCount} original images preloaded`}
                        />
                    )}
                </div>
            </div>

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

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-[9999]"
                    onClick={handleCloseModal}
                    style={{
                        // Prevent scroll but allow zoom on the overlay
                        touchAction: "none",
                        WebkitOverflowScrolling: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px",
                        minHeight: "100vh",
                        minHeight: "100dvh", // Use dynamic viewport height for better mobile support
                    }}
                >
                    <div
                        className="relative w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            // Allow all touch interactions on the image container
                            touchAction: "auto",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            maxHeight: "calc(100vh - 32px)",
                            maxHeight: "calc(100dvh - 32px)", // Account for padding
                        }}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                            aria-label="Close image"
                            style={{ touchAction: "auto" }}
                        >
                            ✕
                        </button>

                        {/* Loading spinner - should rarely show if image is preloaded */}
                        {selectedImageLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Spinner size="large" color="white" />
                            </div>
                        )}

                        {/* Original image for lightbox - This is the zoomable image */}
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                maxHeight: "calc(100vh - 64px)", // Account for button and padding
                                maxHeight: "calc(100dvh - 64px)",
                                overflow: "auto",
                                WebkitOverflowScrolling: "touch",
                                touchAction: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                src={selectedImage}
                                alt="Enlarged photo"
                                width={1200}
                                height={800}
                                className={`transition-opacity duration-300 ${
                                    selectedImageLoading
                                        ? "opacity-0"
                                        : "opacity-100"
                                }`}
                                onLoad={handleSelectedImageLoad}
                                priority
                                quality={95}
                                style={{
                                    // Allow all touch interactions on the image itself
                                    touchAction: "auto",
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    width: "auto",
                                    height: "auto",
                                    objectFit: "contain",
                                    cursor: "zoom-in",
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
