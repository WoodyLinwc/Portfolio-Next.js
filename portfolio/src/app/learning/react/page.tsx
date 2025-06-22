"use client";

import SectionTitle from "@/components/SectionTitle";

export default function ReactLearningPage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* React Learning Section */}
            <SectionTitle
                backgroundText="React"
                foregroundText="Interactive Learning"
            />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Description */}
                    <div className="text-center mb-8">
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Learn React through interactive examples and
                            mini-projects!
                        </p>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Start with this classic Tic Tac Toe game built with
                            React hooks.
                        </p>
                    </div>

                    {/* Interactive Components Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Tic Tac Toe Game */}
                        <div
                            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
                            onClick={() =>
                                (window.location.href =
                                    "/learning/react/tic-tac-toe")
                            }
                        >
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Tic Tac Toe
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Simple coding game
                            </p>
                        </div>

                        {/* Placeholder for future components */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Counter App
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Learn useState hook basics
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Todo List
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Practice state management
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Weather Widget
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Learn useEffect and API calls
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Form Validation
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Master controlled components
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Memory Game
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Complex state interactions
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Learning Resources */}
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            React Learning Resources
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Useful links and documentation for learning React
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Official Docs
                                </h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    The official React documentation
                                </p>
                                <a
                                    href="https://react.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Visit React.dev
                                </a>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    React Hooks
                                </h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Deep dive into React Hooks
                                </p>
                                <a
                                    href="https://react.dev/reference/react"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Learn Hooks
                                </a>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    TypeScript + React
                                </h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Using TypeScript with React
                                </p>
                                <a
                                    href="https://react.dev/learn/typescript"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                >
                                    TypeScript Guide
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
