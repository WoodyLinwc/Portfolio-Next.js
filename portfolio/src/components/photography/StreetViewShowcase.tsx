// src/components/photography/StreetViewShowcase.tsx
"use client";

import { useState, useEffect } from "react";
import placeData from "@/data/photography/place.json";

interface City {
    name: string;
    coordinates: [number, number, number]; // [longitude, latitude, elevation]
}

interface StreetViewShowcaseProps {
    className?: string;
}

export default function StreetViewShowcase({
    className = "",
}: StreetViewShowcaseProps) {
    const [currentCity, setCurrentCity] = useState<City | null>(null);
    const [isGridExpanded, setIsGridExpanded] = useState(false);

    // Extract cities from the place.json data
    const cities: City[] = placeData.features.map((feature) => ({
        name: feature.properties.name,
        coordinates: feature.geometry.coordinates as [number, number, number],
    }));

    // Function to get a random city
    const getRandomCity = () => {
        const randomIndex = Math.floor(Math.random() * cities.length);
        return cities[randomIndex];
    };

    // Initialize with a random city
    useEffect(() => {
        setCurrentCity(getRandomCity());
    }, []);

    // Function to load a new random city
    const loadRandomCity = () => {
        setCurrentCity(getRandomCity());
    };

    // Generate Google Street View link that opens in new tab
    const getStreetViewLink = (city: City) => {
        const [longitude, latitude] = city.coordinates;
        return `https://www.google.com/maps/@${latitude},${longitude},3a,75y,90h,90t/data=!3m6!1e1!3m4!1s0x0:0x0!2e0!7i16384!8i8192`;
    };

    if (!currentCity) {
        return (
            <div className={`max-w-6xl mx-auto ${className}`}>
                <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-gray-600 mt-4">Loading cities...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`max-w-6xl mx-auto ${className}`}>
            {/* Header */}
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Virtual Street View Explorer
                </h3>
                <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-4">
                    Take a virtual walk through the streets of cities I&apos;ve
                    visited or plan to visit. Click on any city below to explore
                    its street view in Google Maps.
                </p>
            </div>

            {/* Current City Display */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                {/* City Info Header */}
                <div className="bg-primary text-white px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-xl font-bold">
                                {currentCity.name}
                            </h4>
                            <p className="text-sm opacity-90">
                                {currentCity.coordinates[1].toFixed(4)}°N,{" "}
                                {currentCity.coordinates[0].toFixed(4)}°E
                            </p>
                        </div>
                        <button
                            onClick={loadRandomCity}
                            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        >
                            <i className="fa fa-random"></i>
                            Random City
                        </button>
                    </div>
                </div>
            </div>

            {/* City Grid - Show all cities */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                    onClick={() => setIsGridExpanded(!isGridExpanded)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-100 transition-colors border-b border-gray-200"
                >
                    <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-800">
                            All Cities in My Collection ({cities.length}{" "}
                            locations)
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600">
                            <span className="text-sm">
                                {isGridExpanded ? "Hide" : "Show"} all cities
                            </span>
                            <i
                                className={`fa transition-transform duration-200 ${
                                    isGridExpanded
                                        ? "fa-chevron-up"
                                        : "fa-chevron-down"
                                }`}
                            ></i>
                        </div>
                    </div>
                </button>

                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isGridExpanded
                            ? "max-h-[2000px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="p-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                            {cities.map((city, index) => (
                                <div key={index} className="relative group">
                                    <a
                                        href={getStreetViewLink(city)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setCurrentCity(city)}
                                        className={`w-full text-left p-3 rounded-lg border transition-all duration-200 block hover:shadow-lg ${
                                            currentCity.name === city.name
                                                ? "bg-primary text-white border-primary shadow-md"
                                                : "bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300"
                                        }`}
                                    >
                                        <div className="font-medium text-sm truncate">
                                            {city.name}
                                        </div>
                                        <div className="text-xs opacity-75 mt-1">
                                            {city.coordinates[1].toFixed(2)}°,{" "}
                                            {city.coordinates[0].toFixed(2)}°
                                        </div>
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <i className="fa fa-external-link-alt text-xs"></i>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
