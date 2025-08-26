"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export interface AccordionItem {
    id: string;
    title: string;
    description?: string;
    category: string;
    difficulty?: string;
    content: string; // This is now markdown content
    exampleUrl?: string;
    tags?: string[];
}

interface AccordionProps {
    items: AccordionItem[];
    contentLabel?: string;
    buttonLabel?: string;
}

export default function Accordion({
    items,
    buttonLabel = "Try Example",
}: AccordionProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggleItem = async (itemId: string) => {
        // If clicking the same item, just close it
        if (expandedItem === itemId) {
            setExpandedItem(null);
            return;
        }

        // If another item is open, close it first with animation
        if (expandedItem && expandedItem !== itemId) {
            setIsTransitioning(true);
            setExpandedItem(null);

            // Wait for closing animation to complete
            await new Promise((resolve) => setTimeout(resolve, 300));
        }

        // Open the new item
        setExpandedItem(itemId);
        setIsTransitioning(false);

        // Scroll to the clicked accordion header smoothly
        setTimeout(() => {
            const element = document.getElementById(`accordion-${itemId}`);
            if (element) {
                const headerHeight = 80; // Approximate header height
                const elementTop =
                    element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementTop - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, 50); // Small delay to ensure DOM is updated
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
            case "others":
                return "bg-green-100 text-green-800";
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
                    id={`accordion-${item.id}`}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                >
                    {/* Item Header - Clickable */}
                    <button
                        onClick={() => toggleItem(item.id)}
                        disabled={isTransitioning}
                        className={`w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50 ${
                            isTransitioning ? "cursor-wait" : "cursor-pointer"
                        }`}
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
                                className={`fa transition-transform duration-300 ${
                                    expandedItem === item.id
                                        ? "fa-chevron-up"
                                        : "fa-chevron-down"
                                } ${isTransitioning ? "opacity-50" : ""}`}
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
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            expandedItem === item.id
                                ? "opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                        style={{
                            maxHeight:
                                expandedItem === item.id ? "2000px" : "0",
                            transition:
                                "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
                        }}
                    >
                        <div className="px-6 pb-6 border-t border-gray-100">
                            <div className="pt-4">
                                {/* Replace the <pre> tag with ReactMarkdown */}
                                <div className="prose prose-gray max-w-none mb-4">
                                    <ReactMarkdown
                                        components={{
                                            // Custom styling for code blocks
                                            code: ({ children, ...props }) => {
                                                return (
                                                    <code
                                                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono"
                                                        {...props}
                                                    >
                                                        {children}
                                                    </code>
                                                );
                                            },
                                            // Custom styling for code blocks
                                            pre: ({ children }) => (
                                                <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
                                                    {children}
                                                </pre>
                                            ),
                                            // Custom styling for headings
                                            h1: ({ children }) => (
                                                <h1 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                                                    {children}
                                                </h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
                                                    {children}
                                                </h2>
                                            ),
                                            // Custom styling for paragraphs
                                            p: ({ children }) => (
                                                <p className="text-gray-700 mb-2 leading-relaxed">
                                                    {children}
                                                </p>
                                            ),
                                            // Custom styling for lists
                                            ul: ({ children }) => (
                                                <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
                                                    {children}
                                                </ul>
                                            ),
                                            li: ({ children }) => (
                                                <li className="ml-2">
                                                    {children}
                                                </li>
                                            ),
                                        }}
                                    >
                                        {item.content}
                                    </ReactMarkdown>
                                </div>

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
