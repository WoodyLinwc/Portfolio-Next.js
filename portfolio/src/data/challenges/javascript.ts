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
];
