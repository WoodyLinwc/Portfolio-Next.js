// src/data/challenges/types.ts

export interface CodingChallenge {
    id: string;
    title: string;
    category: "JavaScript" | "React" | "TypeScript";
    approach: string;
    codesandboxUrl: string;
    difficulty?: "Easy" | "Medium" | "Hard";
    tags?: string[];
}
