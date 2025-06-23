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
                                Accordion
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Use useState to manage open/close state for each
                                section
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Tabs
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Highlight active tab, conditionally render
                                content.
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Modal
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Use portals (optional), escape key handling,
                                focus trap (bonus).
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Dropdown Select
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Controlled component for option selection.
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Todo App
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Full CRUD with state management; optional
                                useReducer.
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Form with Validation
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Validate input fields; use Formik, Yup, or
                                custom validation.
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Infinite Scroll List
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Load more items as you scroll to the bottom.
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Reusable Button / Input Components
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Build a styled and prop-driven button/input.
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Theme Toggle with Context API
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Use useContext to manage and switch themes
                                across components.
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg mb-2 text-primary">
                                Carousel/Slider
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Image carousel with navigation arrows, dots, and
                                optional auto-play
                            </p>
                            <div className="text-center">
                                <span className="text-gray-400 text-sm">
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
