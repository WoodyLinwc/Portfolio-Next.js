// src/components/photography/TravelMapShowcase.tsx
"use client";

import StreetViewShowcase from "./StreetViewShowcase";

interface TravelMapShowcaseProps {
    className?: string;
}

export default function TravelMapShowcase({
    className = "",
}: TravelMapShowcaseProps) {
    // Your Google My Maps embed URL
    const myMapsEmbedUrl =
        "https://www.google.com/maps/d/embed?mid=1mGqFps7IHRDC3ANKGnNRt2FHSWDDNds&ehbc=2E312F";

    return (
        <div className={`max-w-6xl mx-auto ${className}`}>
            {/* Header */}
            <div className="text-center mb-8">
                <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                    Explore the places I&apos;ve been to and places I want to
                    visit for photography. Click on the markers to see more
                    details about each destination.
                </p>
            </div>

            {/* Google My Maps */}
            <div className="relative mb-8">
                <iframe
                    src={myMapsEmbedUrl}
                    className="w-full h-96 lg:h-[600px] border-0 rounded-lg shadow-lg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="My Travel Destinations Map"
                />

                {/* Map info overlay */}
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                        <i className="fa fa-info-circle text-primary"></i>
                        <span>Click markers for details</span>
                    </div>
                </div>
            </div>

            {/* External Link */}
            <div className="text-center mb-16">
                <a
                    href="https://www.google.com/maps/d/edit?mid=1mGqFps7IHRDC3ANKGnNRt2FHSWDDNds&usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium border border-primary rounded px-4 py-2 hover:bg-primary hover:text-white transition-colors"
                >
                    <i className="fa fa-external-link-alt"></i>
                    View Full Map in Google Maps
                </a>
            </div>

            {/* Divider */}
            <div className="relative mb-12">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-6 bg-white text-gray-500 font-medium"></span>
                </div>
            </div>

            {/* Street View Showcase */}
            <StreetViewShowcase />
        </div>
    );
}
