import type { BasicTopic } from "../types";

// Import markdown files as raw text
import test from "./content/test.md";
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
import jsPrototype from "./content/prototype.md";
import firstClass from "./content/first-class.md";
import http from "./content/http.md";
import functionDatatype from "./content/function-datatype.md";
import hoisting from "./content/hoisting.md";
import numberDate from "./content/number-date.md";
import string from "./content/string.md";
import array from "./content/array.md";
import object from "./content/object.md";

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
        description: "Asynchronous, Promise, Callback, async/await",
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
        title: "Event Flow: Event Propagation",
        category: "JavaScript",
        description: "Capture & Bubble Phase, Event Delegation",
        content: eventFlow,
    },

    {
        id: "prototype",
        title: "Prototype",
        category: "JavaScript",
        description: "Inheritance, Prototype Chain, Class, Constructor",
        content: jsPrototype,
    },

    {
        id: "firstClass",
        title: "First-class and Higher-order Function",
        category: "JavaScript",
        description: "",
        content: firstClass,
    },

    {
        id: "http",
        title: "HTTP (HyperText Transfer Protocol)",
        category: "JavaScript",
        description: "HTTP, GET, POST, PUT, DELETE, Fetch API",
        content: http,
    },

    {
        id: "function-datatype",
        title: "Function & Datatype",
        category: "JavaScript",
        description:
            "Primitive & Reference Datatypes, Falsy Value, Type Coercion, Function Declaration, Expression, Arrow Function",
        content: functionDatatype,
    },

    {
        id: "hoisting",
        title: "Hoisting: var, let, const",
        category: "JavaScript",
        description: "var, let, const, Strict Mode",
        content: hoisting,
    },

    {
        id: "number-date",
        title: "Number & Date Operation",
        category: "JavaScript",
        description: "Number, Math, Random, Date",
        content: numberDate,
    },

    {
        id: "string",
        title: "String Operation",
        category: "JavaScript",
        description:
            "indexOf, startsWith, includes, trim, replace, split, join, slice, charAt, String() vs toString()",
        content: string,
    },

    {
        id: "array",
        title: "Array Operation",
        category: "JavaScript",
        description:
            "Array.of, Array.from, indexOf, includes, find, some, map, flatMap, sort, concat, slice, shallow copying ",
        content: array,
    },

    {
        id: "object",
        title: "Object Operation",
        category: "JavaScript",
        description:
            "Object.create, Object.getOwnPropertyNames, freeze, seal, Object.entries, for...of, for...in, Object.fromEntries",
        content: object,
    },

    {
        id: "json",
        title: "JSON Operation",
        category: "JavaScript",
        description: "",
        content: test,
    },

    {
        id: "set-map",
        title: "Set & Map Operation",
        category: "JavaScript",
        description: "",
        content: test,
    },

    {
        id: "regex",
        title: "Regular Expression",
        category: "JavaScript",
        description: "",
        content: test,
    },

    {
        id: "module",
        title: "Modules",
        category: "JavaScript",
        description: "CommonJS, Node.js, ES Module",
        content: test,
    },

    {
        id: "typescript",
        title: "TypeScript",
        category: "JavaScript",
        description: "",
        content: test,
    },

    {
        id: "react-native",
        title: "React Native",
        category: "JavaScript",
        description: "",
        content: test,
    },

    {
        id: "performance-optimization",
        title: "Performance & Optimization",
        category: "JavaScript",
        description: "",
        content: test,
    },

    {
        id: "testing",
        title: "Testing & Debugging",
        category: "JavaScript",
        description: "Jest",
        content: test,
    },

    {
        id: "design-pattern",
        title: "Design Pattern",
        category: "JavaScript",
        description: "",
        content: test,
    },

    {
        id: "",
        title: "",
        category: "JavaScript",
        description: "",
        content: test,
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
