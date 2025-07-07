"use client";

import { useState } from "react";
// import DisqusComments from "@/components/widgets/DisqusComments";
import { LoadingOverlay } from "@/components/Spinner";
import SectionTitle from "@/components/SectionTitle";
import GameShowcase from "./GameShowcase";
import { WeatherEffectOverlay } from "@/components/weather-effects";

export default function GamesPage() {
    const [gameNewsLoaded, setGameNewsLoaded] = useState(false);

    // Force snow effect for testing (you can change this to any weather condition)
    const testWeatherCondition = "mist"; // Change to "rain", "clear sky", etc. for testing

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center relative overflow-hidden">
                {/* Weather Effect for Header */}
                <WeatherEffectOverlay
                    weatherCondition={testWeatherCondition}
                    className="absolute inset-0"
                />
                <div className="relative z-10">
                    <h1 className="text-white text-4xl font-bold">
                        Games & More
                    </h1>
                </div>
            </div>

            {/* Games Showcase Section with Weather Effect */}
            <div className="relative">
                <SectionTitle
                    backgroundText="Games & More"
                    foregroundText="Let's Play!"
                    overlay={
                        <WeatherEffectOverlay
                            weatherCondition={testWeatherCondition}
                        />
                    }
                />
            </div>

            <section className="pb-12 relative">
                {/* Background Weather Effect for entire section */}
                <WeatherEffectOverlay
                    weatherCondition={testWeatherCondition}
                    className="absolute inset-0 opacity-30"
                />

                <div className="container mx-auto px-8 lg:px-20 xl:px-32 relative z-10">
                    <GameShowcase />
                </div>
            </section>

            {/* Game News Iframe */}
            <section className="py-12 relative">
                {/* Subtle weather effect for news section */}
                <WeatherEffectOverlay
                    weatherCondition={testWeatherCondition}
                    className="absolute inset-0 opacity-20"
                />

                <div className="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
                    <div className="max-w-6xl mx-auto relative">
                        <LoadingOverlay
                            isVisible={!gameNewsLoaded}
                            message="Loading game news..."
                        />
                        <iframe
                            src="https://www.gamespot.com/news/"
                            className={`w-full h-96 lg:h-[600px] border-0 rounded-lg shadow-lg transition-opacity duration-300 relative z-10 ${
                                gameNewsLoaded ? "opacity-100" : "opacity-0"
                            }`}
                            title="GameSpot News"
                            onLoad={() => setGameNewsLoaded(true)}
                        />
                        <div
                            className={`text-center mt-4 transition-opacity duration-300 relative z-10 ${
                                gameNewsLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <p className="text-gray-600">Credit: GameSpot</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Effect Testing Controls */}
            <section className="py-8 bg-gray-100">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-xl font-bold mb-4">
                            Weather Effect Testing
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Currently showing:{" "}
                            <strong className="text-primary">
                                {testWeatherCondition}
                            </strong>
                        </p>
                        <p className="text-sm text-gray-500">
                            Change the <code>testWeatherCondition</code>{" "}
                            variable in the component to test different effects:
                            <br />
                            &ldquo;snow&rdquo;, &ldquo;rain&rdquo;, &ldquo;clear
                            sky&rdquo;, &ldquo;partly cloudy&rdquo;, etc.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comments Section */}
            {/* <DisqusComments
                url="game-section"
                identifier="game-section"
                title="Games & More"
            /> */}
        </>
    );
}
