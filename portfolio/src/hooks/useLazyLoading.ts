// src/hooks/useLazyLoading.ts
import { useEffect, useRef, useState } from "react";

interface UseLazyLoadingOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useLazyLoading(options: UseLazyLoadingOptions = {}) {
    const { threshold = 0.1, rootMargin = "50px" } = options;
    const [isInView, setIsInView] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasLoaded) {
                    setIsInView(true);
                    setHasLoaded(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
            observer.disconnect();
        };
    }, [threshold, rootMargin, hasLoaded]);

    return { elementRef, isInView, hasLoaded };
}
