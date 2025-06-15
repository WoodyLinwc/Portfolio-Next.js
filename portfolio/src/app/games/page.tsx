"use client";

import { useState } from "react";
import DisqusComments from "@/components/DisqusComments";
import { LoadingOverlay } from "@/components/Spinner";
import SectionTitle from "@/components/SectionTitle";
import GameShowcase from "./GameShowcase";

export default function GamesPage() {
    const [gameNewsLoaded, setGameNewsLoaded] = useState(false);

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* Games Showcase Section */}
            <SectionTitle
                backgroundText="Games & More"
                foregroundText="Let's Play!"
            />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
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
