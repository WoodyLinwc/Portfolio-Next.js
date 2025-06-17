"use client";

import { useState } from "react";
import Image from "next/image";
import { cameras, type Camera } from "@/data/photography/cameras";
import { lenses, type Lens } from "@/data/photography/lenses";

type CameraGear = (Camera | Lens) & { type: "camera" | "lens" };

interface CameraGearShowcaseProps {
    className?: string;
}

export default function CameraGearShowcase({
    className = "",
}: CameraGearShowcaseProps) {
    const [activeFilter, setActiveFilter] = useState<"all" | "camera" | "lens">(
        "all"
    );
    const [selectedGear, setSelectedGear] = useState<CameraGear | null>(null);

    // Combine cameras and lenses with type information
    const cameraGear: CameraGear[] = [
        ...cameras.map((camera) => ({ ...camera, type: "camera" as const })),
        ...lenses.map((lens) => ({ ...lens, type: "lens" as const })),
    ];

    const filteredGear =
        activeFilter === "all"
            ? cameraGear
            : cameraGear.filter((gear) => gear.type === activeFilter);

    const gearCount = filteredGear.length;

    return (
        <div className={`max-w-6xl mx-auto ${className}`}>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
                {[
                    { key: "all" as const, label: "All Gear" },
                    { key: "camera" as const, label: "Cameras" },
                    { key: "lens" as const, label: "Lenses" },
                ].map((filter) => (
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

            {/* Gear Count */}
            <div className="text-center mb-8">
                <p className="text-gray-600 text-sm">
                    Showing {gearCount} gear items
                    {activeFilter !== "all" &&
                        ` in ${
                            activeFilter === "camera" ? "Cameras" : "Lenses"
                        } category`}
                </p>
            </div>

            {/* Gear Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGear.map((gear) => (
                    <div
                        key={gear.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedGear(gear)}
                    >
                        {/* Gear Image */}
                        <div className="relative h-48 bg-gray-100">
                            <Image
                                src={gear.image}
                                alt={gear.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onError={(e) => {
                                    // Fallback to placeholder if image fails to load
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                    const fallback =
                                        target.nextElementSibling as HTMLElement;
                                    if (fallback) {
                                        fallback.classList.remove("hidden");
                                    }
                                }}
                            />
                            {/* Fallback placeholder (hidden by default) */}
                            <div className="absolute inset-0 hidden items-center justify-center">
                                <i className="fa fa-camera text-4xl text-gray-400"></i>
                                <span className="ml-2 text-gray-500 text-sm">
                                    Image Coming Soon
                                </span>
                            </div>
                        </div>

                        {/* Gear Info */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        gear.type === "camera"
                                            ? "bg-blue-100 text-blue-800"
                                            : "bg-green-100 text-green-800"
                                    }`}
                                >
                                    {gear.type === "camera" ? "Camera" : "Lens"}
                                </span>
                                {gear.favorite && (
                                    <i className="fa fa-heart text-red-500"></i>
                                )}
                            </div>

                            <h4 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">
                                {gear.name}
                            </h4>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {gear.description}
                            </p>

                            <div className="text-xs text-gray-500">
                                {gear.purchaseYear &&
                                    `Acquired ${gear.purchaseYear}`}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show message when no gear found */}
            {filteredGear.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No gear found for this category.
                    </p>
                </div>
            )}

            {/* Detailed Modal */}
            {selectedGear && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedGear(null)}
                >
                    <div
                        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 border-b">
                            <h3 className="text-xl font-bold text-gray-800">
                                {selectedGear.name}
                            </h3>
                            <button
                                onClick={() => setSelectedGear(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <i className="fa fa-times text-xl"></i>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            {/* Gear Image */}
                            <div className="relative h-64 bg-gray-100 rounded-lg mb-6">
                                <Image
                                    src={selectedGear.image}
                                    alt={selectedGear.name}
                                    fill
                                    className="object-cover rounded-lg"
                                    onError={(e) => {
                                        // Fallback to placeholder if image fails to load
                                        const target =
                                            e.target as HTMLImageElement;
                                        target.style.display = "none";
                                        const fallback =
                                            target.nextElementSibling as HTMLElement;
                                        if (fallback) {
                                            fallback.classList.remove("hidden");
                                        }
                                    }}
                                />
                                {/* Fallback placeholder (hidden by default) */}
                                <div className="absolute inset-0 hidden items-center justify-center">
                                    <i className="fa fa-camera text-6xl text-gray-400"></i>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6">
                                {selectedGear.description}
                            </p>

                            {/* Specifications */}
                            <h4 className="font-semibold text-lg mb-3 text-gray-800">
                                Key Specifications
                            </h4>
                            <ul className="space-y-2 mb-6">
                                {selectedGear.specs.map((spec, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <i className="fa fa-check text-primary mr-2 mt-1 text-sm"></i>
                                        <span className="text-gray-600 text-sm">
                                            {spec}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Additional Info */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-medium text-gray-800">
                                            Brand:
                                        </span>
                                        <span className="text-gray-600 ml-2">
                                            {selectedGear.brand}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-800">
                                            Model:
                                        </span>
                                        <span className="text-gray-600 ml-2">
                                            {selectedGear.model}
                                        </span>
                                    </div>
                                    {selectedGear.purchaseYear && (
                                        <div>
                                            <span className="font-medium text-gray-800">
                                                Acquired:
                                            </span>
                                            <span className="text-gray-600 ml-2">
                                                {selectedGear.purchaseYear}
                                            </span>
                                        </div>
                                    )}
                                    <div>
                                        <span className="font-medium text-gray-800">
                                            Type:
                                        </span>
                                        <span className="text-gray-600 ml-2 capitalize">
                                            {selectedGear.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
