// src/data/html-css/css.ts

import type { HtmlCssTopic } from "./types";

export const cssTopics: HtmlCssTopic[] = [
    {
        id: "css-selectors",
        title: "CSS Selectors and Specificity",
        category: "CSS",
        description:
            "Understanding CSS selectors, specificity, and how styles are applied.",
        content:
            "CSS selectors target HTML elements to apply styles.\n" +
            "\n" +
            "Basic Selectors:\n" +
            "/* Element selector */\n" +
            "p {\n" +
            "    color: blue;\n" +
            "}\n" +
            "\n" +
            "/* Class selector */\n" +
            ".highlight {\n" +
            "    background-color: yellow;\n" +
            "}\n" +
            "\n" +
            "/* ID selector */\n" +
            "#header {\n" +
            "    font-size: 2rem;\n" +
            "}\n" +
            "\n" +
            "/* Attribute selector */\n" +
            'input[type="email"] {\n' +
            "    border: 2px solid green;\n" +
            "}\n" +
            "\n" +
            "/* Pseudo-classes */\n" +
            "a:hover {\n" +
            "    color: red;\n" +
            "}\n" +
            "\n" +
            "/* Descendant selector */\n" +
            ".container p {\n" +
            "    margin: 1rem;\n" +
            "}\n" +
            "\n" +
            "Specificity Order (highest to lowest):\n" +
            "1. Inline styles\n" +
            "2. IDs\n" +
            "3. Classes, attributes, pseudo-classes\n" +
            "4. Elements",
        exampleUrl: "https://codesandbox.io/p/devbox/css-selectors",
        tags: ["selectors", "specificity", "classes", "ids", "pseudo-classes"],
    },
];
