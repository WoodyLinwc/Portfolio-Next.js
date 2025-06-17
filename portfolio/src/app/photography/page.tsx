// src/app/photography/page.tsx
"use client";

import { useState, useEffect } from "react";
import DisqusComments from "@/components/widgets/DisqusComments";
import SectionTitle from "@/components/SectionTitle";
import CameraGearShowcase from "@/components/photography/CameraGearShowcase";
import PhotoGalleryShowcase from "@/components/photography/PhotoGalleryShowcase";

type TabType = "gallery" | "gear";

export default function PhotographyPage() {
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

                    {/* Tab Content */}
                    {activeTab === "gallery" && <PhotoGalleryShowcase />}
                    {activeTab === "gear" && <CameraGearShowcase />}
                </div>
            </section>

            {/* Comments Section */}
            <DisqusComments
                url="photo-section"
                identifier="photo-section"
                title="Photography Gallery"
            />
        </>
    );
}
