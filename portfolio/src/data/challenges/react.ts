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
            "Note:",

        codesandboxUrl: "https://codesandbox.io/p/sandbox/5ls8qx",
        tags: ["useState", "event-handlers", "components"],
    },
    {
        id: "todo-list",
        title: "Todo List",
        category: "React",
        approach:
            "Create a todo app with add, delete, and toggle functionality. Use useState for the todo list array and input field. Each todo should have an id, text, and completed status. Implement functions to add new todos, toggle completion status, and delete todos. Consider using Date.now() for unique IDs.",
        codesandboxUrl: "https://codesandbox.io/s/react-todo-list-new",
        tags: ["useState", "arrays", "CRUD", "forms"],
    },
    {
        id: "custom-hook",
        title: "Custom useLocalStorage Hook",
        category: "React",
        approach:
            "Build a custom hook that syncs state with localStorage. Use useState and useEffect. On mount, read from localStorage and set initial state. When state changes, update localStorage. Handle JSON parsing/stringifying and error cases. Make it reusable for any localStorage key-value pair.",
        codesandboxUrl: "https://codesandbox.io/s/custom-localstorage-hook-new",
        tags: ["custom-hooks", "useEffect", "localStorage", "error-handling"],
    },
];
