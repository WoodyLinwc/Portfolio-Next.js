"use client";

import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { useState } from "react";
import { allChallenges } from "@/data/challenges";
import Accordion, { type AccordionItem } from "@/components/learning/Accordion";

export default function CodingChallengesPage() {
    const [selectedFilter, setSelectedFilter] = useState<string>("All");

    // Filter challenges based on selected category
    const filteredChallenges =
        selectedFilter === "All"
            ? allChallenges
            : allChallenges.filter(
                  (challenge) => challenge.category === selectedFilter
              );

    // Convert challenges to accordion items
    const accordionItems: AccordionItem[] = filteredChallenges.map(
        (challenge) => ({
            id: challenge.id,
            title: challenge.title,
            category: challenge.category,
            difficulty: challenge.difficulty,
            content: challenge.approach,
            exampleUrl: challenge.codesandboxUrl,
            tags: challenge.tags,
        })
    );

    // Updated filter options with new order: All, React, JavaScript, TypeScript
    const filterOptions = ["All", "React", "JavaScript", "TypeScript"];

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            <SectionTitle
                backgroundText="Practice"
                foregroundText="Code Challenges"
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

                    {/* Filter Buttons */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-100 rounded-lg p-1 flex justify-center gap-1">
                            {filterOptions.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                                        selectedFilter === filter
                                            ? "bg-white text-primary shadow-sm font-medium"
                                            : "text-gray-600 hover:text-gray-800"
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Challenge Count */}
                    <div className="text-center mb-6">
                        <p className="text-gray-600 text-sm">
                            Showing {filteredChallenges.length} challenge
                            {filteredChallenges.length !== 1 ? "s" : ""}
                            {selectedFilter !== "All" &&
                                ` in ${selectedFilter}`}
                        </p>
                    </div>

                    {/* Accordion Component */}
                    <Accordion
                        items={accordionItems}
                        contentLabel="Approach:"
                        buttonLabel="Try in CodeSandbox"
                    />
                </div>
            </section>
        </>
    );
}
