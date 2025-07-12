// src/data/challenges/react.ts

import type { CodingChallenge } from "./types";

export const reactChallenges: CodingChallenge[] = [
    {
        id: "vending-machine",
        title: "Vending Machine",
        category: "React",
        approach:
            "1. Start with basic layout: title, selected item, money inserted, message in component return(<> ... </>) \n" +
            "2. State management for selected item, inserted money and message using useState() \n" +
            "3. Display all items and coins in the data set in JSX using map() \n" +
            "4. Event handler for selected item, inserted money, purchase, reset \n" +
            "5. Attach onClick to button with all event handlers \n\n" +
            "Notes: inside note.txt",

        codesandboxUrl: "https://codesandbox.io/p/sandbox/5ls8qx",
        tags: ["useState", "event-handlers", "components"],
    },
];
