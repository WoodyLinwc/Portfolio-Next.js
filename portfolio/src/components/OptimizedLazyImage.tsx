"use client";

import { useState } from "react";
import Image from "next/image";

export interface OptimizedLazyImageProps {
    src: string;
    alt: string;
    fill: boolean;
    className: string;
    priority: boolean;
    sizes: string;
    onClick?: () => void;
    enableOptimization?: boolean; // Option to disable thumbnail optimization
    quality?: number; // Custom quality setting
}

export default function OptimizedLazyImage({
    src,
    alt,
    fill,
    className,
    priority,
    sizes,
    onClick,
    enableOptimization = true,
    quality,
}: OptimizedLazyImageProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [useOriginal, setUseOriginal] = useState(false);

    const getOptimizedPath = (originalPath: string) => {
        if (!enableOptimization) return originalPath;

        const pathParts = originalPath.split("/");
        const fileName = pathParts[pathParts.length - 1];
        const nameWithoutExt = fileName.split(".")[0];
        const directory = pathParts.slice(0, -1).join("/");
        const relativePath = directory.replace("/images/album/", "");
        return `/images/thumbnails/${relativePath}/${nameWithoutExt}.webp`;
    };

    const optimizedPath = enableOptimization ? getOptimizedPath(src) : src;

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        if (enableOptimization && !useOriginal) {
            console.log(`Optimized image not found, using original: ${src}`);
            setUseOriginal(true);
            setImageLoaded(false);
        }
    };

    // Determine quality based on whether we're using original or optimized
    const imageQuality = quality || (useOriginal ? 75 : 85);

    return (
        <div className="relative w-full h-full">
            {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">
                        <i className="fa fa-image text-2xl"></i>
                    </div>
                </div>
            )}

            <Image
                src={useOriginal ? src : optimizedPath}
                alt={alt}
                fill={fill}
                className={`${className} transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                sizes={sizes}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                onLoad={handleImageLoad}
                onError={handleImageError}
                onClick={onClick}
                quality={imageQuality}
            />
        </div>
    );
}
