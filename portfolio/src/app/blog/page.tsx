"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import DisqusComments from "@/components/DisqusComments";
import { LoadingOverlay } from "@/components/Spinner";
import SectionTitle from "@/components/SectionTitle";

const Live2DWidget = dynamic(() => import("@/components/Live2DWidget"), {
    ssr: false,
    loading: () => (
        <div className="fixed bottom-4 left-4 bg-blue-500 text-white px-3 py-2 rounded text-sm z-40">
            Loading Live2D...
        </div>
    ),
});

export default function BlogPage() {
    const [blogLoaded, setBlogLoaded] = useState(false);
    const [shouldLoadLive2D, setShouldLoadLive2D] = useState(false);

    useEffect(() => {
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
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* Blog Section */}
            <SectionTitle
                backgroundText="Article"
                foregroundText="Personal Blog"
            />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <div className="max-w-6xl mx-auto relative">
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
                </div>
            </section>

            {/* Dynamically loaded Live2D Widget */}
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
