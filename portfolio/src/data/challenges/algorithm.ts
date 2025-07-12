// src/data/challenges/algorithm.ts

import type { CodingChallenge } from "./types";

export const algorithmChallenges: CodingChallenge[] = [
    {
        id: "two-sum",
        title: "Two Sum",
        category: "Algorithm",
        approach:
            "Given an array of numbers and a target sum, find two numbers that add up to the target. Use a hash map to store each number and its index as you iterate. For each number, check if (target - current number) exists in the hash map. This gives you O(n) time complexity instead of O(n²) with nested loops.",
        codesandboxUrl: "https://codesandbox.io/s/two-sum-algorithm-new",
        tags: ["hash-map", "arrays", "time-complexity"],
    },
    {
        id: "binary-search",
        title: "Binary Search",
        category: "Algorithm",
        approach:
            "Search for a target value in a sorted array efficiently. Start with left and right pointers at array bounds. Calculate middle index, compare middle value with target. If target is smaller, search left half; if larger, search right half. Repeat until found or pointers cross. Time complexity: O(log n).",
        codesandboxUrl: "https://codesandbox.io/s/binary-search-algorithm-new",
        tags: ["binary-search", "divide-conquer", "sorted-arrays"],
    },
];
