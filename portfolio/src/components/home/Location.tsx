"use client";

import { useState, useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import WeatherWidget from "@/components/widgets/WeatherWidget";
import { WeatherEffectOverlay } from "@/components/weather-effects";
import { personalInfo } from "@/data/me/personal";

export default function Location() {
    const [weatherCondition, setWeatherCondition] = useState<string>("");

    // Lightweight weather fetch just for the particle effect
    useEffect(() => {
        const fetchWeatherCondition = async () => {
            try {
                const response = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=42.3601&longitude=-71.0589&current=weather_code&timezone=America%2FNew_York&forecast_days=1"
                );

                if (!response.ok) {
                    throw new Error("Weather data unavailable");
                }

                const data = await response.json();
                const weatherCode = data.current.weather_code;

                const getDescription = (code: number) => {
                    if (code <= 1) return "clear sky";
                    if (code === 2) return "partly cloudy";
                    if (code === 3) return "cloudy";
                    if (code >= 51 && code <= 67) return "rain";
                    if (code >= 71 && code <= 86) return "snow";
                    if (code >= 80 && code <= 82) return "rain showers";
                    if (code >= 95 && code <= 99) return "thunderstorm";
                    return "cloudy";
                };

                const condition = getDescription(weatherCode);
                setWeatherCondition(condition);
            } catch {
                // Removed unused 'error' parameter
                setWeatherCondition("partly cloudy");
            }
        };

        fetchWeatherCondition();
    }, []);

    return (
        <>
            {/* Section Title with Weather Effect Overlay */}
            <SectionTitle
                backgroundText="Location"
                foregroundText="Work Area"
                overlay={
                    weatherCondition ? (
                        <WeatherEffectOverlay
                            weatherCondition={weatherCondition}
                        />
                    ) : null
                }
            />

            <section>
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Weather Widget */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <WeatherWidget />
                    </div>
                    {/* Map */}
                    <div className="flex justify-center">
                        <iframe
                            src={personalInfo.locationData.mapEmbedUrl}
                            className="border-0 w-full max-w-4xl h-96 lg:h-[550px] rounded-lg shadow-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${personalInfo.location} Work Area Map`}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
