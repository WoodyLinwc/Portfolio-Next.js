"use client";

import SectionTitle from "@/components/SectionTitle";
// import DisqusComments from "@/components/widgets/DisqusComments";
import MacTerminal from "@/components/learning/terminal/MacTerminal";

export default function LearningPage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* Learning Section */}
            <SectionTitle
                backgroundText="Terminal"
                foregroundText="Interactive Learning"
            />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Description */}
                    <div className="text-center mb-8">
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Welcome to the interactive terminal for my website!
                        </p>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            You can start it by typing Linux command{" "}
                            <strong>ls</strong> in the terminal.
                        </p>
                    </div>

                    {/* Terminal Component */}
                    <MacTerminal />

                    {/* Additional Learning Content */}
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            Learning Resources
                        </h3>
                        <p className="text-gray-600 mb-6">
                            More interactive learning tools and resources coming
                            soon!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Command Line
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Learn basic terminal commands and navigation
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Web Development
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Interactive tutorials for HTML, CSS, and
                                    JavaScript
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Programming
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Practice coding challenges and algorithms
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comments Section */}
            {/* <DisqusComments
                url="learning-section"
                identifier="learning-section"
                title="Interactive Learning"
            /> */}
        </>
    );
}
