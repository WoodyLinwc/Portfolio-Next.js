import type { BasicTopic } from "../types";

// Import markdown files as raw text
import variablesDataTypesContent from "./content/variables-datatypes.md";
import functionsContent from "./content/functions.md";

export const javascriptBasics: BasicTopic[] = [
    {
        id: "variables-datatypes",
        title: "Variables and Data Types",
        category: "JavaScript",
        description:
            "Learn about JavaScript variables, data types, and how to work with them.",
        content: variablesDataTypesContent,
        exampleUrl: "https://codesandbox.io/p/devbox/js-variables-datatypes",
        tags: ["variables", "data-types", "var", "let", "const"],
        difficulty: "Beginner",
    },
    {
        id: "functions",
        title: "Functions",
        category: "JavaScript",
        description:
            "Understanding JavaScript functions and their different forms.",
        content: functionsContent,
        exampleUrl: "https://codesandbox.io/p/devbox/js-functions",
        tags: ["functions", "arrow-functions", "function-expression"],
        difficulty: "Beginner",
    },
];
