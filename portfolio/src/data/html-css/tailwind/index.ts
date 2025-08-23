// src/data/html-css/tailwind.ts

import type { HtmlCssTopic } from "../types";

import test from "./content/test.md";

export const tailwindTopics: HtmlCssTopic[] = [
    {
        id: "tailwind-basics",
        title: "Tailwind CSS Basics",
        category: "Tailwind",
        description: "Getting started with Tailwind CSS utility classes.",
        content: test,
        exampleUrl: "https://codesandbox.io/p/devbox/tailwind-basics",
        tags: ["tailwind", "utility-first", "classes", "responsive", "hover"],
    },
];
