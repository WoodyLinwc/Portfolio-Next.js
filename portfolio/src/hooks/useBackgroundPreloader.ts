// src/hooks/useBackgroundPreloader.ts
import { useState, useEffect, useCallback } from "react";

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
 */
export function useBackgroundPreloader(
    imagesToPreload: string[],
    options: UseBackgroundPreloaderOptions = {}
): UseBackgroundPreloaderReturn {
    const {
        startDelay = 1000,
        imageDelay = 50,
        concurrency = 2,
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

    // Debug logging
    const debugLog = useCallback(
        (message: string, data?: any) => {
            console.log(`[Preloader ${cacheKey}] ${message}`, data || "");
        },
        [cacheKey]
    );

    // Load cached preload state from localStorage
    useEffect(() => {
        if (typeof window === "undefined" || imagesToPreload.length === 0)
            return;

        try {
            const cacheData = localStorage.getItem(`preload-cache-${cacheKey}`);
            if (cacheData) {
                const { preloadedUrls, timestamp } = JSON.parse(cacheData);
                const cacheAge = Date.now() - timestamp;
                const maxCacheAge = 7 * 24 * 60 * 60 * 1000; // 7 days

                if (cacheAge < maxCacheAge && Array.isArray(preloadedUrls)) {
                    // Filter cached URLs to only include ones in current image list
                    const validCachedImages = preloadedUrls.filter((url) =>
                        imagesToPreload.includes(url)
                    );

                    if (validCachedImages.length > 0) {
                        debugLog(
                            `Loaded ${validCachedImages.length} images from cache`
                        );
                        setPreloadedImages(new Set(validCachedImages));
                        setLoadedCount(validCachedImages.length);

                        // Calculate progress based on current image list
                        const progress =
                            (validCachedImages.length /
                                imagesToPreload.length) *
                            100;
                        setPreloadProgress(progress);

                        // If all current images are cached, mark as complete
                        if (
                            validCachedImages.length === imagesToPreload.length
                        ) {
                            debugLog(
                                "All images found in cache, marking complete"
                            );
                            setIsComplete(true);
                            setPreloadProgress(100);
                        }
                    }
                }
            }
        } catch (error) {
            console.warn("Failed to load preload cache:", error);
        }
    }, [imagesToPreload, cacheKey, debugLog]);

    // Save preload state to localStorage
    const saveCacheData = useCallback(
        (preloadedUrls: string[]) => {
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
                debugLog(`Saved ${preloadedUrls.length} URLs to cache`);
            } catch (error) {
                console.warn("Failed to save preload cache:", error);
            }
        },
        [cacheKey, debugLog]
    );

    // Main preloading effect
    useEffect(() => {
        if (imagesToPreload.length === 0) {
            setIsComplete(true);
            setPreloadProgress(100);
            return;
        }

        // Get current state snapshot
        const currentPreloaded = new Set(preloadedImages);
        const imagesToLoad = imagesToPreload.filter(
            (src) => !currentPreloaded.has(src)
        );

        debugLog(
            `Total images: ${imagesToPreload.length}, Already loaded: ${currentPreloaded.size}, To load: ${imagesToLoad.length}`
        );

        // If no images need loading, mark as complete
        if (imagesToLoad.length === 0) {
            debugLog("No images to load, marking complete");
            setIsComplete(true);
            setPreloadProgress(100);
            return;
        }

        let isCancelled = false;
        let currentLoadedCount = currentPreloaded.size;
        let currentFailedCount = failedCount;

        const preloadImage = (src: string): Promise<boolean> => {
            return new Promise((resolve) => {
                if (isCancelled) {
                    resolve(false);
                    return;
                }

                const img = new window.Image();

                const handleLoad = () => {
                    if (isCancelled) return;

                    currentLoadedCount++;

                    setPreloadedImages((prev) => {
                        const newSet = new Set([...prev, src]);
                        // Save to cache
                        saveCacheData(Array.from(newSet));
                        return newSet;
                    });

                    setLoadedCount(currentLoadedCount);
                    const progress =
                        ((currentLoadedCount + currentFailedCount) /
                            imagesToPreload.length) *
                        100;
                    setPreloadProgress(progress);

                    debugLog(
                        `Loaded image ${currentLoadedCount}/${imagesToPreload.length}: ${src}`
                    );

                    if (
                        currentLoadedCount + currentFailedCount ===
                        imagesToPreload.length
                    ) {
                        debugLog("All images processed, marking complete");
                        setIsPreloading(false);
                        setIsComplete(true);
                        setPreloadProgress(100);
                    }

                    resolve(true);
                };

                const handleError = () => {
                    if (isCancelled) return;

                    currentFailedCount++;
                    setFailedCount(currentFailedCount);

                    const progress =
                        ((currentLoadedCount + currentFailedCount) /
                            imagesToPreload.length) *
                        100;
                    setPreloadProgress(progress);

                    debugLog(`Failed to load image: ${src}`);

                    if (
                        currentLoadedCount + currentFailedCount ===
                        imagesToPreload.length
                    ) {
                        debugLog(
                            "All images processed (with failures), marking complete"
                        );
                        setIsPreloading(false);
                        setIsComplete(true);
                        setPreloadProgress(100);
                    }

                    resolve(false);
                };

                img.onload = handleLoad;
                img.onerror = handleError;
                img.src = src;
            });
        };

        const preloadWithConcurrency = async () => {
            if (isCancelled) return;

            debugLog("Starting preload process");
            setIsPreloading(true);

            for (let i = 0; i < imagesToLoad.length; i += concurrency) {
                if (isCancelled) break;

                const batch = imagesToLoad.slice(i, i + concurrency);
                debugLog(
                    `Processing batch ${Math.floor(i / concurrency) + 1}: ${
                        batch.length
                    } images`
                );

                const batchPromises = batch.map(async (src, index) => {
                    if (index > 0 && imageDelay > 0) {
                        await new Promise((resolve) =>
                            setTimeout(resolve, imageDelay * index)
                        );
                    }
                    return preloadImage(src);
                });

                await Promise.all(batchPromises);

                if (i + concurrency < imagesToLoad.length && imageDelay > 0) {
                    await new Promise((resolve) =>
                        setTimeout(resolve, imageDelay)
                    );
                }
            }
        };

        const timeoutId = setTimeout(() => {
            if (!isCancelled) {
                preloadWithConcurrency();
            }
        }, startDelay);

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
        saveCacheData,
        debugLog,
        preloadedImages,
        failedCount,
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
