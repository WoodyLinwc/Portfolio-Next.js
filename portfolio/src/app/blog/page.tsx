"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import DisqusComments from "@/components/DisqusComments";
import { LoadingOverlay } from "@/components/Spinner";

// Dynamically import Live2D widget with no SSR
const Live2DWidget = dynamic(() => import("@/components/Live2DWidget"), {
    ssr: false,
    loading: () => (
        <div className="fixed bottom-4 left-4 bg-blue-500 text-white px-3 py-2 rounded text-sm z-40">
            Loading Live2D...
        </div>
    ),
});

// Extend Window interface for Twitter widgets
declare global {
    interface Window {
        twttr: {
            widgets: {
                load: () => void;
            };
        };
    }
}

export default function BlogPage() {
    const [blogLoaded, setBlogLoaded] = useState(false);
    const [flashcardsLoaded, setFlashcardsLoaded] = useState(false);
    const [shouldLoadLive2D, setShouldLoadLive2D] = useState(false);

    useEffect(() => {
        // Load Live2D after a short delay to prioritize main content
        const timer = setTimeout(() => {
            setShouldLoadLive2D(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleLive2DLoad = () => {
        console.log("Live2D widget loaded successfully on blog page");
    };

    const handleLive2DError = (error: Error) => {
        console.error("Live2D widget failed to load:", error);
    };

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center mb-20"></div>

            {/* Blog Section */}
            <section className="py-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <div className="relative flex items-center justify-center mb-16">
                        <h1 className="text-7xl lg:text-8xl font-bold text-gray-100 uppercase tracking-wider">
                            Article
                        </h1>
                        <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                            Personal Blog
                        </h1>
                    </div>

                    {/* Blog Iframe */}
                    <div className="max-w-6xl mx-auto mb-20 relative">
                        <LoadingOverlay
                            isVisible={!blogLoaded}
                            message="Loading blog content..."
                        />
                        <iframe
                            src="https://WoodyLinwc.blogspot.com/"
                            className={`w-full h-96 lg:h-[600px] border-0 rounded-lg shadow-lg transition-opacity duration-300 ${
                                blogLoaded ? "opacity-100" : "opacity-0"
                            }`}
                            title="Woody's Blog"
                            onLoad={() => setBlogLoaded(true)}
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

                    <div className="max-w-6xl mx-auto mb-20 relative">
                        <LoadingOverlay
                            isVisible={!flashcardsLoaded}
                            message="Loading flashcards..."
                        />
                        <iframe
                            src="https://woodylinwc.github.io/Flashcards/"
                            className={`w-full h-96 lg:h-[600px] border-0 rounded-lg shadow-lg transition-opacity duration-300 ${
                                flashcardsLoaded ? "opacity-100" : "opacity-0"
                            }`}
                            title="Flashcards"
                            onLoad={() => setFlashcardsLoaded(true)}
                        />
                    </div>
                </div>
            </section>

            {/* Dynamically loaded Live2D Widget - only loads when needed */}
            {shouldLoadLive2D && (
                <Suspense
                    fallback={
                        <div className="fixed bottom-4 left-4 bg-gray-500 text-white px-3 py-2 rounded text-sm z-40">
                            Preparing Live2D...
                        </div>
                    }
                >
                    <Live2DWidget
                        onLoad={handleLive2DLoad}
                        onError={handleLive2DError}
                    />
                </Suspense>
            )}

            {/* Comments Section */}
            <DisqusComments
                url="blog-section"
                identifier="blog-section"
                title="Personal Blog"
            />
        </>
    );
}
