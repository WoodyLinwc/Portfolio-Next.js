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

    useEffect(() => {
        if (!containerRef.current) return;

        mountedRef.current = true;

        const loadDisqus = () => {
            if (!mountedRef.current) return;

            try {
                // Nuclear option: completely destroy Disqus
                if (window.DISQUS) {
                    (window as unknown as Record<string, unknown>).DISQUS =
                        undefined;
                    (
                        window as unknown as Record<string, unknown>
                    ).disqus_config = undefined;
                }

                // Remove all Disqus related scripts and iframes
                const disqusElements = document.querySelectorAll(
                    '[id*="disqus"], [src*="disqus"], [class*="disqus"]'
                );
                disqusElements.forEach((el) => {
                    if (el.id !== "disqus_thread") {
                        // Keep our container
                        el.remove();
                    }
                });

                // Clear the thread container
                const disqusThread = document.getElementById("disqus_thread");
                if (disqusThread) {
                    disqusThread.innerHTML = "";
                }

                // Set up fresh configuration
                window.disqus_config = function (this: DisqusConfigFunction) {
                    this.page = {
                        url: url,
                        identifier: identifier,
                        title: title,
                    };
                };

                // Load completely fresh Disqus
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

                // Clean up old scripts first
                const oldScripts = document.querySelectorAll(
                    'script[src*="disqus.com"]'
                );
                oldScripts.forEach((script) => script.remove());

                // Add new script
                document.head.appendChild(script);
            } catch (error) {
                console.error("Error in nuclear Disqus load:", error);
            }
        };

        // Delay to ensure clean slate
        const timeoutId = setTimeout(loadDisqus, 500);

        return () => {
            clearTimeout(timeoutId);
            mountedRef.current = false;
        };
    }, [url, identifier, title, shortname]);

    useEffect(() => {
        return () => {
            mountedRef.current = false;
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
