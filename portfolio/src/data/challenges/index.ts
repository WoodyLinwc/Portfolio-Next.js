// src/data/challenges/index.ts

import type { CodingChallenge } from "./types";
import { javascriptChallenges } from "./javascript";
import { reactChallenges } from "./react";
import { typescriptChallenges } from "./typescript";

// Export individual challenge arrays
export { javascriptChallenges } from "./javascript";
export { reactChallenges } from "./react";
export { typescriptChallenges } from "./typescript";
export type { CodingChallenge } from "./types";

// Combined challenges array
export const allChallenges: CodingChallenge[] = [
    ...reactChallenges, // React first
    ...javascriptChallenges, // JavaScript second
    ...typescriptChallenges, // TypeScript third
];

// Helper functions
export const getChallengesByCategory = (
    category: CodingChallenge["category"]
): CodingChallenge[] => {
    switch (category) {
        case "JavaScript":
            return javascriptChallenges;
        case "React":
            return reactChallenges;
        case "TypeScript":
            return typescriptChallenges;
        default:
            return [];
    }
};

export const getChallengesByDifficulty = (
    difficulty: "Easy" | "Medium" | "Hard"
): CodingChallenge[] => {
    return allChallenges.filter(
        (challenge) => challenge.difficulty === difficulty
    );
};

export const getChallengesByTag = (tag: string): CodingChallenge[] => {
    return allChallenges.filter((challenge) => challenge.tags?.includes(tag));
};
