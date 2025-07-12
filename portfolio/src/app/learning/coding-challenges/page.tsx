"use client";

import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { useState } from "react";
import { allChallenges } from "@/data/challenges";

export default function CodingChallengesPage() {
    const [expandedChallenge, setExpandedChallenge] = useState<string | null>(
        null
    );
    const [selectedFilter, setSelectedFilter] = useState<string>("All");

    const toggleChallenge = (challengeId: string) => {
        setExpandedChallenge(
            expandedChallenge === challengeId ? null : challengeId
        );
    };

    // Filter challenges based on selected category
    const filteredChallenges =
        selectedFilter === "All"
            ? allChallenges
            : allChallenges.filter(
                  (challenge) => challenge.category === selectedFilter
              );

    const filterOptions = ["All", "JavaScript", "React", "Algorithm"];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "JavaScript":
                return "bg-yellow-100 text-yellow-800";
            case "React":
                return "bg-blue-100 text-blue-800";
            case "Algorithm":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getDifficultyColor = (difficulty?: string) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-100 text-green-800";
            case "Medium":
                return "bg-yellow-100 text-yellow-800";
            case "Hard":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

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

                    {/* Show message when no challenges found */}
                    {filteredChallenges.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500 text-lg">
                                No challenges found for {selectedFilter}.
                            </p>
                        </div>
                    )}

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

                    {/* Challenges List */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {filteredChallenges.map((challenge) => (
                            <div
                                key={challenge.id}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                {/* Challenge Header - Clickable */}
                                <button
                                    onClick={() =>
                                        toggleChallenge(challenge.id)
                                    }
                                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {challenge.title}
                                            </h3>
                                            <div className="flex space-x-2">
                                                <span
                                                    className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                                                        challenge.category
                                                    )}`}
                                                >
                                                    {challenge.category}
                                                </span>
                                                {challenge.difficulty && (
                                                    <span
                                                        className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                                                            challenge.difficulty
                                                        )}`}
                                                    >
                                                        {challenge.difficulty}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <i
                                            className={`fa transition-transform duration-200 ${
                                                expandedChallenge ===
                                                challenge.id
                                                    ? "fa-chevron-up"
                                                    : "fa-chevron-down"
                                            }`}
                                        ></i>
                                    </div>
                                </button>

                                {/* Challenge Content - Expandable */}
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        expandedChallenge === challenge.id
                                            ? "max-h-96 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="px-6 pb-6 border-t border-gray-100">
                                        <div className="pt-4">
                                            <h4 className="font-semibold text-gray-800 mb-3">
                                                Approach:
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap">
                                                {challenge.approach}
                                            </p>

                                            {/* Tags */}
                                            {challenge.tags &&
                                                challenge.tags.length > 0 && (
                                                    <div className="mb-4">
                                                        <h5 className="font-medium text-gray-700 mb-2 text-sm">
                                                            Tags:
                                                        </h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            {challenge.tags.map(
                                                                (
                                                                    tag,
                                                                    index
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                            <a
                                                href={challenge.codesandboxUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                                            >
                                                <i className="fa fa-external-link-alt mr-2"></i>
                                                Try in CodeSandbox
                                            </a>
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
