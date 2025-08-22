// File: portfolio/src/app/learning/page.tsx

import SectionTitle from "@/components/SectionTitle";
import MacTerminal from "@/components/learning/terminal/MacTerminal";
import { seoConfig } from "@/lib/seo";
import Link from "next/link";

export const metadata = seoConfig.learning;

export default function LearningPage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* Learning Section */}
            <SectionTitle
                backgroundText="Terminal"
                foregroundText="Frontend Essentials"
            />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Frontend Essentials Section */}
                    <div className="mt-12 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* HTML/CSS Card */}
                            <Link
                                href="/learning/html-css"
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group block"
                            >
                                <h4 className="font-bold text-lg mb-2 text-primary group-hover:text-blue-600 transition-colors">
                                    HTML/CSS (Tailwind) Refresher
                                </h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Semantics, layout, Flexbox/Grid
                                </p>
                                <div className="flex items-center justify-center text-primary group-hover:text-blue-600 transition-colors">
                                    <span className="text-sm font-medium">
                                        Start Learning
                                    </span>
                                    <i className="fa fa-arrow-right ml-2 text-sm"></i>
                                </div>
                            </Link>

                            {/* React Basics Card */}
                            <Link
                                href="/learning/react"
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group block"
                            >
                                <h4 className="font-bold text-lg mb-2 text-primary group-hover:text-blue-600 transition-colors">
                                    JavaScript and React Basics
                                </h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Variables, functions, arrays, loops, JSX,
                                    props, state, useEffect...
                                </p>
                                <div className="flex items-center justify-center text-primary group-hover:text-blue-600 transition-colors">
                                    <span className="text-sm font-medium">
                                        Start Learning
                                    </span>
                                    <i className="fa fa-arrow-right ml-2 text-sm"></i>
                                </div>
                            </Link>

                            {/* Coding Challenges Card - FIXED */}
                            <Link
                                href="/learning/coding-challenges"
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group block"
                            >
                                <h4 className="font-bold text-lg mb-2 text-primary group-hover:text-blue-600 transition-colors">
                                    Component-based Coding Demo
                                </h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    JavaScript or React component-based coding
                                    challenges
                                </p>
                                <div className="flex items-center justify-center text-primary group-hover:text-blue-600 transition-colors">
                                    <span className="text-sm font-medium">
                                        Start Learning
                                    </span>
                                    <i className="fa fa-arrow-right ml-2 text-sm"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description */}
            <div className="text-center mb-8 px-4 sm:px-0">
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Welcome to the interactive terminal!
                </p>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    You can start it by typing Linux command{" "}
                    <strong>help</strong> or <strong>ls</strong> in the
                    terminal.
                </p>
            </div>

            {/* Terminal Component */}
            <MacTerminal />

            {/* Comments Section */}
            {/* <DisqusComments
                url="learning-section"
                identifier="learning-section"
                title="Interactive Learning"
            /> */}
        </>
    );
}
