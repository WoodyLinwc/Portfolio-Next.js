"use client";

import { useEffect } from "react";

interface DisqusCommentsProps {
    url: string;
    identifier: string;
    title: string;
}

export default function DisqusComments({
    url,
    identifier,
    title,
}: DisqusCommentsProps) {
    useEffect(() => {
        // Reset Disqus if it already exists
        if (window.DISQUS) {
            window.DISQUS.reset({
                reload: true,
                config: function (this: DisqusConfigFunction) {
                    this.page = {
                        identifier: identifier,
                        url: `${window.location.origin}/${url}`,
                        title: title,
                    };
                },
            });
        } else {
            // Configure Disqus
            window.disqus_config = function (this: DisqusConfigFunction) {
                this.page = {
                    url: `${window.location.origin}/${url}`,
                    identifier: identifier,
                    title: title,
                };
            };

            // Load Disqus script
            const script = document.createElement("script");
            script.src = `https://${identifier}.disqus.com/embed.js`;
            script.setAttribute("data-timestamp", String(+new Date()));
            document.head.appendChild(script);
        }
    }, [url, identifier, title]);

    return (
        <div className="mx-4 md:mx-16 lg:mx-32 my-12">
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
