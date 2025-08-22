"use client";

import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { useState } from "react";
import { allBasics } from "@/data/basics";

export default function BasicsPage() {
    const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<string>("All");

    const toggleTopic = (topicId: string) => {
        setExpandedTopic(expandedTopic === topicId ? null : topicId);
    };

    // Filter basics based on selected category
    const filteredBasics =
        selectedFilter === "All"
            ? allBasics
            : allBasics.filter((topic) => topic.category === selectedFilter);

    // Filter options: All, JavaScript, React
    const filterOptions = ["All", "JavaScript", "React"];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "JavaScript":
                return "bg-yellow-100 text-yellow-800";
            case "React":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getDifficultyColor = (difficulty?: string) => {
        switch (difficulty) {
            case "Beginner":
                return "bg-green-100 text-green-800";
            case "Intermediate":
                return "bg-yellow-100 text-yellow-800";
            case "Advanced":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

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

                    {/* Topics List */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {filteredBasics.map((topic) => (
                            <div
                                key={topic.id}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                {/* Topic Header - Clickable */}
                                <button
                                    onClick={() => toggleTopic(topic.id)}
                                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {topic.title}
                                            </h3>
                                            <div className="flex space-x-2">
                                                <span
                                                    className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                                                        topic.category
                                                    )}`}
                                                >
                                                    {topic.category}
                                                </span>
                                                {topic.difficulty && (
                                                    <span
                                                        className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                                                            topic.difficulty
                                                        )}`}
                                                    >
                                                        {topic.difficulty}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <i
                                            className={`fa transition-transform duration-200 ${
                                                expandedTopic === topic.id
                                                    ? "fa-chevron-up"
                                                    : "fa-chevron-down"
                                            }`}
                                        ></i>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-2">
                                        {topic.description}
                                    </p>
                                </button>

                                {/* Topic Content - Expandable */}
                                <div
                                    className={`transition-all duration-300 ease-in-out ${
                                        expandedTopic === topic.id
                                            ? "max-h-screen opacity-100"
                                            : "max-h-0 opacity-0 overflow-hidden"
                                    }`}
                                >
                                    <div className="px-6 pb-6 border-t border-gray-100">
                                        <div className="pt-4">
                                            <h4 className="font-semibold text-gray-800 mb-3">
                                                Content:
                                            </h4>
                                            <pre className="text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded overflow-x-auto">
                                                {topic.content}
                                            </pre>

                                            {/* Example Link */}
                                            {topic.exampleUrl && (
                                                <a
                                                    href={topic.exampleUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                                                >
                                                    <i className="fa fa-external-link-alt mr-2"></i>
                                                    Try Example
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
