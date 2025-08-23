import type { BasicTopic } from "./types";

export const javascriptBasics: BasicTopic[] = [
    {
        id: "variables-datatypes",
        title: "Variables and Data Types",
        category: "JavaScript",
        description:
            "Learn about JavaScript variables, data types, and how to work with them.",
        content:
            "Variables in JavaScript can be declared using var, let, or const.\n" +
            "\n" +
            "Data Types:\n" +
            "• Primitive types: string, number, boolean, null, undefined, symbol, bigint\n" +
            "• Reference types: object, array, function\n" +
            "\n" +
            "Examples:\n" +
            "const name = 'John'; // string\n" +
            "let age = 25; // number\n" +
            "const isActive = true; // boolean\n" +
            "const user = { name: 'John', age: 25 }; // object\n" +
            "const numbers = [1, 2, 3]; // array",
        exampleUrl: "https://codesandbox.io/p/devbox/js-variables-datatypes",
        tags: ["variables", "data-types", "var", "let", "const"],
    },
];
