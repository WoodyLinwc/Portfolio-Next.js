import SectionTitle from "@/components/SectionTitle";
import MacTerminal from "@/components/learning/terminal/MacTerminal";
import { seoConfig } from "@/lib/seo";

export const metadata = seoConfig.learning;

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

                    {/* Additional Learning Content */}
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            Frontend Essentials (Coming soon)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    HTML/CSS (Tailwind) Refresher
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Semantics, layout, Flexbox/Grid
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    JavaScript and React Basics
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Variables, functions, arrays, loops, JSX,
                                    props, state, useEffect...
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold text-lg mb-2 text-primary">
                                    Component-based Coding Demo
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    JavaScript or React component-based coding
                                    challenges
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
