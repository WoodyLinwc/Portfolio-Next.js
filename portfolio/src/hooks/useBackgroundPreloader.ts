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
    /** Enable detailed logging for debugging */
    debug?: boolean;
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
    /** Array of failed image URLs with error details */
    failedImages: Array<{ url: string; error: string }>;
    /** Detailed status for debugging */
    debugStatus: {
        totalImages: number;
        successfulImages: string[];
        failedImages: Array<{ url: string; error: string; timestamp: string }>;
        processingTime: number;
    };
}

/**
 * Custom hook for preloading images in the background with persistent caching and detailed debugging
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
        debug = false,
    } = options;

    const [preloadedImages, setPreloadedImages] = useState<Set<string>>(
        new Set()
    );
    const [preloadProgress, setPreloadProgress] = useState(0);
    const [isPreloading, setIsPreloading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [failedCount, setFailedCount] = useState(0);
    const [failedImages, setFailedImages] = useState<
        Array<{ url: string; error: string }>
    >([]);
    const [debugStatus, setDebugStatus] = useState({
        totalImages: 0,
        successfulImages: [] as string[],
        failedImages: [] as Array<{
            url: string;
            error: string;
            timestamp: string;
        }>,
        processingTime: 0,
    });
    const [startTime, setStartTime] = useState<number>(0);

    // Enhanced debug logging
    const debugLog = useCallback(
        (
            message: string,
            data?: unknown,
            level: "info" | "warn" | "error" = "info"
        ) => {
            if (debug) {
                const timestamp = new Date()
                    .toISOString()
                    .split("T")[1]
                    .split(".")[0];
                const prefix = `[Preloader ${cacheKey} ${timestamp}]`;

                switch (level) {
                    case "warn":
                        console.warn(prefix, message, data || "");
                        break;
                    case "error":
                        console.error(prefix, message, data || "");
                        break;
                    default:
                        console.log(prefix, message, data || "");
                }
            }
        },
        [cacheKey, debug]
    );

    // Load cached preload state from localStorage
    useEffect(() => {
        if (typeof window === "undefined" || imagesToPreload.length === 0)
            return;

        setDebugStatus((prev) => ({
            ...prev,
            totalImages: imagesToPreload.length,
        }));
        debugLog(
            `Initializing preloader with ${imagesToPreload.length} images`
        );

        try {
            const cacheData = localStorage.getItem(`preload-cache-${cacheKey}`);
            if (cacheData) {
                const { preloadedUrls, timestamp } = JSON.parse(cacheData);
                const cacheAge = Date.now() - timestamp;
                const maxCacheAge = 7 * 24 * 60 * 60 * 1000; // 7 days

                if (cacheAge < maxCacheAge && Array.isArray(preloadedUrls)) {
                    const validCachedImages = preloadedUrls.filter((url) =>
                        imagesToPreload.includes(url)
                    );

                    if (validCachedImages.length > 0) {
                        debugLog(
                            `Loaded ${
                                validCachedImages.length
                            } images from cache (age: ${Math.round(
                                cacheAge / 1000 / 60
                            )} minutes)`
                        );
                        setPreloadedImages(new Set(validCachedImages));
                        setLoadedCount(validCachedImages.length);
                        setDebugStatus((prev) => ({
                            ...prev,
                            successfulImages: validCachedImages,
                        }));

                        const progress =
                            (validCachedImages.length /
                                imagesToPreload.length) *
                            100;
                        setPreloadProgress(progress);

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
                } else {
                    debugLog("Cache expired or invalid, starting fresh", {
                        cacheAge,
                        maxCacheAge,
                    });
                }
            } else {
                debugLog("No cache found, starting fresh preload");
            }
        } catch (error) {
            debugLog("Failed to load preload cache", error, "error");
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
                debugLog("Failed to save preload cache", error, "error");
            }
        },
        [cacheKey, debugLog]
    );

    // Enhanced image preloading with detailed error reporting
    const preloadImage = useCallback(
        (
            src: string
        ): Promise<{ success: boolean; url: string; error?: string }> => {
            return new Promise((resolve) => {
                const img = new window.Image();
                const loadStartTime = Date.now();
                let hasResolved = false;

                const handleLoad = () => {
                    if (hasResolved) return;
                    hasResolved = true;

                    const loadTime = Date.now() - loadStartTime;
                    debugLog(
                        `✅ Loaded: ${src.split("/").pop()} (${loadTime}ms)`
                    );
                    resolve({ success: true, url: src });
                };

                const handleError = (errorMessage: string) => {
                    if (hasResolved) return;
                    hasResolved = true;

                    const loadTime = Date.now() - loadStartTime;
                    debugLog(
                        `❌ Failed: ${src
                            .split("/")
                            .pop()} - ${errorMessage} (${loadTime}ms)`,
                        null,
                        "error"
                    );
                    resolve({ success: false, url: src, error: errorMessage });
                };

                // Set up event listeners with proper typing
                img.onload = () => handleLoad();
                img.onerror = () => {
                    // Check if it's a 404 by examining the image properties
                    const isNetworkError =
                        !img.complete && img.naturalHeight === 0;
                    const errorMessage = isNetworkError
                        ? "Network error (possibly 404)"
                        : "Load failed";
                    handleError(errorMessage);
                };

                // Add timeout for hung requests
                const timeout = setTimeout(() => {
                    debugLog(
                        `⏰ Timeout: ${src.split("/").pop()}`,
                        null,
                        "warn"
                    );
                    handleError("Timeout (30s)");
                }, 30000);

                // Clear timeout when image loads or errors
                const cleanup = () => {
                    clearTimeout(timeout);
                };

                const originalOnLoad = img.onload;
                const originalOnError = img.onerror;

                img.onload = (e) => {
                    cleanup();
                    if (originalOnLoad) {
                        originalOnLoad.call(img, e);
                    }
                };

                img.onerror = (e) => {
                    cleanup();
                    if (originalOnError) {
                        originalOnError.call(img, e);
                    }
                };

                // Start loading
                debugLog(`🔄 Loading: ${src.split("/").pop()}`);
                img.src = src;
            });
        },
        [debugLog]
    );

    // Main preloading effect
    useEffect(() => {
        if (imagesToPreload.length === 0) {
            setIsComplete(true);
            setPreloadProgress(100);
            return;
        }

        const currentPreloaded = new Set(preloadedImages);
        const imagesToLoad = imagesToPreload.filter(
            (src) => !currentPreloaded.has(src)
        );

        debugLog(
            `📊 Status: Total=${imagesToPreload.length}, Cached=${currentPreloaded.size}, ToLoad=${imagesToLoad.length}`
        );

        if (imagesToLoad.length === 0) {
            debugLog("✨ No images to load, marking complete");
            setIsComplete(true);
            setPreloadProgress(100);
            return;
        }

        let isCancelled = false;
        let processedInThisSession = 0;
        let failedInThisSession = 0;
        const sessionFailures: Array<{ url: string; error: string }> = [];

        const preloadWithConcurrency = async () => {
            if (isCancelled) return;

            debugLog("🚀 Starting preload process");
            setIsPreloading(true);
            setStartTime(Date.now());

            for (let i = 0; i < imagesToLoad.length; i += concurrency) {
                if (isCancelled) break;

                const batch = imagesToLoad.slice(i, i + concurrency);
                debugLog(
                    `📦 Processing batch ${
                        Math.floor(i / concurrency) + 1
                    }/${Math.ceil(imagesToLoad.length / concurrency)}: ${
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

                const results = await Promise.all(batchPromises);

                // Process results
                results.forEach((result) => {
                    if (isCancelled) return;

                    processedInThisSession++;

                    if (result.success) {
                        setPreloadedImages((prev) => {
                            const newSet = new Set([...prev, result.url]);
                            saveCacheData(Array.from(newSet));
                            return newSet;
                        });

                        setDebugStatus((prev) => ({
                            ...prev,
                            successfulImages: [
                                ...prev.successfulImages,
                                result.url,
                            ],
                        }));
                    } else {
                        failedInThisSession++;
                        const failureInfo = {
                            url: result.url,
                            error: result.error || "Unknown error",
                        };
                        sessionFailures.push(failureInfo);

                        setFailedImages((prev) => [...prev, failureInfo]);
                        setDebugStatus((prev) => ({
                            ...prev,
                            failedImages: [
                                ...prev.failedImages,
                                {
                                    ...failureInfo,
                                    timestamp: new Date().toISOString(),
                                },
                            ],
                        }));
                    }

                    // Update counts and progress
                    const newLoadedCount =
                        currentPreloaded.size +
                        processedInThisSession -
                        failedInThisSession;
                    const newFailedCount = failedCount + failedInThisSession;

                    setLoadedCount(newLoadedCount);
                    setFailedCount(newFailedCount);

                    const totalProcessed = newLoadedCount + newFailedCount;
                    const progress = Math.min(
                        100,
                        (totalProcessed / imagesToPreload.length) * 100
                    );
                    setPreloadProgress(progress);

                    // Check completion
                    if (totalProcessed >= imagesToPreload.length) {
                        const processingTime = Date.now() - startTime;
                        setDebugStatus((prev) => ({ ...prev, processingTime }));

                        debugLog(
                            `🏁 Preload complete! Loaded: ${newLoadedCount}, Failed: ${newFailedCount}, Time: ${processingTime}ms`
                        );

                        if (sessionFailures.length > 0) {
                            debugLog(
                                "❌ Failed images summary:",
                                sessionFailures,
                                "error"
                            );
                        }

                        setIsPreloading(false);
                        setIsComplete(true);
                        setPreloadProgress(100);
                    }
                });

                // Delay between batches
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
        preloadImage,
        startTime,
    ]);

    return {
        preloadedImages,
        preloadProgress,
        isPreloading,
        isComplete,
        loadedCount,
        failedCount,
        failedImages,
        debugStatus,
    };
}
