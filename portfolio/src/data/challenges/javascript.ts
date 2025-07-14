// src/data/challenges/javascript.ts

import type { CodingChallenge } from "./types";

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
        approach:
            "create a two sum function that accepts array and target\n" +
            "   create a map\n" +
            "   loop the array\n" +
            "       create compliment, target - array[i]\n" +
            "       if map has compliment\n" +
            "           return array of map get that compliment and i\n" +
            "       map set that array[i] and i\n" +
            "   return empty array",
        codesandboxUrl: "https://codesandbox.io/p/devbox/8d6mv8",
        tags: ["leetcode", "array", "hashmap"],
    },
    {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        category: "JavaScript",
        approach:
            "create a valid palindrome function that accepts two arrays\n" +
            "   set left to 0\n" +
            "   set right to s2 length - 1\n" +
            "   while left smaller than s1.length AND right bigger than 0\n" +
            "       if s1[left] is not the same as s2[right]\n" +
            "           return false\n" +
            "           left++, right--\n" +
            "   return s1 length ==== s2 length\n",
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
