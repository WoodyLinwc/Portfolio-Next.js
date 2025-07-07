"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/me/personal";
import { WeatherEffectOverlay } from "@/components/weather-effects";

export default function Hero() {
    const typedRef = useRef<HTMLSpanElement>(null);
    const [weatherCondition, setWeatherCondition] = useState<string>("");

    // Fetch weather condition for particle effects
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

                // Simple weather code to description mapping
                const getDescription = (code: number) => {
                    if (code <= 1) return "clear sky";
                    if (code === 2) return "partly cloudy";
                    if (code === 3) return "overcast";
                    if (code >= 51 && code <= 67) return "rain";
                    if (code >= 71 && code <= 86) return "snow";
                    if (code >= 80 && code <= 82) return "rain showers";
                    return "cloudy";
                };

                setWeatherCondition(getDescription(weatherCode));
            } catch (error) {
                console.error("Weather condition fetch error:", error);
                // Fallback to show effect
                setWeatherCondition("partly cloudy");
            }
        };

        fetchWeatherCondition();
    }, []);

    useEffect(() => {
        const typed_strings = personalInfo.hero.typedStrings;

        let currentIndex = 0;
        let currentText = "";
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const current = typed_strings[currentIndex];

            if (isDeleting) {
                currentText = current.substring(0, currentText.length - 1);
                typeSpeed = 20;
            } else {
                currentText = current.substring(0, currentText.length + 1);
                typeSpeed = 100;
            }

            if (typedRef.current) {
                typedRef.current.textContent = currentText;
            }

            if (!isDeleting && currentText === current) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentText === "") {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % typed_strings.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }, []);

    return (
        <section
            className="min-h-screen bg-primary flex items-center relative overflow-hidden"
            id="home"
        >
            {/* Weather Effect Overlay */}
            {weatherCondition && (
                <WeatherEffectOverlay
                    weatherCondition={weatherCondition}
                    className="absolute inset-0"
                />
            )}

            <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Section */}
                    <div className="lg:w-7/12 text-center lg:text-left order-2 lg:order-1">
                        <h3 className="text-white font-normal mb-3 text-base sm:text-lg">
                            {personalInfo.hero.greeting}
                        </h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary mb-4 stroke-white uppercase">
                            {personalInfo.fullName}
                        </h1>
                        <div className="text-white text-lg sm:text-xl lg:text-2xl font-light min-h-[2rem] mb-8 lg:mb-12">
                            <span ref={typedRef}></span>
                            <span className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl animate-blink">
                                |
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
                            {/* <a
                                href={`mailto:${personalInfo.email}`}
                                className="bg-white text-primary px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto text-center relative z-10"
                            >
                                Email Me
                            </a>
                            <a
                                href={personalInfo.links.linkedin}
                                className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-colors w-full sm:w-auto text-center relative z-10"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={personalInfo.links.github}
                                className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-colors w-full sm:w-auto text-center relative z-10"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a> */}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-5/12 flex justify-center order-1 lg:order-2 relative z-10">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] flex-shrink-0">
                            <Image
                                src="/images/GitHub-Mark.png"
                                alt={personalInfo.fullName}
                                fill
                                className="rounded-full shadow-lg object-cover"
                                priority
                                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 400px, 450px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
