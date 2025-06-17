"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import DisqusComments from "@/components/widgets/DisqusComments";
import LazyImage from "@/components/LazyImage";
import Spinner from "@/components/Spinner";
import SectionTitle from "@/components/SectionTitle";
import CameraGearShowcase from "@/components/CameraGearShowcase";
import { photos, filterOptions } from "@/data/photography/photos";

type TabType = "gallery" | "gear";

export default function PhotographyPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedImageLoading, setSelectedImageLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<TabType>("gallery");

    // Handle URL hash for deep linking
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash === "gear") {
            setActiveTab("gear");
        } else {
            setActiveTab("gallery");
        }
    }, []);

    // Update URL when tab changes
    const handleTabChange = (newTab: TabType) => {
        setActiveTab(newTab);
        const newUrl = newTab === "gear" ? "/photography#gear" : "/photography";
        window.history.replaceState(null, "", newUrl);
    };

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
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* Portfolio Section */}
            <SectionTitle
                backgroundText="Gallery"
                foregroundText="Photography"
            />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Enhanced Tab Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-100 rounded-lg p-1 flex">
                            <button
                                onClick={() => handleTabChange("gallery")}
                                className={`px-6 py-2 rounded-md transition-colors ${
                                    activeTab === "gallery"
                                        ? "bg-white text-primary shadow-sm font-medium"
                                        : "text-gray-600 hover:text-gray-800"
                                }`}
                                aria-label="View photo gallery"
                            >
                                <i className="fa fa-image mr-2"></i>
                                Photo Gallery
                            </button>
                            <button
                                onClick={() => handleTabChange("gear")}
                                className={`px-6 py-2 rounded-md transition-colors ${
                                    activeTab === "gear"
                                        ? "bg-white text-primary shadow-sm font-medium"
                                        : "text-gray-600 hover:text-gray-800"
                                }`}
                                aria-label="View camera gear"
                            >
                                <i className="fa fa-camera mr-2"></i>
                                Camera Gear
                            </button>
                        </div>
                    </div>

                    {/* Gallery Tab Content */}
                    {activeTab === "gallery" && (
                        <div>
                            {/* Filter Buttons */}
                            <div className="flex flex-wrap justify-center mb-8 gap-2">
                                {filterOptions.map((filter) => (
                                    <button
                                        key={filter.key}
                                        onClick={() =>
                                            setActiveFilter(filter.key)
                                        }
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
                                            filterOptions.find(
                                                (f) => f.key === activeFilter
                                            )?.label
                                        } category`}
                                </p>
                            </div>

                            {/* Photo Grid with Lazy Loading */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredPhotos.map((photo, index) => (
                                    <div
                                        key={`${photo.src}-${activeFilter}`}
                                        className="portfolio-item group relative hover:cursor-pointer"
                                        onClick={() =>
                                            handleImageClick(photo.src)
                                        }
                                    >
                                        <LazyImage
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

                            {filteredPhotos.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">
                                        No photos found for this category.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Camera Gear Tab Content */}
                    {activeTab === "gear" && (
                        <div>
                            <CameraGearShowcase />
                        </div>
                    )}
                </div>
            </section>

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
                            width={800}
                            height={600}
                            className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${
                                selectedImageLoading
                                    ? "opacity-0"
                                    : "opacity-100"
                            }`}
                            onLoad={handleSelectedImageLoad}
                            priority
                            quality={90}
                        />
                    </div>
                </div>
            )}

            {/* Comments Section */}
            <DisqusComments
                url="photo-section"
                identifier="photo-section"
                title="Photography Gallery"
            />
        </>
    );
}
