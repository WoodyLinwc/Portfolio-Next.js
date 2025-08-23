// src/data/html-css/html.ts

import type { HtmlCssTopic } from "../types";

import semanticHTML from "./content/semantic.md";

export const htmlTopics: HtmlCssTopic[] = [
    {
        id: "html-basics",
        title: "HTML Basics and Structure",
        category: "HTML",
        description:
            "Understanding HTML document structure, elements, and basic syntax.",
        content: semanticHTML,
        exampleUrl: "https://codesandbox.io/p/devbox/html-basics",
        tags: ["html", "structure", "doctype", "head", "body"],
    },
];
