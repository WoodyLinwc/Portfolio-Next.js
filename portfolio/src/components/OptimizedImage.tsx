"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface OptimizedImageProps {
    src: string; // Original image path
    alt: string;
    className?: string;
    priority?: boolean;
    onClick?: () => void;
    sizes?: string;
}

export default function OptimizedImage({
    src,
    alt,
    className = "",
    priority = false,
    onClick,
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: OptimizedImageProps) {
    const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Generate optimized thumbnail paths (higher quality for grid)
    const getOptimizedPaths = (originalPath: string) => {
        const pathParts = originalPath.split("/");
        const fileName = pathParts[pathParts.length - 1];
        const nameWithoutExt = fileName.split(".")[0];
        const directory = pathParts.slice(0, -1).join("/");

        // Remove /images/album/ and replace with thumbnails path
        const relativePath = directory.replace("/images/album/", "");

        return {
            thumbnail: {
                webp: `/images/thumbnails/${relativePath}/${nameWithoutExt}.webp`,
                jpeg: `/images/thumbnails/${relativePath}/${nameWithoutExt}.jpg`,
            },
        };
    };

    const paths = getOptimizedPaths(src);

    const handleThumbnailLoad = useCallback(() => {
        setThumbnailLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setHasError(true);
    }, []);

    // Fallback to original image if optimized versions don't exist
    if (hasError) {
        return (
            <Image
                src={src}
                alt={alt}
                fill
                className={`object-cover transition-opacity duration-300 ${className}`}
                sizes={sizes}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                onClick={onClick}
                onError={() => console.warn(`Failed to load image: ${src}`)}
            />
        );
    }

    return (
        <picture className="contents">
            {/* WebP sources for modern browsers */}
            <source
                srcSet={paths.thumbnail.webp}
                type="image/webp"
                media="(max-width: 768px)"
            />
            <source srcSet={paths.thumbnail.webp} type="image/webp" />

            {/* JPEG fallbacks */}
            <source
                srcSet={paths.thumbnail.jpeg}
                type="image/jpeg"
                media="(max-width: 768px)"
            />
            <source srcSet={paths.thumbnail.jpeg} type="image/jpeg" />

            {/* Main image element */}
            <Image
                src={paths.thumbnail.jpeg} // Fallback for older browsers
                alt={alt}
                fill
                className={`object-cover transition-opacity duration-300 ${
                    thumbnailLoaded ? "opacity-100" : "opacity-0"
                } ${className}`}
                sizes={sizes}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                onLoad={handleThumbnailLoad}
                onError={handleError}
                onClick={onClick}
                quality={85} // Higher quality for better grid display
            />

            {/* Loading placeholder */}
            {!thumbnailLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">
                        <i className="fa fa-image text-2xl"></i>
                    </div>
                </div>
            )}
        </picture>
    );
}

// Original quality image component for lightbox
interface OriginalImageProps {
    src: string;
    alt: string;
    onLoad?: () => void;
    className?: string;
}

export function OriginalImage({
    src,
    alt,
    onLoad,
    className = "",
}: OriginalImageProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
        onLoad?.();
    }, [onLoad]);

    const handleError = useCallback(() => {
        setHasError(true);
        onLoad?.(); // Still call onLoad to hide loading spinner
    }, [onLoad]);

    return (
        <Image
            src={src} // Direct path to original image
            alt={alt}
            width={1920} // Larger size for original viewing
            height={1280}
            className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
            onLoad={handleImageLoad}
            onError={handleError}
            priority
            quality={95} // High quality for original viewing
        />
    );
}
