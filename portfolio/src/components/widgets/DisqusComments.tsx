"use client";

import { useEffect, useRef } from "react";

interface DisqusCommentsProps {
    url: string;
    identifier: string;
    title: string;
    shortname: string;
}

export default function DisqusComments({
    url,
    identifier,
    title,
    shortname,
}: DisqusCommentsProps) {
    const disqusRef = useRef<HTMLDivElement>(null);
    const isLoadingRef = useRef(false);

    useEffect(() => {
        // Prevent multiple simultaneous loads
        if (isLoadingRef.current) return;
        isLoadingRef.current = true;

        const loadDisqus = () => {
            try {
                // Clear the container completely
                const disqusThread = document.getElementById("disqus_thread");
                if (disqusThread) {
                    disqusThread.innerHTML = "";
                }

                // Set the global configuration BEFORE calling reset
                window.disqus_config = function (this: DisqusConfigFunction) {
                    this.page = {
                        url: url,
                        identifier: identifier,
                        title: title,
                    };
                };

                if (window.DISQUS) {
                    console.log(`Resetting Disqus for ${identifier}`);
                    // Use setTimeout to ensure the DOM is ready
                    setTimeout(() => {
                        window.DISQUS.reset({
                            reload: true,
                            config: function (this: DisqusConfigFunction) {
                                this.page = {
                                    url: url,
                                    identifier: identifier,
                                    title: title,
                                };
                            },
                        });
                        isLoadingRef.current = false;
                    }, 100);
                } else {
                    console.log(
                        `Loading Disqus for the first time: ${identifier}`
                    );
                    // Remove any existing Disqus scripts
                    const existingScripts = document.querySelectorAll(
                        'script[src*="disqus.com"]'
                    );
                    existingScripts.forEach((script) => script.remove());

                    // Load fresh Disqus script
                    const script = document.createElement("script");
                    script.src = `https://${shortname}.disqus.com/embed.js`;
                    script.setAttribute("data-timestamp", String(+new Date()));
                    script.async = true;
                    script.onload = () => {
                        console.log(`Disqus script loaded for ${identifier}`);
                        isLoadingRef.current = false;
                    };
                    script.onerror = () => {
                        console.error(
                            `Failed to load Disqus script for ${identifier}`
                        );
                        isLoadingRef.current = false;
                    };
                    document.head.appendChild(script);
                }
            } catch (error) {
                console.error("Error loading Disqus:", error);
                isLoadingRef.current = false;
            }
        };

        // Add a delay to ensure the component is fully mounted
        const timeoutId = setTimeout(loadDisqus, 300);

        return () => {
            clearTimeout(timeoutId);
            isLoadingRef.current = false;
        };
    }, [url, identifier, title, shortname]);

    // Cleanup when component unmounts
    useEffect(() => {
        return () => {
            isLoadingRef.current = false;
        };
    }, []);

    return (
        <div className="mx-4 md:mx-16 lg:mx-32 my-12">
            {/* Always use the standard disqus_thread ID */}
            <div id="disqus_thread" ref={disqusRef}></div>
            <noscript>
                Please enable JavaScript to view the{" "}
                <a href="https://disqus.com/?ref_noscript">
                    comments powered by Disqus.
                </a>
            </noscript>
        </div>
    );
}

// Extend the Window interface to include Disqus types
declare global {
    interface Window {
        DISQUS: {
            reset: (config: { reload: boolean; config: () => void }) => void;
        };
        disqus_config: () => void;
    }
}

// Define the Disqus config function type
interface DisqusConfigFunction {
    (): void;
    page?: {
        url: string;
        identifier: string;
        title: string;
    };
}
