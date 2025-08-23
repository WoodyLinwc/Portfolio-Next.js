// src/data/challenges/react.ts

import type { CodingChallenge } from "../types";
import vendingMachine from "./content/vending-machine.md";

export const reactChallenges: CodingChallenge[] = [
    {
        id: "vending-machine",
        title: "Vending Machine",
        category: "React",
        approach: vendingMachine,
        codesandboxUrl: "https://codesandbox.io/p/sandbox/5ls8qx",
        tags: ["useState", "event-handlers", "components"],
    },
    // {
    //     id: "react",
    //     title: "",
    //     category: "React",
    //     approach: "",
    //     codesandboxUrl: "",
    //     tags: [],
    // },
];
