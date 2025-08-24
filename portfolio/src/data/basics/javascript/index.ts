import type { BasicTopic } from "../types";

// Import markdown files as raw text
import variablesDataTypesContent from "./content/variables-datatypes.md";
import functionsContent from "./content/functions.md";
import jsOverview from "./content/js-overview.md";
import es6 from "./content/es6.md";

export const javascriptBasics: BasicTopic[] = [
    {
        id: "js-overview",
        title: "JavaScript Overview",
        category: "JavaScript",
        description:
            "JIT, dynamic typing, prototype-based, single-threaded, first-class, ES6",
        content: jsOverview,
    },
    {
        id: "es6 ",
        title: "ES6+",
        category: "JavaScript",
        description:
            "Class, Spread Operator, Destructuring, Arrow Function, Template Literal, Symbols, Iterator, Generator",
        content: es6,
    },
    // {
    //     id: "",
    //     title: "",
    //     category: "JavaScript",
    //     description:
    //         "",
    //     content: ,
    // },
    {
        id: "variables-datatypes",
        title: "Variables and Data Types",
        category: "JavaScript",
        description:
            "Learn about JavaScript variables, data types, and how to work with them.",
        content: variablesDataTypesContent,
    },
    {
        id: "functions",
        title: "Functions",
        category: "JavaScript",
        description:
            "Understanding JavaScript functions and their different forms.",
        content: functionsContent,
    },

    // {
    //     id: "",
    //     title: "",
    //     category: "JavaScript",
    //     description:
    //         "",
    //     content: ,
    //     exampleUrl: "",
    //     tags: [],
    //     difficulty: "",
    // },
];
