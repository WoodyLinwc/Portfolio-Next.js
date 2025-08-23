// src/data/html-css/css.ts

import type { HtmlCssTopic } from "../types";

import flexbox from "./content/flexbox.md";

export const cssTopics: HtmlCssTopic[] = [
    {
        id: "css-selectors",
        title: "CSS Selectors and Specificity",
        category: "CSS",
        description:
            "Understanding CSS selectors, specificity, and how styles are applied.",
        content: flexbox,
        exampleUrl: "https://codesandbox.io/p/devbox/css-selectors",
        tags: ["selectors", "specificity", "classes", "ids", "pseudo-classes"],
    },
];
