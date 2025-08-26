"use client";

import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { useState } from "react";
import { allBasics } from "@/data/basics";
import Accordion, { type AccordionItem } from "@/components/learning/Accordion";

export default function BasicsPage() {
    const [selectedFilter, setSelectedFilter] = useState<string>("All");

    // Filter basics based on selected category
    const filteredBasics =
        selectedFilter === "All"
            ? allBasics
            : allBasics.filter((topic) => topic.category === selectedFilter);

    // Convert basics to accordion items
    const accordionItems: AccordionItem[] = filteredBasics.map((topic) => ({
        id: topic.id,
        title: topic.title,
        description: topic.description,
        category: topic.category,
        difficulty: topic.difficulty,
        content: topic.content,
        exampleUrl: topic.exampleUrl,
        tags: topic.tags,
    }));

    // Filter options: All, JavaScript, React, Others
    const filterOptions = ["All", "JavaScript", "React", "Others"];

    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            <SectionTitle backgroundText="Learn" foregroundText="Basics" />

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

                    {/* Topic Count */}
                    <div className="text-center mb-6">
                        <p className="text-gray-600 text-sm">
                            Showing {filteredBasics.length} topic
                            {filteredBasics.length !== 1 ? "s" : ""}
                            {selectedFilter !== "All" &&
                                ` in ${selectedFilter}`}
                        </p>
                    </div>

                    {/* Accordion Component */}
                    <Accordion
                        items={accordionItems}
                        contentLabel="Content:"
                        buttonLabel="Try Example"
                    />
                </div>
            </section>
        </>
    );
}
