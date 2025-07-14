import type { BasicTopic } from "./types";
import { javascriptBasics } from "./javascript";
import { reactBasics } from "./react";

// Export individual basics arrays
export { javascriptBasics } from "./javascript";
export { reactBasics } from "./react";
export type { BasicTopic } from "./types";

// Combined basics array
export const allBasics: BasicTopic[] = [
    ...javascriptBasics, // JavaScript first
    ...reactBasics, // React second
];

// Helper functions
export const getBasicsByCategory = (
    category: BasicTopic["category"]
): BasicTopic[] => {
    switch (category) {
        case "JavaScript":
            return javascriptBasics;
        case "React":
            return reactBasics;
        default:
            return [];
    }
};

export const getBasicsByDifficulty = (
    difficulty: "Beginner" | "Intermediate" | "Advanced"
): BasicTopic[] => {
    return allBasics.filter((topic) => topic.difficulty === difficulty);
};

export const getBasicsByTag = (tag: string): BasicTopic[] => {
    return allBasics.filter((topic) => topic.tags?.includes(tag));
};
