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
    const [isLoadingRandomCity, setIsLoadingRandomCity] = useState(false);

    // Extract cities from the place.json data and filter out Chinese cities (limited Street View support)
    const allCities: City[] = placeData.features.map((feature) => ({
        name: feature.properties.name,
        coordinates: feature.geometry.coordinates as [number, number, number],
    }));

    // Chinese cities with limited/no Street View support
    const chineseCities = [
        "Beijing",
        "Shanghai",
        "Xiamen",
        "Dali",
        "Dandong",
        "Lhasa",
    ];

    // Filter cities for Street View (exclude Chinese cities)
    const streetViewCities = allCities.filter(
        (city) => !chineseCities.includes(city.name)
    );

    // Use all cities for display, but only Street View supported cities for random selection
    const cities = allCities;

    // Function to get a random city (only from Street View supported cities)
    const getRandomCity = () => {
        const randomIndex = Math.floor(Math.random() * streetViewCities.length);
        return streetViewCities[randomIndex];
    };

    // Initialize with a random city
    useEffect(() => {
        setCurrentCity(getRandomCity());
    }, []);

    // Check if city supports Street View
    const citySupportsStreetView = (cityName: string) => {
        return !chineseCities.includes(cityName);
    };

    // Function to add slight random variation to coordinates (within same city)
    const addCoordinateVariation = (
        coordinates: [number, number, number]
    ): [number, number, number] => {
        const [longitude, latitude, elevation] = coordinates;

        // Add small random variation (roughly 500m - 2km radius)
        // Latitude: 1 degree ≈ 111km, so 0.01 degree ≈ 1.1km
        // Longitude varies by latitude, but at most latitudes 0.01 degree ≈ 0.8-1.1km
        const latVariation = (Math.random() - 0.5) * 0.02; // ±0.01 degrees (±1.1km)
        const lngVariation = (Math.random() - 0.5) * 0.02; // ±0.01 degrees (±0.8-1.1km)

        return [longitude + lngVariation, latitude + latVariation, elevation];
    };

    // Generate Google Street View link that opens in new tab
    const getStreetViewLink = (city: City, useVariation: boolean = false) => {
        const coordinates = useVariation
            ? addCoordinateVariation(city.coordinates)
            : city.coordinates;
        const [longitude, latitude] = coordinates;

        // Detect if user is on mobile device
        const isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

        if (isMobile) {
            // Use universal Google Maps URL that works in browser without requiring the app
            // This will open in Safari if Google Maps app is not installed
            return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&map_action=pano`;
        } else {
            // Use desktop Street View URL
            return `https://www.google.com/maps/@${latitude},${longitude},3a,75y,90h,90t/data=!3m6!1e1!3m4!1s0x0:0x0!2e0!7i16384!8i8192`;
        }
    };

    // Function to load a new random city with loading effect
    const loadRandomCity = async () => {
        setIsLoadingRandomCity(true);

        // Add a delay for better UX (you can adjust this)
        await new Promise((resolve) => setTimeout(resolve, 800));

        const randomCity = getRandomCity();
        setCurrentCity(randomCity);
        setIsLoadingRandomCity(false);
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
                <div className="bg-primary text-white px-4 sm:px-6 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="min-w-0">
                            <h4 className="text-lg sm:text-xl font-bold truncate">
                                {currentCity.name}
                            </h4>
                            <p className="text-xs sm:text-sm opacity-90">
                                {currentCity.coordinates[1].toFixed(4)}°N,{" "}
                                {currentCity.coordinates[0].toFixed(4)}°E
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 flex-shrink-0">
                            <button
                                onClick={loadRandomCity}
                                disabled={isLoadingRandomCity}
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 disabled:bg-opacity-10 disabled:cursor-not-allowed text-white px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                            >
                                <i
                                    className={`fa ${
                                        isLoadingRandomCity
                                            ? "fa-spinner fa-spin"
                                            : "fa-random"
                                    }`}
                                ></i>
                                {isLoadingRandomCity
                                    ? "Loading..."
                                    : "Random City"}
                            </button>
                            <button
                                onClick={() => {
                                    if (
                                        citySupportsStreetView(currentCity.name)
                                    ) {
                                        window.open(
                                            getStreetViewLink(
                                                currentCity,
                                                true
                                            ),
                                            "_blank",
                                            "noopener,noreferrer"
                                        );
                                    } else {
                                        // For Chinese cities, open regular Google Maps view
                                        const [longitude, latitude] =
                                            currentCity.coordinates;
                                        window.open(
                                            `https://www.google.com/maps/@${latitude},${longitude},15z`,
                                            "_blank",
                                            "noopener,noreferrer"
                                        );
                                    }
                                }}
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                            >
                                <i
                                    className={`fa ${
                                        citySupportsStreetView(currentCity.name)
                                            ? "fa-street-view"
                                            : "fa-map"
                                    }`}
                                ></i>
                                {citySupportsStreetView(currentCity.name)
                                    ? "View Street"
                                    : "View Map"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* City Grid - Show all cities */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                    onClick={() => setIsGridExpanded(!isGridExpanded)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-100 transition-colors border-b border-gray-200"
                >
                    {/* Mobile: Stack vertically */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                        <h4 className="text-lg font-semibold text-gray-800">
                            All Cities in My Collection ({cities.length}{" "}
                            locations)
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 self-start sm:self-auto">
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
                        {/* Mobile: Single column with more breathing room */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {cities.map((city, index) => (
                                <div key={index} className="relative group">
                                    <button
                                        onClick={() => setCurrentCity(city)}
                                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 hover:shadow-lg relative ${
                                            currentCity.name === city.name
                                                ? "bg-primary text-white border-primary shadow-md"
                                                : "bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300"
                                        }`}
                                    >
                                        <div className="font-medium text-sm truncate">
                                            {city.name}
                                            {!citySupportsStreetView(
                                                city.name
                                            ) && (
                                                <span className="ml-1 text-xs opacity-60">
                                                    (Map only)
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-xs opacity-75 mt-1">
                                            {city.coordinates[1].toFixed(2)}°,{" "}
                                            {city.coordinates[0].toFixed(2)}°
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
