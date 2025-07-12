// src/data/challenges/react.ts

import type { CodingChallenge } from "./types";

export const reactChallenges: CodingChallenge[] = [
    {
        id: "counter-app",
        title: "Counter App",
        category: "React",
        approach:
            "Build a simple counter with increment/decrement buttons. Use useState hook to manage the counter state. Create three buttons: increment (+1), decrement (-1), and reset (back to 0). Style the counter display and add some basic validation to prevent negative numbers if needed.",
        codesandboxUrl: "https://codesandbox.io/s/react-counter-app-new",
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
