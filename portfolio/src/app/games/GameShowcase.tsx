// src/app/games/GameShowcase.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { games, type Game } from "./games-data";

interface GameShowcaseProps {
    className?: string;
}

export default function GameShowcase({ className = "" }: GameShowcaseProps) {
    const [currentGame, setCurrentGame] = useState(0);

    const nextGame = () => {
        setCurrentGame((prev) => (prev + 1) % games.length);
    };

    const prevGame = () => {
        setCurrentGame((prev) => (prev - 1 + games.length) % games.length);
    };

    const handleGameSelect = (index: number) => {
        setCurrentGame(index);
    };

    return (
        <div className={`max-w-4xl mx-auto ${className}`}>
            <div className="bg-gray-50 rounded-xl p-8 text-center relative">
                {/* Previous Button */}
                <button
                    onClick={prevGame}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Previous game"
                >
                    <i className="fa fa-chevron-left text-primary"></i>
                </button>

                {/* Next Button */}
                <button
                    onClick={nextGame}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Next game"
                >
                    <i className="fa fa-chevron-right text-primary"></i>
                </button>

                {/* Quote Icon */}
                <i className="fa fa-3x fa-quote-left text-primary mb-6"></i>

                {/* Game Description */}
                <h4 className="font-light mb-6 text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    {games[currentGame].description}
                </h4>

                {/* Game Image */}
                <div className="w-20 h-20 mx-auto mb-4 relative">
                    <Image
                        src={games[currentGame].image}
                        alt={games[currentGame].title}
                        fill
                        className="rounded-full object-cover"
                        sizes="80px"
                    />
                </div>

                {/* Game Title Link */}
                <a
                    href={games[currentGame].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:text-primary transition-colors"
                >
                    <h5 className="font-bold text-xl mb-2">
                        → {games[currentGame].title} ←
                    </h5>
                </a>

                {/* Game Subtitle */}
                <p className="text-gray-600 mb-6">
                    {games[currentGame].subtitle}
                </p>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2">
                    {games.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleGameSelect(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentGame
                                    ? "bg-primary"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to game ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
