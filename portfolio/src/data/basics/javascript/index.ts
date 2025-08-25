import type { BasicTopic } from "../types";

// Import markdown files as raw text
import test from "./content/test.md";
import variablesDataTypesContent from "./content/variables-datatypes.md";
import functionsContent from "./content/functions.md";
import jsOverview from "./content/js-overview.md";
import es6 from "./content/es6.md";
import executionContext from "./content/execution-context.md";
import variableSystem from "./content/variable-system.md";
import closure from "./content/closure.md";
import objectContentSystem from "./content/object-content-system.md";
import eventloop from "./content/eventloop.md";
import asynchronous from "./content/asynchronous.md";
import fetchData from "./content/async-await.md";
import dom from "./content/dom.md";
import eventFlow from "./content/event-flow.md";
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
        description: "Execution Context, Call Stack",
        content: executionContext,
    },
    {
        id: "variable-system",
        title: "The Variable System",
        category: "JavaScript",
        description: "Lexical Scope, Lexical Environment, Scope Chain",
        content: variableSystem,
    },
    {
        id: "closure",
        title: "Closure",
        category: "JavaScript",
        description: "Closure, IIFE, Currying",
        content: closure,
    },

    {
        id: "object-content-system",
        title: "The Object Content System",
        category: "JavaScript",
        description: "'this', 'this' binding, call(), apply(), bind() ",
        content: objectContentSystem,
    },

    {
        id: "eventloop",
        title: "Event Loop",
        category: "JavaScript",
        description:
            "Event Loop, Asynchronous, Call Stack, Macrotask Queue, Microtask Queue",
        content: eventloop,
    },

    {
        id: "asynchronous",
        title: "Asynchronous Code: Callback - Promise - async/await",
        category: "JavaScript",
        description: "Asynchronous, ",
        content: asynchronous,
    },

    {
        id: "fetch-data",
        title: "Fetch Data: Promise vs async/await",
        category: "JavaScript",
        description: "Promise, async/await, Fetch Data",
        content: fetchData,
    },

    {
        id: "dom",
        title: "Document Object Model (DOM)",
        category: "JavaScript",
        description: "DOM, tree, Event Listener & Handler",
        content: dom,
    },

    {
        id: "event-flow",
        title: "Event Flow",
        category: "JavaScript",
        description: "Capture & Bubble Phase, Event Delegation",
        content: eventFlow,
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
