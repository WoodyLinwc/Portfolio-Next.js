import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
    title: "React Learning | Woody Lin",
    description:
        "Learn React fundamentals with interactive tutorials and examples.",
};

export default function ReactLearningPage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            <SectionTitle backgroundText="React" foregroundText="Learn React" />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link
                            href="/learning"
                            className="text-primary hover:underline"
                        >
                            ← Back to Learning
                        </Link>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                            <i className="fab fa-react text-blue-500 text-6xl mb-4"></i>
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">
                                React Tutorials Coming Soon!
                            </h2>
                            <p className="text-blue-600 mb-6">
                                I'm working on interactive React tutorials
                                covering components, hooks, state management,
                                and more.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://react.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
                                >
                                    Official React Docs
                                </a>
                                <Link
                                    href="/learning"
                                    className="border border-blue-500 text-blue-500 px-6 py-3 rounded hover:bg-blue-500 hover:text-white transition-colors"
                                >
                                    Back to Learning
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
