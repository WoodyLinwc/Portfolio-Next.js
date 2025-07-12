// src/data/challenges/index.ts

import type { CodingChallenge } from "./types";
import { javascriptChallenges } from "./javascript";
import { reactChallenges } from "./react";
import { algorithmChallenges } from "./algorithm";

// Export individual challenge arrays
export { javascriptChallenges } from "./javascript";
export { reactChallenges } from "./react";
export { algorithmChallenges } from "./algorithm";
export type { CodingChallenge } from "./types";

// Combined challenges array
export const allChallenges: CodingChallenge[] = [
    ...javascriptChallenges,
    ...reactChallenges,
    ...algorithmChallenges,
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
        case "Algorithm":
            return algorithmChallenges;
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
