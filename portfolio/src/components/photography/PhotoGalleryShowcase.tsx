// src/components/photography/PhotoGalleryShowcase.tsx
"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import OptimizedLazyImage from "@/components/OptimizedLazyImage";
import { photos, filterOptions } from "@/data/photography/photos";

interface PhotoGalleryShowcaseProps {
    className?: string;
}

export default function PhotoGalleryShowcase({
    className = "",
}: PhotoGalleryShowcaseProps) {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedImageLoading, setSelectedImageLoading] = useState(false);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);

    const filteredPhotos = useMemo(() => {
        return activeFilter === "all"
            ? photos
            : photos.filter((photo) => photo.category === activeFilter);
    }, [activeFilter]);

    const allOriginalImages = useMemo(() => {
        return photos.map((photo) => photo.src);
    }, []);

    // Scroll lock for modal
    useEffect(() => {
        if (selectedImage) {
            const originalStyle = window.getComputedStyle(
                document.body
            ).overflow;
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.body.classList.add("modal-open");

            return () => {
                document.body.style.overflow = originalStyle;
                document.documentElement.style.overflow = "";
                document.body.classList.remove("modal-open");
            };
        }
    }, [selectedImage]);

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
        setSelectedImageLoading(true); // Always show loading for full-size image
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

    const handleMouseEnter = () => setShowMagnifier(true);
    const handleMouseLeave = () => setShowMagnifier(false);

    const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
        if (!imageRef.current || e.touches.length === 0) return;
        e.preventDefault();
        const rect = imageRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        setMagnifierPosition({ x, y });
    };

    const handleTouchStart = () => setShowMagnifier(true);
    const handleTouchEnd = () => setShowMagnifier(false);

    const handleCloseModal = () => {
        setSelectedImage(null);
        setSelectedImageLoading(false);
        setShowMagnifier(false);
    };

    // Handle escape key
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && selectedImage) {
                handleCloseModal();
            }
        };

        if (selectedImage) {
            document.addEventListener("keydown", handleEscapeKey);
            return () =>
                document.removeEventListener("keydown", handleEscapeKey);
        }
    }, [selectedImage]);

    const getPriority = (index: number) => index < 6;

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

            {/* Simple Photo Count */}
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
                        <OptimizedLazyImage
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            priority={getPriority(index)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            enableOptimization={true}
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

            {/* Simple Info Section */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Gallery Experience
                    </h3>
                    <p className="text-sm text-gray-600">
                        Click on any photo to view it in full resolution.
                        <br />
                        <span className="text-xs text-gray-500">
                            Images load on-demand - no background preloading
                            active
                        </span>
                    </p>
                </div>

                {/* Statistics */}
                <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex items-center justify-center space-x-4">
                        <span>Total Images: {allOriginalImages.length}</span>
                        <span>•</span>
                        <span>Thumbnails: Fast loading</span>
                        <span>•</span>
                        <span>Full Resolution: On-demand</span>
                    </div>

                    <div className="text-gray-400 mt-2">
                        Full resolution images download when you click to view
                        them.
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
                    onClick={handleCloseModal}
                    style={{ overflow: "hidden" }}
                >
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                        aria-label="Close image"
                    >
                        ✕
                    </button>

                    <div className="absolute top-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded z-10">
                        <p className="hidden md:block">
                            Hover to magnify • Click to close
                        </p>
                        <p className="md:hidden">
                            Touch and hold to magnify • Tap outside to close
                        </p>
                    </div>

                    {selectedImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <Spinner size="large" color="white" />
                        </div>
                    )}

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

                        {showMagnifier && imageRef.current && (
                            <div
                                className="absolute pointer-events-none border-2 border-white rounded-full shadow-lg overflow-hidden z-20"
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    left: magnifierPosition.x - 75,
                                    top: magnifierPosition.y - 150 - 20,
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
