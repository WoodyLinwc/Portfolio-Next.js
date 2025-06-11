"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
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

    if (!isVisible) {
        return null;
    }

    return (
        <>
            {/* Scroll to bottom indicator */}
            <div className="fixed left-1/2 transform -translate-x-1/2 bottom-8 z-50 animate-bounce">
                <i className="fa fa-2x fa-angle-down text-white"></i>
            </div>

            {/* Back to top button */}
            <button
                onClick={scrollToTop}
                className="fixed right-8 bottom-8 w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-50 animate-bounce"
                aria-label="Back to top"
            >
                <i className="fa fa-angle-double-up"></i>
            </button>
        </>
    );
}
