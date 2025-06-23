// src/components/photography/PhotoGalleryShowcase.tsx - Your Original Design + Optimization
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import LazyImage from "@/components/LazyImage";
import Spinner from "@/components/Spinner";
import { photos, filterOptions } from "@/data/photography/photos";

interface PhotoGalleryShowcaseProps {
    className?: string;
}

// Optimized LazyImage component that uses thumbnails for grid
function OptimizedLazyImage({
    src,
    alt,
    fill,
    className,
    priority,
    sizes,
    onClick,
}: any) {
    const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Generate optimized thumbnail paths
    const getOptimizedPaths = (originalPath: string) => {
        const pathParts = originalPath.split("/");
        const fileName = pathParts[pathParts.length - 1];
        const nameWithoutExt = fileName.split(".")[0];
        const directory = pathParts.slice(0, -1).join("/");

        // Remove /images/album/ and replace with thumbnails path
        const relativePath = directory.replace("/images/album/", "");

        return {
            webp: `/images/thumbnails/${relativePath}/${nameWithoutExt}.webp`,
            jpeg: `/images/thumbnails/${relativePath}/${nameWithoutExt}.jpg`,
        };
    };

    const paths = getOptimizedPaths(src);

    const handleThumbnailLoad = () => {
        setThumbnailLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
    };

    // Fallback to original LazyImage if optimized versions don't exist
    if (hasError) {
        return (
            <LazyImage
                src={src}
                alt={alt}
                fill={fill}
                className={className}
                priority={priority}
                sizes={sizes}
                onClick={onClick}
            />
        );
    }

    return (
        <picture className="contents">
            {/* WebP sources for modern browsers */}
            <source srcSet={paths.webp} type="image/webp" />

            {/* JPEG fallback */}
            <Image
                src={paths.jpeg}
                alt={alt}
                fill={fill}
                className={`${className} ${
                    thumbnailLoaded ? "opacity-100" : "opacity-0"
                }`}
                sizes={sizes}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                onLoad={handleThumbnailLoad}
                onError={handleError}
                onClick={onClick}
                quality={85}
            />

            {/* Loading placeholder */}
            {!thumbnailLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">
                        <i className="fa fa-image text-2xl"></i>
                    </div>
                </div>
            )}
        </picture>
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

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
        setSelectedImageLoading(true);
    };

    const handleSelectedImageLoad = () => {
        setSelectedImageLoading(false);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setSelectedImageLoading(false);
    };

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
                <p className="text-gray-600 text-sm">
                    Showing {filteredPhotos.length} photos
                    {activeFilter !== "all" &&
                        ` in ${
                            filterOptions.find((f) => f.key === activeFilter)
                                ?.label
                        } category`}
                </p>
            </div>

            {/* Photo Grid with Optimized Loading */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo, index) => (
                    <div
                        key={`${photo.src}-${activeFilter}`}
                        className="portfolio-item group relative hover:cursor-pointer"
                        onClick={() => handleImageClick(photo.src)}
                    >
                        {/* Use optimized thumbnails for grid display */}
                        <OptimizedLazyImage
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="aspect-square rounded-lg group-hover:scale-110 transition-transform duration-300"
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

            {/* Lightbox Modal - Uses Original Images */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative max-w-4xl max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                        >
                            ✕
                        </button>

                        {selectedImageLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Spinner size="large" color="white" />
                            </div>
                        )}

                        {/* Original image for lightbox */}
                        <Image
                            src={selectedImage} // Direct path to original image
                            alt="Enlarged photo"
                            width={1200} // Larger for original viewing
                            height={800}
                            className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${
                                selectedImageLoading
                                    ? "opacity-0"
                                    : "opacity-100"
                            }`}
                            onLoad={handleSelectedImageLoad}
                            priority
                            quality={95} // High quality for original viewing
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
