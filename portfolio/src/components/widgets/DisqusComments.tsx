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
    const uniqueId = `disqus_thread_${identifier}`;

    useEffect(() => {
        const loadDisqus = () => {
            // Remove any existing Disqus threads
            const existingThreads = document.querySelectorAll(
                '[id^="disqus_thread"]'
            );
            existingThreads.forEach((thread) => {
                if (thread.id !== uniqueId) {
                    thread.innerHTML = "";
                }
            });

            // Clear current thread
            if (disqusRef.current) {
                disqusRef.current.innerHTML = "";
            }

            // Update the global disqus_config
            window.disqus_config = function (this: DisqusConfigFunction) {
                this.page = {
                    url: url,
                    identifier: identifier,
                    title: title,
                };
            };

            if (window.DISQUS) {
                // Force reload with new configuration
                window.DISQUS.reset({
                    reload: true,
                    config: function (this: DisqusConfigFunction) {
                        this.page = {
                            identifier: identifier,
                            url: url,
                            title: title,
                        };
                    },
                });
            } else {
                // Load Disqus script for the first time
                const existingScript = document.querySelector(
                    `script[src*="${shortname}.disqus.com"]`
                );
                if (!existingScript) {
                    const script = document.createElement("script");
                    script.src = `https://${shortname}.disqus.com/embed.js`;
                    script.setAttribute("data-timestamp", String(+new Date()));
                    script.async = true;
                    document.head.appendChild(script);
                }
            }
        };

        // Delay to ensure proper rendering
        const timeoutId = setTimeout(loadDisqus, 200);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [url, identifier, title, shortname, uniqueId]);

    return (
        <div className="mx-4 md:mx-16 lg:mx-32 my-12">
            <div id={uniqueId} ref={disqusRef}></div>
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
