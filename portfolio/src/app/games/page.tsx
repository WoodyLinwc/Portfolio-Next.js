"use client";

import { useState } from "react";
import DisqusComments from "@/components/DisqusComments";
import { LoadingOverlay } from "@/components/Spinner";
import GameShowcase from "./GameShowcase";

export default function GamesPage() {
    const [gameNewsLoaded, setGameNewsLoaded] = useState(false);

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center mb-20"></div>

            {/* Games Showcase Section */}
            <section className="py-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    <div className="relative flex items-center justify-center mb-16">
                        <h1 className="text-6xl lg:text-7xl font-bold text-gray-100 uppercase tracking-wider">
                            Games & More
                        </h1>
                        <h1 className="absolute text-3xl lg:text-4xl font-bold text-primary uppercase">
                            Let's Play!
                        </h1>
                    </div>

                    <GameShowcase />
                </div>
            </section>

            {/* Game News Iframe */}
            <section className="py-12">
                <div className="container mx-auto px-8 lg:px-16 xl:px-24">
                    <div className="max-w-6xl mx-auto relative">
                        <LoadingOverlay
                            isVisible={!gameNewsLoaded}
                            message="Loading game news..."
                        />
                        <iframe
                            src="https://www.gamespot.com/news/"
                            className={`w-full h-96 lg:h-[600px] border-0 rounded-lg shadow-lg transition-opacity duration-300 ${
                                gameNewsLoaded ? "opacity-100" : "opacity-0"
                            }`}
                            title="GameSpot News"
                            onLoad={() => setGameNewsLoaded(true)}
                        />
                        <div
                            className={`text-center mt-4 transition-opacity duration-300 ${
                                gameNewsLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <p className="text-gray-600">Credit: GameSpot</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comments Section */}
            <DisqusComments
                url="game-section"
                identifier="game-section"
                title="Games & More"
            />
        </>
    );
}
