"use client";

import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Page() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/*Section */}
            <SectionTitle backgroundText="Game" foregroundText="" />

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
                    <div className="mb-8">
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
                            Logic implementation
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            1. useState hook to store an array 9 null element
                            and set X as first player.
                        </p>
                    </div>

                    {/* Game Container */}
                    <div className="flex justify-center mb-12"></div>

                    {/* Code Tips */}
                    <div className="mb-8">
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
                            Tips
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            1. create an array fill with 9 null elements:{" "}
                            <strong>Array(9).fill(null)</strong>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
