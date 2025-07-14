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
    {
        id: "functions",
        title: "Functions",
        category: "JavaScript",
        description:
            "Understanding function declarations, expressions, and arrow functions.",
        content:
            "JavaScript functions can be created in multiple ways:\n" +
            "\n" +
            "Function Declaration:\n" +
            "function greet(name) {\n" +
            "    return `Hello, ${name}!`;\n" +
            "}\n" +
            "\n" +
            "Function Expression:\n" +
            "const greet = function(name) {\n" +
            "    return `Hello, ${name}!`;\n" +
            "};\n" +
            "\n" +
            "Arrow Function:\n" +
            "const greet = (name) => `Hello, ${name}!`;\n" +
            "\n" +
            "Key differences: hoisting, 'this' binding, and syntax.",
        exampleUrl: "https://codesandbox.io/p/devbox/js-functions",
        tags: ["functions", "arrow-functions", "hoisting", "this"],
    },
    {
        id: "arrays-methods",
        title: "Arrays and Methods",
        category: "JavaScript",
        description: "Working with arrays and their built-in methods.",
        content:
            "Arrays are ordered collections of items in JavaScript.\n" +
            "\n" +
            "Common Array Methods:\n" +
            "• push(), pop() - add/remove from end\n" +
            "• shift(), unshift() - add/remove from beginning\n" +
            "• map() - transform each element\n" +
            "• filter() - select elements based on condition\n" +
            "• reduce() - accumulate values\n" +
            "• forEach() - iterate over elements\n" +
            "• find(), findIndex() - search for elements\n" +
            "\n" +
            "Example:\n" +
            "const numbers = [1, 2, 3, 4, 5];\n" +
            "const doubled = numbers.map(n => n * 2);\n" +
            "const evens = numbers.filter(n => n % 2 === 0);",
        exampleUrl: "https://codesandbox.io/p/devbox/js-arrays-methods",
        tags: ["arrays", "map", "filter", "reduce", "forEach"],
    },
    {
        id: "objects",
        title: "Objects and Properties",
        category: "JavaScript",
        description:
            "Understanding JavaScript objects, properties, and methods.",
        content:
            "Objects are collections of key-value pairs in JavaScript.\n" +
            "\n" +
            "Creating Objects:\n" +
            "const person = {\n" +
            "    name: 'John',\n" +
            "    age: 30,\n" +
            "    greet() {\n" +
            "        return `Hello, I'm ${this.name}`;\n" +
            "    }\n" +
            "};\n" +
            "\n" +
            "Accessing Properties:\n" +
            "• Dot notation: person.name\n" +
            "• Bracket notation: person['name']\n" +
            "\n" +
            "Object Methods:\n" +
            "• Object.keys() - get property names\n" +
            "• Object.values() - get property values\n" +
            "• Object.entries() - get key-value pairs\n" +
            "• Object.assign() - copy properties",
        exampleUrl: "https://codesandbox.io/p/devbox/js-objects",
        tags: ["objects", "properties", "methods", "this"],
    },
    {
        id: "async-javascript",
        title: "Asynchronous JavaScript",
        category: "JavaScript",
        description:
            "Understanding promises, async/await, and handling asynchronous operations.",
        content:
            "JavaScript handles asynchronous operations using callbacks, promises, and async/await.\n" +
            "\n" +
            "Promises:\n" +
            "const fetchData = () => {\n" +
            "    return new Promise((resolve, reject) => {\n" +
            "        setTimeout(() => resolve('Data loaded'), 1000);\n" +
            "    });\n" +
            "};\n" +
            "\n" +
            "Async/Await:\n" +
            "const loadData = async () => {\n" +
            "    try {\n" +
            "        const data = await fetchData();\n" +
            "        console.log(data);\n" +
            "    } catch (error) {\n" +
            "        console.error(error);\n" +
            "    }\n" +
            "};\n" +
            "\n" +
            "Key concepts: Promise states, error handling, and async flow control.",
        exampleUrl: "https://codesandbox.io/p/devbox/js-async",
        tags: ["promises", "async", "await", "asynchronous"],
    },
    {
        id: "es6-features",
        title: "ES6+ Features",
        category: "JavaScript",
        description:
            "Modern JavaScript features including destructuring, spread operator, and more.",
        content:
            "ES6+ introduced many powerful features to JavaScript.\n" +
            "\n" +
            "Destructuring:\n" +
            "const { name, age } = person;\n" +
            "const [first, second] = array;\n" +
            "\n" +
            "Spread Operator:\n" +
            "const newArray = [...oldArray, newItem];\n" +
            "const newObject = { ...oldObject, newProp: value };\n" +
            "\n" +
            "Template Literals:\n" +
            "const message = `Hello, ${name}!`;\n" +
            "\n" +
            "Default Parameters:\n" +
            "function greet(name = 'World') {\n" +
            "    return `Hello, ${name}!`;\n" +
            "}\n" +
            "\n" +
            "Other features: classes, modules, let/const, arrow functions.",
        exampleUrl: "https://codesandbox.io/p/devbox/js-es6-features",
        tags: [
            "es6",
            "destructuring",
            "spread",
            "template-literals",
            "classes",
        ],
    },
];
