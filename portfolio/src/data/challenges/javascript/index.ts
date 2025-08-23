// src/data/challenges/javascript.ts

import type { CodingChallenge } from "../types";

import flat from "./content/flat.md";
import twoSum from "./content/two-sum.md";
import validPalindrome from "./content/valid-palindrome.md";

export const javascriptChallenges: CodingChallenge[] = [
    // {
    //     id: "js",
    //     title: "",
    //     category: "JavaScript",
    //     approach:
    //         "\n"+
    //         "\n"+
    //         "\n"+
    //         "\n"+
    //         "\n"+
    //         "\n"+
    //         "\n",
    //     codesandboxUrl: "",
    //     tags: [],
    // },

    {
        id: "two-sum",
        title: "Two Sum",
        category: "JavaScript",
        approach: twoSum,
        codesandboxUrl: "https://codesandbox.io/p/devbox/8d6mv8",
        tags: ["leetcode", "array", "hashmap"],
    },
    {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        category: "JavaScript",
        approach: validPalindrome,
        codesandboxUrl: "https://codesandbox.io/p/devbox/gwrnrv",
        tags: [
            "leetcode",
            "two pointer",
            "string to array",
            "reverse()",
            "split()",
            "join()",
        ],
    },
    {
        id: "flat",
        title: "Prototype function myFlat",
        category: "JavaScript",
        approach: flat,
        codesandboxUrl:
            "https://codesandbox.io/p/devbox/prototype-method-k9tllq",
        tags: ["recursive", "iterative", "prototype function"],
    },
];
