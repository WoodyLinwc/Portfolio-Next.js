import { useState, useEffect } from "react";

interface UseBackgroundPreloaderOptions {
    /** Delay before starting preload (in milliseconds) */
    startDelay?: number;
    /** Delay between each image preload (in milliseconds) */
    imageDelay?: number;
    /** Maximum number of concurrent preloads */
    concurrency?: number;
}

interface UseBackgroundPreloaderReturn {
    /** Set of successfully preloaded image URLs */
    preloadedImages: Set<string>;
    /** Preload progress as percentage (0-100) */
    preloadProgress: number;
    /** Whether preloading is currently active */
    isPreloading: boolean;
    /** Whether all images have been processed (success or failure) */
    isComplete: boolean;
    /** Number of successfully loaded images */
    loadedCount: number;
    /** Number of failed images */
    failedCount: number;
}

/**
 * Custom hook for preloading images in the background
 *
 * @param imagesToPreload - Array of image URLs to preload
 * @param options - Configuration options for preloading behavior
 * @returns Object containing preload state and progress information
 */
export function useBackgroundPreloader(
    imagesToPreload: string[],
    options: UseBackgroundPreloaderOptions = {}
): UseBackgroundPreloaderReturn {
    const { startDelay = 1000, imageDelay = 50, concurrency = 1 } = options;

    const [preloadedImages, setPreloadedImages] = useState<Set<string>>(
        new Set()
    );
    const [preloadProgress, setPreloadProgress] = useState(0);
    const [isPreloading, setIsPreloading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [failedCount, setFailedCount] = useState(0);

    useEffect(() => {
        if (imagesToPreload.length === 0) {
            setIsComplete(true);
            return;
        }

        let isCancelled = false;
        const totalImages = imagesToPreload.length;
        let processedCount = 0;
        let successCount = 0;
        let errorCount = 0;

        /**
         * Preloads a single image
         */
        const preloadImage = (src: string): Promise<boolean> => {
            return new Promise((resolve) => {
                if (isCancelled) {
                    resolve(false);
                    return;
                }

                const img = new window.Image();

                const handleLoad = () => {
                    if (!isCancelled) {
                        processedCount++;
                        successCount++;
                        setPreloadedImages((prev) => new Set([...prev, src]));
                        setLoadedCount(successCount);
                        setPreloadProgress(
                            (processedCount / totalImages) * 100
                        );

                        if (processedCount === totalImages) {
                            setIsPreloading(false);
                            setIsComplete(true);
                        }
                    }
                    resolve(true);
                };

                const handleError = () => {
                    if (!isCancelled) {
                        processedCount++;
                        errorCount++;
                        setFailedCount(errorCount);
                        setPreloadProgress(
                            (processedCount / totalImages) * 100
                        );

                        if (processedCount === totalImages) {
                            setIsPreloading(false);
                            setIsComplete(true);
                        }
                    }
                    resolve(false);
                };

                img.onload = handleLoad;
                img.onerror = handleError;

                // Start loading the image
                img.src = src;
            });
        };

        /**
         * Preloads images with concurrency control and delays
         */
        const preloadWithConcurrency = async () => {
            if (isCancelled) return;

            setIsPreloading(true);
            setPreloadProgress(0);
            setLoadedCount(0);
            setFailedCount(0);

            // Process images in batches based on concurrency setting
            for (let i = 0; i < imagesToPreload.length; i += concurrency) {
                if (isCancelled) break;

                const batch = imagesToPreload.slice(i, i + concurrency);
                const batchPromises = batch.map(async (src, index) => {
                    // Add delay between images in the same batch (except the first)
                    if (index > 0 && imageDelay > 0) {
                        await new Promise((resolve) =>
                            setTimeout(resolve, imageDelay * index)
                        );
                    }
                    return preloadImage(src);
                });

                // Wait for current batch to complete before starting next batch
                await Promise.all(batchPromises);

                // Small delay between batches to prevent overwhelming the browser
                if (
                    i + concurrency < imagesToPreload.length &&
                    imageDelay > 0
                ) {
                    await new Promise((resolve) =>
                        setTimeout(resolve, imageDelay)
                    );
                }
            }
        };

        // Start preloading after the specified delay
        const timeoutId = setTimeout(() => {
            if (!isCancelled) {
                preloadWithConcurrency();
            }
        }, startDelay);

        // Cleanup function
        return () => {
            isCancelled = true;
            clearTimeout(timeoutId);
            setIsPreloading(false);
        };
    }, [imagesToPreload, startDelay, imageDelay, concurrency]);

    return {
        preloadedImages,
        preloadProgress,
        isPreloading,
        isComplete,
        loadedCount,
        failedCount,
    };
}
