import { useState, useEffect } from "react";

interface UseBackgroundPreloaderOptions {
    /** Delay before starting preload (in milliseconds) */
    startDelay?: number;
    /** Delay between each image preload (in milliseconds) */
    imageDelay?: number;
    /** Maximum number of concurrent preloads */
    concurrency?: number;
    /** Unique key for caching preload state */
    cacheKey?: string;
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
 * Custom hook for preloading images in the background with persistent caching
 *
 * @param imagesToPreload - Array of image URLs to preload
 * @param options - Configuration options for preloading behavior
 * @returns Object containing preload state and progress information
 */
export function useBackgroundPreloader(
    imagesToPreload: string[],
    options: UseBackgroundPreloaderOptions = {}
): UseBackgroundPreloaderReturn {
    const {
        startDelay = 1000,
        imageDelay = 50,
        concurrency = 1,
        cacheKey = "default",
    } = options;

    const [preloadedImages, setPreloadedImages] = useState<Set<string>>(
        new Set()
    );
    const [preloadProgress, setPreloadProgress] = useState(0);
    const [isPreloading, setIsPreloading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [failedCount, setFailedCount] = useState(0);

    // Load cached preload state from localStorage
    useEffect(() => {
        // Only run on client side
        if (typeof window === "undefined") return;

        try {
            const cacheData = localStorage.getItem(`preload-cache-${cacheKey}`);
            if (cacheData) {
                const { preloadedUrls, timestamp } = JSON.parse(cacheData);

                // Check if cache is still valid (24 hours)
                const cacheAge = Date.now() - timestamp;
                const maxCacheAge = 24 * 60 * 60 * 1000; // 24 hours

                if (cacheAge < maxCacheAge && Array.isArray(preloadedUrls)) {
                    const cachedSet = new Set(preloadedUrls);
                    const validCachedImages = preloadedUrls.filter((url) =>
                        imagesToPreload.includes(url)
                    );

                    if (validCachedImages.length > 0) {
                        setPreloadedImages(new Set(validCachedImages));
                        setLoadedCount(validCachedImages.length);

                        // If all images are already cached, mark as complete
                        if (
                            validCachedImages.length === imagesToPreload.length
                        ) {
                            setIsComplete(true);
                            setPreloadProgress(100);
                            return; // Skip preloading entirely
                        }
                    }
                }
            }
        } catch (error) {
            console.warn("Failed to load preload cache:", error);
        }
    }, [imagesToPreload, cacheKey]);

    // Save preload state to localStorage
    const saveCacheData = (preloadedUrls: string[]) => {
        // Only run on client side
        if (typeof window === "undefined") return;

        try {
            const cacheData = {
                preloadedUrls,
                timestamp: Date.now(),
            };
            localStorage.setItem(
                `preload-cache-${cacheKey}`,
                JSON.stringify(cacheData)
            );
        } catch (error) {
            console.warn("Failed to save preload cache:", error);
        }
    };

    useEffect(() => {
        if (imagesToPreload.length === 0) {
            setIsComplete(true);
            return;
        }

        // Skip preloading if already complete from cache
        if (isComplete && loadedCount === imagesToPreload.length) {
            return;
        }

        let isCancelled = false;
        const totalImages = imagesToPreload.length;
        let processedCount = loadedCount; // Start from cached count
        let successCount = loadedCount; // Start from cached count
        let errorCount = failedCount;

        // Get images that haven't been preloaded yet
        const imagesToLoad = imagesToPreload.filter(
            (src) => !preloadedImages.has(src)
        );

        if (imagesToLoad.length === 0) {
            setIsComplete(true);
            setPreloadProgress(100);
            return;
        }

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
                        setPreloadedImages((prev) => {
                            const newSet = new Set([...prev, src]);
                            // Save to cache
                            saveCacheData(Array.from(newSet));
                            return newSet;
                        });
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

            // Process images in batches based on concurrency setting
            for (let i = 0; i < imagesToLoad.length; i += concurrency) {
                if (isCancelled) break;

                const batch = imagesToLoad.slice(i, i + concurrency);
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
                if (i + concurrency < imagesToLoad.length && imageDelay > 0) {
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
    }, [
        imagesToPreload,
        startDelay,
        imageDelay,
        concurrency,
        isComplete,
        loadedCount,
        failedCount,
        preloadedImages,
    ]);

    return {
        preloadedImages,
        preloadProgress,
        isPreloading,
        isComplete,
        loadedCount,
        failedCount,
    };
}
