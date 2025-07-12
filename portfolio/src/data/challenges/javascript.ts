// src/data/challenges/javascript.ts

import type { CodingChallenge } from "./types";

export const javascriptChallenges: CodingChallenge[] = [
    {
        id: "fizzbuzz",
        title: "FizzBuzz",
        category: "JavaScript",
        approach:
            "Create a function that prints numbers 1-100, but replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'. Use modulo operator (%) to check divisibility. Start with a simple loop, then add conditional statements to check each case.",
        codesandboxUrl: "https://codesandbox.io/s/fizzbuzz-challenge-new",
        tags: ["loops", "conditionals", "modulo"],
    },
    {
        id: "palindrome",
        title: "Palindrome Checker",
        category: "JavaScript",
        approach:
            "Check if a string reads the same forwards and backwards. First, clean the string by removing spaces and converting to lowercase. Then compare the string with its reverse. You can use array methods like split(), reverse(), and join(), or use two pointers from start and end.",
        codesandboxUrl: "https://codesandbox.io/s/palindrome-checker-new",
        tags: ["strings", "arrays", "two-pointers"],
    },
    {
        id: "debounce",
        title: "Debounce Function",
        category: "JavaScript",
        approach:
            "Create a function that delays execution until after a specified time has passed since the last call. Use closures and setTimeout. Clear the previous timeout on each call and set a new one. This is useful for search inputs, resize events, and API calls to prevent excessive requests.",
        codesandboxUrl: "https://codesandbox.io/s/debounce-function-new",
        tags: ["closures", "setTimeout", "performance"],
    },
];
