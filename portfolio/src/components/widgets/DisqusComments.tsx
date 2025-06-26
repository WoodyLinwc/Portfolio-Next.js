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
    const containerRef = useRef<HTMLDivElement>(null);
    const mountedRef = useRef(false);
    const currentPageRef = useRef<string>("");

    useEffect(() => {
        if (!containerRef.current) return;

        mountedRef.current = true;
        const pageKey = `${identifier}-${url}`;

        // Skip if we're already showing this page's comments
        if (currentPageRef.current === pageKey && window.DISQUS) {
            return;
        }

        currentPageRef.current = pageKey;

        const loadDisqus = () => {
            if (!mountedRef.current) return;

            try {
                console.log(`Loading Disqus for ${identifier}`);

                // Remove all Disqus related elements except our container
                const disqusElements = document.querySelectorAll(
                    '[id*="disqus"]:not(#disqus_thread), [src*="disqus"], [class*="disqus"]'
                );
                disqusElements.forEach((el) => el.remove());

                // Clear the thread container completely
                const disqusThread = document.getElementById("disqus_thread");
                if (disqusThread) {
                    disqusThread.innerHTML = "";
                    // Force DOM to acknowledge the clearing
                    disqusThread.style.display = "none";
                    setTimeout(() => {
                        if (disqusThread) {
                            disqusThread.style.display = "block";
                        }
                    }, 10);
                }

                // Set up fresh configuration
                window.disqus_config = function (this: DisqusConfigFunction) {
                    this.page = {
                        url: url,
                        identifier: identifier,
                        title: title,
                    };
                };

                if (window.DISQUS) {
                    // Force a complete reset
                    setTimeout(() => {
                        if (mountedRef.current && window.DISQUS) {
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
                        }
                    }, 100);
                } else {
                    // Remove old scripts
                    const oldScripts = document.querySelectorAll(
                        'script[src*="disqus.com"]'
                    );
                    oldScripts.forEach((script) => script.remove());

                    // Load fresh Disqus script with cache-busting
                    const script = document.createElement("script");
                    script.src = `https://${shortname}.disqus.com/embed.js?t=${Date.now()}`;
                    script.async = true;
                    script.onload = () => {
                        console.log(`Fresh Disqus loaded for ${identifier}`);
                    };
                    script.onerror = (error) => {
                        console.error(
                            `Failed to load Disqus for ${identifier}:`,
                            error
                        );
                    };

                    document.head.appendChild(script);
                }
            } catch (error) {
                console.error("Error loading Disqus:", error);
            }
        };

        // Delay to ensure clean slate
        const timeoutId = setTimeout(loadDisqus, 300);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [url, identifier, title, shortname]);

    useEffect(() => {
        return () => {
            mountedRef.current = false;
            currentPageRef.current = "";
        };
    }, []);

    return (
        <div className="mx-4 md:mx-16 lg:mx-32 my-12" ref={containerRef}>
            <div id="disqus_thread"></div>
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
