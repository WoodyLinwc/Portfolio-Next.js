"use client";

import { useEffect } from "react";
import DisqusComments from "@/components/DisqusComments";

// Extend Window interface for Live2D and Twitter widgets
declare global {
    interface Window {
        L2Dwidget: any;
        twttr: {
            widgets: {
                load: () => void;
            };
        };
    }
}

export default function BlogPage() {
    useEffect(() => {
        // Live2D widget script - ONLY FOR BLOG PAGE
        const loadLive2D = () => {
            // Check if Live2D is already loaded
            if (document.getElementById("live2d-widget-script")) {
                return; // Already loaded
            }

            const live2dScript = document.createElement("script");
            live2dScript.src =
                "https://cdn.jsdelivr.net/gh/WoodyLinwc/live2d-widget@latest/autoload.js";
            live2dScript.id = "live2d-widget-script";
            live2dScript.async = true;
            live2dScript.onload = () => {
                console.log("Live2D widget loaded successfully on blog page");
            };
            live2dScript.onerror = () => {
                console.error("Failed to load Live2D widget");
            };
            document.body.appendChild(live2dScript);
        };

        // Load Live2D widget
        loadLive2D();

        return () => {
            // Cleanup: Remove Live2D when leaving blog page
            const live2dWidget = document.getElementById("L2Dwidget");
            if (live2dWidget) {
                live2dWidget.remove();
            }

            // Remove the canvas element if it exists
            const live2dCanvas = document.querySelector('canvas[id*="live2d"]');
            if (live2dCanvas) {
                live2dCanvas.remove();
            }

            // Remove any Live2D related elements
            const live2dContainer = document.querySelector("#live2d-widget");
            if (live2dContainer) {
                live2dContainer.remove();
            }

            // Clear any Live2D global variables
            if (window.L2Dwidget) {
                try {
                    window.L2Dwidget = undefined;
                } catch (e) {
                    console.log("Live2D cleanup completed");
                }
            }
        };
    }, []);

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center mb-20"></div>

            {/* Blog Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="relative flex items-center justify-center mb-16">
                        <h1 className="text-7xl lg:text-8xl font-bold text-gray-100 uppercase tracking-wider">
                            Article
                        </h1>
                        <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                            Personal Blog
                        </h1>
                    </div>

                    {/* Blog Iframe */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <iframe
                            src="https://WoodyLinwc.blogspot.com/"
                            className="w-full h-96 lg:h-[600px] border-0 rounded-lg shadow-lg"
                            title="Woody's Blog"
                        />
                    </div>

                    {/* Flashcards Section */}
                    <div className="relative flex items-center justify-center mb-16">
                        <h1 className="text-7xl lg:text-8xl font-bold text-gray-100 uppercase tracking-wider">
                            Flashcards
                        </h1>
                        <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                            Temporary Notes
                        </h1>
                    </div>

                    <div className="max-w-6xl mx-auto mb-20">
                        <iframe
                            src="https://woodylinwc.github.io/Flashcards/"
                            className="w-full h-96 lg:h-[600px] border-0 rounded-lg shadow-lg"
                            title="Flashcards"
                        />
                    </div>
                </div>
            </section>

            {/* Comments Section */}
            <DisqusComments
                url="blog-section"
                identifier="blog-section"
                title="Personal Blog"
            />
        </>
    );
}
