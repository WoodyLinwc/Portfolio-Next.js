// src/data/challenges/javascript.ts

import type { CodingChallenge } from "./types";

export const javascriptChallenges: CodingChallenge[] = [
    {
        id: "flat",
        title: "Prototype function myFlat",
        category: "JavaScript",
        approach:
            "create an array prototype function with default depth 1\n" +
            "   base case if depth is smaller or equal to 1, return [...this]\n" +
            "   create a empty result array\n" +
            "   loop based on this.length\n" +
            "       if this[i] is array\n" +
            "           result push (...this[i].myFlat(depth - 1))\n" +
            "       else\n" +
            "           result push (this[i])\n" +
            "   return result\n",
        codesandboxUrl:
            "https://codesandbox.io/p/devbox/prototype-method-k9tllq",
        tags: ["recursive", "iterative", "prototype function"],
    },
];
