// File: portfolio/src/components/learning/Accordion.tsx

"use client";

import { useState } from "react";

export interface AccordionItem {
    id: string;
    title: string;
    description?: string; // Optional description shown in header
    category: string;
    difficulty?: string;
    content: string;
    exampleUrl?: string;
    tags?: string[];
}

interface AccordionProps {
    items: AccordionItem[];
    contentLabel?: string; // "Content:", "Approach:", etc.
    buttonLabel?: string; // "Try Example", "Try in CodeSandbox", etc.
}

export default function Accordion({
    items,
    contentLabel = "Content:",
    buttonLabel = "Try Example",
}: AccordionProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleItem = (itemId: string) => {
        setExpandedItem(expandedItem === itemId ? null : itemId);
    };

    const getCategoryColor = (category: string) => {
        switch (category.toLowerCase()) {
            case "javascript":
                return "bg-yellow-100 text-yellow-800";
            case "react":
                return "bg-blue-100 text-blue-800";
            case "typescript":
                return "bg-purple-100 text-purple-800";
            case "html":
                return "bg-orange-100 text-orange-800";
            case "css":
                return "bg-blue-100 text-blue-800";
            case "tailwind":
                return "bg-cyan-100 text-cyan-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getDifficultyColor = (difficulty?: string) => {
        switch (difficulty?.toLowerCase()) {
            case "easy":
            case "beginner":
                return "bg-green-100 text-green-800";
            case "medium":
            case "intermediate":
                return "bg-yellow-100 text-yellow-800";
            case "hard":
            case "advanced":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                >
                    {/* Item Header - Clickable */}
                    <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                                <div className="flex space-x-2">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                                            item.category
                                        )}`}
                                    >
                                        {item.category}
                                    </span>
                                    {item.difficulty && (
                                        <span
                                            className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                                                item.difficulty
                                            )}`}
                                        >
                                            {item.difficulty}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <i
                                className={`fa transition-transform duration-200 ${
                                    expandedItem === item.id
                                        ? "fa-chevron-up"
                                        : "fa-chevron-down"
                                }`}
                            ></i>
                        </div>
                        {item.description && (
                            <p className="text-gray-600 text-sm mt-2">
                                {item.description}
                            </p>
                        )}
                    </button>

                    {/* Item Content - Expandable */}
                    <div
                        className={`transition-all duration-300 ease-in-out ${
                            expandedItem === item.id
                                ? "max-h-screen opacity-100"
                                : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                    >
                        <div className="px-6 pb-6 border-t border-gray-100">
                            <div className="pt-4">
                                <h4 className="font-semibold text-gray-800 mb-3">
                                    {contentLabel}
                                </h4>
                                <pre className="text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded overflow-x-auto">
                                    {item.content}
                                </pre>

                                {/* Example Link */}
                                {item.exampleUrl && (
                                    <a
                                        href={item.exampleUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                                    >
                                        <i className="fa fa-external-link-alt mr-2"></i>
                                        {buttonLabel}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
