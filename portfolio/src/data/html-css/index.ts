// src/data/html-css/index.ts

import type { HtmlCssTopic } from "./types";
import { htmlTopics } from "./html";
import { cssTopics } from "./css";
import { tailwindTopics } from "./tailwind";

// Export individual topic arrays
export { htmlTopics } from "./html";
export { cssTopics } from "./css";
export { tailwindTopics } from "./tailwind";
export type { HtmlCssTopic } from "./types";

// Combined topics array
export const allHtmlCssTopics: HtmlCssTopic[] = [
    ...htmlTopics, // HTML first
    ...cssTopics, // CSS second
    ...tailwindTopics, // Tailwind third
];

// Helper functions
export const getTopicsByCategory = (
    category: HtmlCssTopic["category"]
): HtmlCssTopic[] => {
    switch (category) {
        case "HTML":
            return htmlTopics;
        case "CSS":
            return cssTopics;
        case "Tailwind":
            return tailwindTopics;
        default:
            return [];
    }
};

export const getTopicsByDifficulty = (
    difficulty: "Beginner" | "Intermediate" | "Advanced"
): HtmlCssTopic[] => {
    return allHtmlCssTopics.filter((topic) => topic.difficulty === difficulty);
};

export const getTopicsByTag = (tag: string): HtmlCssTopic[] => {
    return allHtmlCssTopics.filter((topic) => topic.tags?.includes(tag));
};
