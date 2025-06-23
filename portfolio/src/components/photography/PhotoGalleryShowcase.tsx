"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import { photos, filterOptions } from "@/data/photography/photos";

interface PhotoGalleryShowcaseProps {
    className?: string;
}

// Simplified LazyImage that falls back to regular Image on error
function OptimizedLazyImage({
    src,
    alt,
    fill,
    className,
    priority,
    sizes,
    onClick,
}: any) {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    // If optimized version fails, fall back to original image
    if (imageError) {
        return (
            <Image
                src={src}
                alt={alt}
                fill={fill}
                className={className}
                priority={priority}
                sizes={sizes}
                onClick={onClick}
                onLoad={() => setImageLoaded(true)}
                quality={85}
            />
        );
    }

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

            {/* Direct image without optimization for debugging */}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                className={`${className} ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                sizes={sizes}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                quality={85}
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

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo, index) => (
                    <div
                        key={`${photo.src}-${activeFilter}-${index}`}
                        className="portfolio-item group relative hover:cursor-pointer aspect-square bg-gray-200 rounded-lg overflow-hidden"
                        onClick={() => handleImageClick(photo.src)}
                    >
                        {/* Simplified image rendering */}
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

                        <Image
                            src={selectedImage}
                            alt="Enlarged photo"
                            width={1200}
                            height={800}
                            className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${
                                selectedImageLoading
                                    ? "opacity-0"
                                    : "opacity-100"
                            }`}
                            onLoad={handleSelectedImageLoad}
                            priority
                            quality={95}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
