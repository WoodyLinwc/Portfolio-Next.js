"use client";

import { useState } from "react";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import { useLazyLoading } from "@/hooks/useLazyLoading";

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    width?: number;
    height?: number;
    sizes?: string;
    priority?: boolean;
    onClick?: () => void;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
}

export default function LazyImage({
    src,
    alt,
    className = "",
    fill = false,
    width,
    height,
    sizes,
    priority = false,
    onClick,
    placeholder,
    blurDataURL,
}: LazyImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const { elementRef, isInView } = useLazyLoading({
        threshold: 0.1,
        rootMargin: "50px",
    });

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    const handleRetry = (e: React.MouseEvent) => {
        e.stopPropagation();
        setHasError(false);
        setIsLoading(true);
    };

    return (
        <div
            ref={elementRef}
            className={`relative overflow-hidden bg-gray-100 ${className}`}
            onClick={onClick}
        >
            {/* Placeholder when not in view */}
            {!isInView && (
                <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">
                        <i className="fa fa-image text-2xl"></i>
                    </div>
                </div>
            )}

            {/* Loading spinner */}
            {isLoading && isInView && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <Spinner size="medium" color="primary" />
                </div>
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500 z-10">
                    <i className="fa fa-exclamation-triangle text-2xl mb-2"></i>
                    <p className="text-sm mb-2">Failed to load</p>
                    <button
                        onClick={handleRetry}
                        className="text-primary text-sm hover:underline"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Actual image - only render when in view */}
            {isInView && !hasError && (
                <Image
                    src={src}
                    alt={alt}
                    fill={fill}
                    width={!fill ? width : undefined}
                    height={!fill ? height : undefined}
                    sizes={sizes}
                    priority={priority}
                    placeholder={placeholder}
                    blurDataURL={blurDataURL}
                    className={`object-cover transition-opacity duration-300 ${
                        isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading={priority ? "eager" : "lazy"}
                />
            )}
        </div>
    );
}
