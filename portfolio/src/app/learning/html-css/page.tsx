import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
    title: "HTML/CSS Learning | Woody Lin",
    description:
        "Learn HTML semantics, CSS layouts, and Tailwind CSS fundamentals.",
};

export default function HtmlCssLearningPage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            <SectionTitle
                backgroundText="Frontend"
                foregroundText="HTML & CSS"
            />

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
                        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                            <i className="fab fa-html5 text-green-500 text-6xl mb-4"></i>
                            <h2 className="text-2xl font-bold text-green-800 mb-4">
                                HTML/CSS Tutorials Coming Soon!
                            </h2>
                            <p className="text-green-600 mb-6">
                                I&apos;m creating tutorials on HTML semantics,
                                CSS layouts, Flexbox, Grid, and Tailwind CSS.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors"
                                >
                                    MDN HTML Docs
                                </a>
                                <a
                                    href="https://tailwindcss.com/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-cyan-500 text-white px-6 py-3 rounded hover:bg-cyan-600 transition-colors"
                                >
                                    Tailwind Docs
                                </a>
                                <Link
                                    href="/learning"
                                    className="border border-green-500 text-green-500 px-6 py-3 rounded hover:bg-green-500 hover:text-white transition-colors"
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
