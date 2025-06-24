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

    // Disable zoom on mobile for this page
    useEffect(() => {
        // Check if we're on mobile
        const isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            ) || window.innerWidth <= 768;

        if (isMobile) {
            // Get the existing viewport meta tag or create one
            let viewportMeta = document.querySelector(
                'meta[name="viewport"]'
            ) as HTMLMetaElement;
            let originalContent = "";

            if (viewportMeta) {
                // Store original content
                originalContent = viewportMeta.content;
                // Update to disable zoom
                viewportMeta.content =
                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
            } else {
                // Create new viewport meta tag
                viewportMeta = document.createElement("meta");
                viewportMeta.name = "viewport";
                viewportMeta.content =
                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
                document.head.appendChild(viewportMeta);
            }

            // Also add CSS to prevent zoom via touch gestures
            const style = document.createElement("style");
            style.id = "photography-no-zoom";
            style.textContent = `
                body {
                    touch-action: pan-x pan-y !important;
                    -webkit-user-select: none;
                    -webkit-touch-callout: none;
                }
                * {
                    -webkit-user-select: none;
                    -webkit-touch-callout: none;
                }
                img {
                    -webkit-user-select: none;
                    -webkit-touch-callout: none;
                    pointer-events: auto;
                }
            `;
            document.head.appendChild(style);

            // Cleanup function to restore original settings when leaving the page
            return () => {
                if (originalContent) {
                    // Restore original viewport content
                    viewportMeta.content = originalContent;
                } else {
                    // Remove the meta tag we created
                    if (viewportMeta && viewportMeta.parentNode) {
                        viewportMeta.parentNode.removeChild(viewportMeta);
                    }
                }

                // Remove the CSS styles
                const styleElement = document.getElementById(
                    "photography-no-zoom"
                );
                if (styleElement && styleElement.parentNode) {
                    styleElement.parentNode.removeChild(styleElement);
                }
            };
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
