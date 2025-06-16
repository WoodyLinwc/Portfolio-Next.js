"use client";

import { useEffect, useState } from "react";

declare global {
    interface Window {
        L2Dwidget: unknown;
    }
}

interface Live2DWidgetProps {
    onLoad?: () => void;
    onError?: (error: Error) => void;
}

export default function Live2DWidget({
    onLoad,
    onError,
}: Live2DWidgetProps = {}) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let mounted = true;

        const loadLive2D = async () => {
            try {
                // Check if Live2D is already loaded
                if (document.getElementById("live2d-widget-script")) {
                    setIsLoading(false);
                    onLoad?.();
                    return;
                }

                // Create and load the script
                const live2dScript = document.createElement("script");
                live2dScript.src =
                    "https://cdn.jsdelivr.net/gh/WoodyLinwc/live2d-widget@latest/autoload.js";
                live2dScript.id = "live2d-widget-script";
                live2dScript.async = true;

                // Handle successful load
                live2dScript.onload = () => {
                    if (mounted) {
                        console.log("Live2D widget loaded successfully");
                        setIsLoading(false);
                        setHasError(false);
                        onLoad?.();
                    }
                };

                // Handle load error
                live2dScript.onerror = (error) => {
                    if (mounted) {
                        console.error("Failed to load Live2D widget:", error);
                        setIsLoading(false);
                        setHasError(true);
                        onError?.(new Error("Failed to load Live2D widget"));
                    }
                };

                // Add script to document
                document.body.appendChild(live2dScript);
            } catch (error) {
                if (mounted) {
                    console.error("Error setting up Live2D widget:", error);
                    setIsLoading(false);
                    setHasError(true);
                    onError?.(error as Error);
                }
            }
        };

        loadLive2D();

        // Cleanup function
        return () => {
            mounted = false;

            // Remove Live2D elements when component unmounts
            const live2dWidget = document.getElementById("L2Dwidget");
            if (live2dWidget) {
                live2dWidget.remove();
            }

            const live2dCanvas = document.querySelector('canvas[id*="live2d"]');
            if (live2dCanvas) {
                live2dCanvas.remove();
            }

            const live2dContainer = document.querySelector("#live2d-widget");
            if (live2dContainer) {
                live2dContainer.remove();
            }

            // Clear global variables
            if (window.L2Dwidget) {
                try {
                    window.L2Dwidget = undefined;
                } catch {
                    console.log("Live2D cleanup completed");
                }
            }
        };
    }, [onLoad, onError]);

    // Don't render anything - Live2D manages its own DOM
    // But we can return loading/error states if needed
    if (hasError) {
        return (
            <div className="fixed bottom-4 left-4 bg-red-500 text-white px-3 py-2 rounded text-sm z-40">
                Live2D failed to load
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="fixed bottom-4 left-4 bg-blue-500 text-white px-3 py-2 rounded text-sm z-40">
                Loading Live2D...
            </div>
        );
    }

    return null;
}
