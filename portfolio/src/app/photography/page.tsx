"use client";

import { useState } from "react";
import Image from "next/image";
import DisqusComments from "@/components/DisqusComments";
import Spinner from "@/components/Spinner";

export default function PhotographyPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loadingImages, setLoadingImages] = useState<{
        [key: string]: boolean;
    }>({});
    const [selectedImageLoading, setSelectedImageLoading] = useState(false);

    const filters = [
        { key: "all", label: "All" },
        { key: "night", label: "Night" },
        { key: "travel", label: "Travel" },
        { key: "street", label: "Street" },
        { key: "animal", label: "Animal" },
        { key: "event", label: "Event" },
    ];

    const photos = [
        {
            src: "/images/album/shadow-min.JPG",
            category: "night",
            alt: "Shadow night photography",
        },
        {
            src: "/images/album/comparision-min.jpg",
            category: "night",
            alt: "Comparison night shot",
        },
        {
            src: "/images/album/taxi-min.JPG",
            category: "travel",
            alt: "Taxi travel photography",
        },
        {
            src: "/images/album/mirror-min.JPG",
            category: "street",
            alt: "Mirror street photography",
        },
        {
            src: "/images/album/bike-min.JPG",
            category: "street",
            alt: "Bike street scene",
        },
        {
            src: "/images/album/three-min.JPG",
            category: "street",
            alt: "Three people street",
        },
        {
            src: "/images/album/train-min.JPG",
            category: "travel",
            alt: "Train travel",
        },
        {
            src: "/images/album/starring-min.JPG",
            category: "travel",
            alt: "Starring travel shot",
        },
        {
            src: "/images/album/handsome-min.JPG",
            category: "event",
            alt: "Event photography",
        },
        {
            src: "/images/album/summervibe-min.JPG",
            category: "street",
            alt: "Summer vibe street",
        },
        {
            src: "/images/album/god-min.JPG",
            category: "event",
            alt: "Event photography",
        },
        {
            src: "/images/album/descending-min.JPG",
            category: "event",
            alt: "Descending event",
        },
        {
            src: "/images/album/hog-min.JPG",
            category: "animal",
            alt: "Animal photography",
        },
        {
            src: "/images/album/dual-min.JPG",
            category: "night",
            alt: "Dual night shot",
        },
        {
            src: "/images/album/fatherlove-min.JPG",
            category: "street",
            alt: "Father love street",
        },
        {
            src: "/images/album/selling-min.JPG",
            category: "event",
            alt: "Selling event",
        },
        {
            src: "/images/album/sparow-min.jpg",
            category: "animal",
            alt: "Sparrow animal",
        },
        {
            src: "/images/album/handsup-min.JPG",
            category: "event",
            alt: "Hands up event",
        },
        {
            src: "/images/album/kiss1-min.JPG",
            category: "night",
            alt: "Kiss night 1",
        },
        {
            src: "/images/album/kiss2-min.JPG",
            category: "night",
            alt: "Kiss night 2",
        },
        {
            src: "/images/album/lightwave-min.JPG",
            category: "event",
            alt: "Light wave event",
        },
        {
            src: "/images/album/maid-min.JPG",
            category: "event",
            alt: "Maid event",
        },
        {
            src: "/images/album/piano-min.JPG",
            category: "event",
            alt: "Piano event",
        },
        {
            src: "/images/album/shine-min.JPG",
            category: "travel",
            alt: "Shine travel",
        },
        {
            src: "/images/album/window-min.JPG",
            category: "travel",
            alt: "Window travel",
        },
        {
            src: "/images/album/walking-min.JPG",
            category: "street",
            alt: "Walking street",
        },
        {
            src: "/images/album/sunset-min.JPG",
            category: "street",
            alt: "Sunset street",
        },
        {
            src: "/images/album/cannon-min.JPG",
            category: "travel",
            alt: "Cannon travel",
        },
        {
            src: "/images/album/crane-min.JPG",
            category: "animal",
            alt: "Crane animal",
        },
        {
            src: "/images/album/capture-min.JPG",
            category: "night",
            alt: "Capture night",
        },
    ];

    const filteredPhotos =
        activeFilter === "all"
            ? photos
            : photos.filter((photo) => photo.category === activeFilter);

    const handleImageLoadStart = (src: string) => {
        setLoadingImages((prev) => ({ ...prev, [src]: true }));
    };

    const handleImageLoad = (src: string) => {
        setLoadingImages((prev) => ({ ...prev, [src]: false }));
    };

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
        setSelectedImageLoading(true);
    };

    const handleSelectedImageLoad = () => {
        setSelectedImageLoading(false);
    };

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center mb-20"></div>

            {/* Portfolio Section */}
            <section className="py-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <div className="relative flex items-center justify-center mb-16">
                        <h1 className="text-7xl lg:text-8xl font-bold text-gray-100 uppercase tracking-wider">
                            Gallery
                        </h1>
                        <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                            Photo Album
                        </h1>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center mb-12 gap-2">
                        {filters.map((filter) => (
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

                    {/* Photo Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPhotos.map((photo, index) => (
                            <div
                                key={index}
                                className="portfolio-item group cursor-pointer relative"
                            >
                                <div
                                    className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                                    onClick={() => handleImageClick(photo.src)}
                                >
                                    {/* Loading spinner overlay */}
                                    {loadingImages[photo.src] && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                                            <Spinner
                                                size="medium"
                                                color="primary"
                                            />
                                        </div>
                                    )}

                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className={`object-cover transition-all duration-300 group-hover:scale-110 ${
                                            loadingImages[photo.src]
                                                ? "opacity-0"
                                                : "opacity-100"
                                        }`}
                                        onLoadStart={() =>
                                            handleImageLoadStart(photo.src)
                                        }
                                        onLoad={() =>
                                            handleImageLoad(photo.src)
                                        }
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Hover overlay */}
                                    {!loadingImages[photo.src] && (
                                        <div className="portfolio-btn">
                                            <i className="fa fa-plus text-white text-4xl"></i>
                                        </div>
                                    )}
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
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={() => {
                        setSelectedImage(null);
                        setSelectedImageLoading(false);
                    }}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={() => {
                                setSelectedImage(null);
                                setSelectedImageLoading(false);
                            }}
                            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            <i className="fa fa-times"></i>
                        </button>

                        {/* Loading spinner for lightbox */}
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
