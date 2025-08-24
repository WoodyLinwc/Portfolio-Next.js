import type { BasicTopic } from "../types";

// Import markdown files as raw text
import test from "./content/test.md";
import variablesDataTypesContent from "./content/variables-datatypes.md";
import functionsContent from "./content/functions.md";
import jsOverview from "./content/js-overview.md";
import es6 from "./content/es6.md";
import executionContext from "./content/execution-context.md";
import closure from "./content/scope-chain-closure.md";
import hoisting from "./content/hoisting.md";
import firstClass from "./content/first-class.md";

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
            "Class, Spread Operator, Destructuring, Arrow Function, Template Literal, Symbols, Iterator, Generator, 2015+",
        content: es6,
    },
    {
        id: "execution-context",
        title: "Execution Context & Call Stack",
        category: "JavaScript",
        description:
            "Execution Context, Call Stack, Variable Environment, Lexical Environment, this binding",
        content: executionContext,
    },
    {
        id: "closure",
        title: "Scope Chain & Closure",
        category: "JavaScript",
        description: "Scope Chain, Lexical Scope, Closure, IIFE, Currying",
        content: closure,
    },
    {
        id: "hoisting",
        title: "Hoisting: var, let, const",
        category: "JavaScript",
        description: "var, let, const, ",
        content: hoisting,
    },
    {
        id: "firstClass",
        title: "First-class and Higher-order Function",
        category: "JavaScript",
        description: "",
        content: firstClass,
    },

    {
        id: "",
        title: "",
        category: "JavaScript",
        description: "",
        content: test,
    },

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
