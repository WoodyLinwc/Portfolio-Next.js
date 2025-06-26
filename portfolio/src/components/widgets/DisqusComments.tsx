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
    const currentConfigRef = useRef<string>("");

    useEffect(() => {
        // Create a unique key for this configuration
        const configKey = `${identifier}-${shortname}-${url}`;

        // If the configuration hasn't changed, don't reload
        if (currentConfigRef.current === configKey) {
            return;
        }

        currentConfigRef.current = configKey;

        const loadDisqus = () => {
            // Clear the Disqus thread container
            if (disqusRef.current) {
                disqusRef.current.innerHTML = "";
            }

            // Reset Disqus configuration
            window.disqus_config = function (this: DisqusConfigFunction) {
                this.page = {
                    url: url,
                    identifier: identifier,
                    title: title,
                };
            };

            // Reset Disqus if it already exists
            if (window.DISQUS) {
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
                const script = document.createElement("script");
                script.src = `https://${shortname}.disqus.com/embed.js`;
                script.setAttribute("data-timestamp", String(+new Date()));
                script.async = true;
                script.onload = () => {
                    console.log(`Disqus loaded for ${identifier}`);
                };
                document.head.appendChild(script);
            }
        };

        // Add a small delay to ensure DOM is ready
        const timeoutId = setTimeout(loadDisqus, 100);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [url, identifier, title, shortname]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            // Clear the configuration reference when component unmounts
            currentConfigRef.current = "";
        };
    }, []);

    return (
        <div className="mx-4 md:mx-16 lg:mx-32 my-12">
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
