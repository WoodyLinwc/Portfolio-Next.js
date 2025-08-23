// src/data/challenges/typescript.ts

import type { CodingChallenge } from "../types";

import test from "./content/test.md";

export const typescriptChallenges: CodingChallenge[] = [
    {
        id: "typed-calculator",
        title: "Type-Safe Calculator",
        category: "TypeScript",
        approach: test,
        codesandboxUrl: "https://codesandbox.io/s/typescript-calculator-new",
        tags: ["interfaces", "union-types", "generics", "type-safety"],
    },
];
