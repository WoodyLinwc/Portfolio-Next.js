"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [showDownArrow, setShowDownArrow] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.pageYOffset;

            // Show back-to-top button after scrolling down 200px
            if (scrolled > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Show down arrow only when at the top (Hero section)
            // Hide it once user scrolls past the hero section (around 80vh)
            if (scrolled < window.innerHeight * 0.8) {
                setShowDownArrow(true);
            } else {
                setShowDownArrow(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Scroll down indicator - shows in Hero section */}
            {showDownArrow && (
                <button
                    onClick={scrollToNext}
                    className="fixed left-1/2 transform -translate-x-1/2 bottom-8 z-50 animate-bounce cursor-pointer"
                    aria-label="Scroll to next section"
                >
                    <i className="fa fa-2x fa-angle-down text-white hover:text-gray-300 transition-colors"></i>
                </button>
            )}

            {/* Back to top button - shows after scrolling */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed right-8 bottom-8 w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-50 animate-bounce"
                    aria-label="Back to top"
                >
                    <i className="fa fa-angle-double-up"></i>
                </button>
            )}
        </>
    );
}
