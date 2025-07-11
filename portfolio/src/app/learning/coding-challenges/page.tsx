"use client";

import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { useState } from "react";

// Define the structure for coding challenges
interface CodingChallenge {
    id: string;
    title: string;
    category: "JavaScript" | "React" | "Algorithm";
    approach: string;
    codesandboxUrl: string;
}

// Sample coding challenges data
const challenges: CodingChallenge[] = [
    {
        id: "fizzbuzz",
        title: "FizzBuzz",
        category: "JavaScript",
        approach:
            "Create a function that prints numbers 1-100, but replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'. Use modulo operator (%) to check divisibility. Start with a simple loop, then add conditional statements to check each case.",
        codesandboxUrl: "https://codesandbox.io/s/fizzbuzz-challenge-new",
    },
    {
        id: "palindrome",
        title: "Palindrome Checker",
        category: "JavaScript",
        approach:
            "Check if a string reads the same forwards and backwards. First, clean the string by removing spaces and converting to lowercase. Then compare the string with its reverse. You can use array methods like split(), reverse(), and join(), or use two pointers from start and end.",
        codesandboxUrl: "https://codesandbox.io/s/palindrome-checker-new",
    },
    {
        id: "counter-app",
        title: "Counter App",
        category: "React",
        approach:
            "Build a simple counter with increment/decrement buttons. Use useState hook to manage the counter state. Create three buttons: increment (+1), decrement (-1), and reset (back to 0). Style the counter display and add some basic validation to prevent negative numbers if needed.",
        codesandboxUrl: "https://codesandbox.io/s/react-counter-app-new",
    },
    {
        id: "todo-list",
        title: "Todo List",
        category: "React",
        approach:
            "Create a todo app with add, delete, and toggle functionality. Use useState for the todo list array and input field. Each todo should have an id, text, and completed status. Implement functions to add new todos, toggle completion status, and delete todos. Consider using Date.now() for unique IDs.",
        codesandboxUrl: "https://codesandbox.io/s/react-todo-list-new",
    },
    {
        id: "two-sum",
        title: "Two Sum",
        category: "Algorithm",
        approach:
            "Given an array of numbers and a target sum, find two numbers that add up to the target. Use a hash map to store each number and its index as you iterate. For each number, check if (target - current number) exists in the hash map. This gives you O(n) time complexity instead of O(n²) with nested loops.",
        codesandboxUrl: "https://codesandbox.io/s/two-sum-algorithm-new",
    },
    {
        id: "binary-search",
        title: "Binary Search",
        category: "Algorithm",
        approach:
            "Search for a target value in a sorted array efficiently. Start with left and right pointers at array bounds. Calculate middle index, compare middle value with target. If target is smaller, search left half; if larger, search right half. Repeat until found or pointers cross. Time complexity: O(log n).",
        codesandboxUrl: "https://codesandbox.io/s/binary-search-algorithm-new",
    },
    {
        id: "debounce",
        title: "Debounce Function",
        category: "JavaScript",
        approach:
            "Create a function that delays execution until after a specified time has passed since the last call. Use closures and setTimeout. Clear the previous timeout on each call and set a new one. This is useful for search inputs, resize events, and API calls to prevent excessive requests.",
        codesandboxUrl: "https://codesandbox.io/s/debounce-function-new",
    },
    {
        id: "custom-hook",
        title: "Custom useLocalStorage Hook",
        category: "React",
        approach:
            "Build a custom hook that syncs state with localStorage. Use useState and useEffect. On mount, read from localStorage and set initial state. When state changes, update localStorage. Handle JSON parsing/stringifying and error cases. Make it reusable for any localStorage key-value pair.",
        codesandboxUrl: "https://codesandbox.io/s/custom-localstorage-hook-new",
    },
];

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
            ? challenges
            : challenges.filter(
                  (challenge) => challenge.category === selectedFilter
              );

    const filterOptions = ["All", "JavaScript", "React", "Algorithm"];

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-100 text-green-800 border-green-200";
            case "Medium":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "Hard":
                return "bg-red-100 text-red-800 border-red-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

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
                            <div className="bg-gray-100 rounded-lg p-1 flex flex-wrap justify-center gap-1">
                                {filterOptions.map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() =>
                                            setSelectedFilter(filter)
                                        }
                                        className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
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
                                                <p className="text-gray-600 leading-relaxed mb-4">
                                                    {challenge.approach}
                                                </p>
                                                <a
                                                    href={
                                                        challenge.codesandboxUrl
                                                    }
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
                </div>
            </section>
        </>
    );
}
