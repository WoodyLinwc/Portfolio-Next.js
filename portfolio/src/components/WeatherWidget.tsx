"use client";

import { useState, useEffect } from "react";

interface WeatherData {
    temperature: number;
    description: string;
    icon: string;
    lastUpdated: Date;
    humidity: number;
    windSpeed: number;
    pressure: number;
}

interface WeatherWidgetProps {
    className?: string;
}

export default function WeatherWidget({ className = "" }: WeatherWidgetProps) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchWeather = async (isManualRefresh = false) => {
        if (isManualRefresh) {
            setIsRefreshing(true);
        }

        try {
            // Start both the API call and minimum delay
            const [response] = await Promise.all([
                fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=42.3601&longitude=-71.0589&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m,surface_pressure&timezone=America%2FNew_York&forecast_days=1"
                ),
                // Minimum 1 second delay for manual refresh to show loading state
                isManualRefresh
                    ? new Promise((resolve) => setTimeout(resolve, 1000))
                    : Promise.resolve(),
            ]);

            if (!response.ok) {
                throw new Error("Weather data unavailable");
            }

            const data = await response.json();
            const current = data.current;

            const weatherInfo = getWeatherInfo(current.weather_code);

            setWeather({
                temperature: Math.round(current.temperature_2m),
                description: weatherInfo.description,
                icon: weatherInfo.icon,
                lastUpdated: new Date(),
                humidity: current.relative_humidity_2m,
                windSpeed: Math.round(current.wind_speed_10m * 3.6), // Convert m/s to km/h
                pressure: Math.round(current.surface_pressure),
            });
        } catch (error) {
            console.error("Weather fetch error:", error);
            // Fallback data
            setWeather({
                temperature: 22,
                description: "partly cloudy",
                icon: "fa-cloud-sun",
                lastUpdated: new Date(),
                humidity: 65,
                windSpeed: 8,
                pressure: 1013,
            });
        } finally {
            setLoading(false);
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        fetchWeather();

        // Update every 30 minutes
        const interval = setInterval(() => fetchWeather(), 1800000);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getWeatherInfo = (weatherCode: number) => {
        const weatherMap: {
            [key: number]: { description: string; icon: string };
        } = {
            0: { description: "clear sky", icon: "fa-sun" },
            1: { description: "mostly clear", icon: "fa-sun" },
            2: { description: "partly cloudy", icon: "fa-cloud-sun" },
            3: { description: "overcast", icon: "fa-cloud" },
            45: { description: "foggy", icon: "fa-smog" },
            48: { description: "foggy", icon: "fa-smog" },
            51: { description: "light rain", icon: "fa-cloud-rain" },
            53: { description: "moderate rain", icon: "fa-cloud-rain" },
            55: { description: "heavy rain", icon: "fa-cloud-rain" },
            61: { description: "light rain", icon: "fa-cloud-sun-rain" },
            63: { description: "moderate rain", icon: "fa-cloud-rain" },
            65: { description: "heavy rain", icon: "fa-cloud-rain" },
            71: { description: "light snow", icon: "fa-snowflake" },
            73: { description: "moderate snow", icon: "fa-snowflake" },
            75: { description: "heavy snow", icon: "fa-snowflake" },
            80: { description: "rain showers", icon: "fa-cloud-sun-rain" },
            81: { description: "rain showers", icon: "fa-cloud-rain" },
            82: { description: "heavy rain", icon: "fa-cloud-rain" },
            85: { description: "snow showers", icon: "fa-snowflake" },
            86: { description: "heavy snow", icon: "fa-snowflake" },
            95: { description: "thunderstorm", icon: "fa-bolt" },
            96: { description: "thunderstorm", icon: "fa-bolt" },
            99: { description: "thunderstorm", icon: "fa-bolt" },
        };

        return (
            weatherMap[weatherCode] || {
                description: "partly cloudy",
                icon: "fa-cloud",
            }
        );
    };

    const formatLastUpdated = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const handleClick = () => {
        if (!isRefreshing) {
            fetchWeather(true);
        }
    };

    if (loading || isRefreshing) {
        return (
            <div className={`max-w-4xl mx-auto ${className}`}>
                <div className="border-2 border-primary text-primary px-6 py-3 rounded text-center w-full">
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-2 text-lg">
                        <div className="flex items-center space-x-2">
                            <i className="fa fa-map-marker-alt"></i>
                            <span className="font-medium whitespace-nowrap">
                                Boston, MA
                            </span>
                        </div>
                        <span className="text-gray-400 hidden sm:inline">
                            •
                        </span>
                        <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                            <span className="font-bold whitespace-nowrap">
                                {loading ? "Loading..." : "Refreshing..."}
                            </span>
                            <span className="capitalize whitespace-nowrap">
                                {loading ? "weather data" : "weather"}
                            </span>
                            <i className="fa fa-refresh animate-spin text-sm"></i>
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-4 text-sm mb-2">
                        <div className="flex items-center space-x-1">
                            <i className="fa fa-tint text-xs"></i>
                            <span>--</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <i className="fa fa-wind text-xs"></i>
                            <span>--</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <i className="fa fa-thermometer-half text-xs"></i>
                            <span>--</span>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center space-x-2 text-xs opacity-75"
                        style={{ fontSize: "10px" }}
                    >
                        <span>
                            Updated:{" "}
                            {weather?.lastUpdated
                                ? formatLastUpdated(weather.lastUpdated)
                                : "--:--"}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span>Powered by Open-Meteo API</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`max-w-4xl mx-auto ${className}`}>
            <button
                onClick={handleClick}
                disabled={isRefreshing}
                className="border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors text-center w-full disabled:opacity-50"
            >
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-2 text-lg">
                    <div className="flex items-center space-x-2">
                        <i className="fa fa-map-marker-alt"></i>
                        <span className="font-medium whitespace-nowrap">
                            Boston, MA
                        </span>
                    </div>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <div className="flex items-center space-x-2">
                        <i
                            className={`fa ${weather?.icon} ${
                                isRefreshing ? "animate-pulse" : ""
                            }`}
                        ></i>
                        <span className="font-bold whitespace-nowrap">
                            {weather?.temperature}°C
                        </span>
                        <span className="capitalize whitespace-nowrap">
                            {weather?.description}
                        </span>
                        <i
                            className={`fa fa-refresh text-sm ${
                                isRefreshing ? "animate-spin" : ""
                            }`}
                        ></i>
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-4 text-sm mb-2">
                    <div className="flex items-center space-x-1">
                        <i className="fa fa-tint text-xs"></i>
                        <span>{weather?.humidity}%</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <i className="fa fa-wind text-xs"></i>
                        <span>{weather?.windSpeed} km/h</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <i className="fa fa-thermometer-half text-xs"></i>
                        <span>{weather?.pressure} hPa</span>
                    </div>
                </div>

                <div
                    className="flex items-center justify-center space-x-2 text-xs opacity-75"
                    style={{ fontSize: "10px" }}
                >
                    <span>
                        Updated:{" "}
                        {weather?.lastUpdated
                            ? formatLastUpdated(weather.lastUpdated)
                            : "--:--"}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>Powered by Open-Meteo API</span>
                </div>
            </button>
        </div>
    );
}
