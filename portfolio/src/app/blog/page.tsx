"use client";

import { useEffect } from "react";
import DisqusComments from "@/components/DisqusComments";

export default function BlogPage() {
    useEffect(() => {
        // Weather widget script
        const script = document.createElement("script");
        script.src = "https://weatherwidget.io/js/widget.min.js";
        script.id = "weatherwidget-io-js";
        document.body.appendChild(script);

        return () => {
            // Cleanup
            const existingScript = document.getElementById(
                "weatherwidget-io-js"
            );
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center mb-20"></div>

            {/* Weather Widget */}
            <div className="container mx-auto px-4 mb-12">
                <div className="flex justify-center">
                    <a
                        className="weatherwidget-io"
                        href="https://forecast7.com/en/42d36n71d06/boston/"
                        data-label_1="BOSTON"
                        data-label_2="WEATHER"
                        data-theme="default"
                    >
                        BOSTON WEATHER
                    </a>
                </div>
            </div>

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
