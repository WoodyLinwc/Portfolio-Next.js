import type { BasicTopic } from "./types";
import { javascriptBasics } from "./javascript";
import { reactBasics } from "./react";

export { javascriptBasics } from "./javascript";
export { reactBasics } from "./react";
export type { BasicTopic } from "./types";

export const allBasics: BasicTopic[] = [...javascriptBasics, ...reactBasics];

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
