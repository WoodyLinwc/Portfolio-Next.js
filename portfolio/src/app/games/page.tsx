"use client";

import { useState } from "react";
import Image from "next/image";
import DisqusComments from "@/components/DisqusComments";
import { LoadingOverlay } from "@/components/Spinner";

export default function GamesPage() {
    const [currentGame, setCurrentGame] = useState(0);
    const [gameNewsLoaded, setGameNewsLoaded] = useState(false);

    const games = [
        {
            title: "Space Invader",
            description:
                "🛰The objective of the game is to control a small spaceship at the bottom of the screen and shoot down rows of invading aliens that move side to side and gradually move closer to the player's spaceship.🚀",
            image: "/images/space.png",
            link: "https://woodylinwc.github.io/Space-Invaders",
            subtitle: "arcade-style shoot 'em up game",
        },
        {
            title: "Minesweeper",
            description:
                "🔎The objective of the game is to clear a board containing hidden mines without detonating any of them.💣",
            image: "/images/minesweeper.png",
            link: "https://woodylinwc.github.io/Minesweeper/",
            subtitle: "classic puzzle game",
        },
        {
            title: "Snake",
            description:
                "🐍The objective of the game is to achieve the highest score possible by eating as much food as possible without crashing into obstacles or the snake's own tail.🍎",
            image: "/images/snake.png",
            link: "https://woodylinwc.github.io/Snake",
            subtitle: "classic arcade-style game",
        },
        {
            title: "The Aviator",
            description:
                "🛫The objective is to fly as far as possible and stay away from the rock.🏅",
            image: "/images/plane.png",
            link: "https://woodylinwc.github.io/TheAviator",
            subtitle: "dodge obstacles game",
        },
    ];

    const nextGame = () => {
        setCurrentGame((prev) => (prev + 1) % games.length);
    };

    const prevGame = () => {
        setCurrentGame((prev) => (prev - 1 + games.length) % games.length);
    };

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

                    {/* Game Carousel */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-50 rounded-xl p-8 text-center relative">
                            <button
                                onClick={prevGame}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <i className="fa fa-chevron-left text-primary"></i>
                            </button>

                            <button
                                onClick={nextGame}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <i className="fa fa-chevron-right text-primary"></i>
                            </button>

                            <i className="fa fa-3x fa-quote-left text-primary mb-6"></i>

                            <h4 className="font-light mb-6 text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                {games[currentGame].description}
                            </h4>

                            <div className="w-20 h-20 mx-auto mb-4 relative">
                                <Image
                                    src={games[currentGame].image}
                                    alt={games[currentGame].title}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>

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

                            <p className="text-gray-600">
                                {games[currentGame].subtitle}
                            </p>

                            {/* Dots indicator */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {games.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentGame(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            index === currentGame
                                                ? "bg-primary"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
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
