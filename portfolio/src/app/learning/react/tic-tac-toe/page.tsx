"use client";

import SectionTitle from "@/components/SectionTitle";
import TicTacToe from "./ticTacToe";
import Link from "next/link";

export default function TicTacToePage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* Tic Tac Toe Section */}
            <SectionTitle backgroundText="Game" foregroundText="Tic Tac Toe" />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Back Navigation */}
                    <div className="mb-8">
                        <Link
                            href="/learning/react"
                            className="inline-flex items-center text-primary hover:underline"
                        >
                            <i className="fa fa-arrow-left mr-2"></i>
                            Back to React Learning
                        </Link>
                    </div>

                    {/* Description */}
                    <div className="text-center mb-8">
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
                            A classic Tic Tac Toe game built with React hooks!
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                            This game demonstrates useState for state
                            management, event handling, and conditional
                            rendering in React.
                        </p>
                    </div>

                    {/* Game Container */}
                    <div className="flex justify-center mb-12">
                        <TicTacToe />
                    </div>

                    {/* Code Explanation */}
                    {/* <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                            What You&apos;ll Learn
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    React Hooks
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Learn useState for managing game state,
                                    current player, and winner detection.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Event Handling
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Handle click events on game squares and
                                    button interactions.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Conditional Rendering
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Display different UI states based on game
                                    progress and winner.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Array Methods
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Use JavaScript array methods for game logic
                                    and state updates.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    CSS Classes
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Dynamic CSS classes based on game state and
                                    player turns.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Game Logic
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Implement win conditions, tie detection, and
                                    game reset functionality.
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Next Steps */}
                    <div className="text-center mt-12">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            Ready for More?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Continue learning React with more interactive
                            examples
                        </p>
                        <Link
                            href="/learning/react"
                            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                        >
                            Explore More React Examples
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
