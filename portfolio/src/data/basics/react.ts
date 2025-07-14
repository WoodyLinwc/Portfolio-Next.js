import type { BasicTopic } from "./types";

export const reactBasics: BasicTopic[] = [
    {
        id: "jsx-components",
        title: "JSX and Components",
        category: "React",
        description: "Understanding JSX syntax and creating React components.",
        content:
            "JSX is a syntax extension for JavaScript that looks similar to HTML.\n" +
            "\n" +
            "Functional Component:\n" +
            "function Welcome(props) {\n" +
            "    return <h1>Hello, {props.name}!</h1>;\n" +
            "}\n" +
            "\n" +
            "Arrow Function Component:\n" +
            "const Welcome = ({ name }) => {\n" +
            "    return <h1>Hello, {name}!</h1>;\n" +
            "};\n" +
            "\n" +
            "JSX Rules:\n" +
            "• Must return a single parent element\n" +
            "• Use className instead of class\n" +
            "• Use camelCase for event handlers\n" +
            "• Self-closing tags must end with />\n" +
            "• JavaScript expressions go in curly braces {}",
        exampleUrl: "https://codesandbox.io/p/devbox/react-jsx-components",
        tags: ["jsx", "components", "props", "functional-components"],
    },
    {
        id: "state-usestate",
        title: "State and useState Hook",
        category: "React",
        description: "Managing component state with the useState hook.",
        content:
            "State allows components to store and manage data that can change over time.\n" +
            "\n" +
            "Using useState:\n" +
            "import { useState } from 'react';\n" +
            "\n" +
            "function Counter() {\n" +
            "    const [count, setCount] = useState(0);\n" +
            "\n" +
            "    const increment = () => {\n" +
            "        setCount(count + 1);\n" +
            "    };\n" +
            "\n" +
            "    return (\n" +
            "        <div>\n" +
            "            <p>Count: {count}</p>\n" +
            "            <button onClick={increment}>+</button>\n" +
            "        </div>\n" +
            "    );\n" +
            "}\n" +
            "\n" +
            "Key points:\n" +
            "• State is local to each component instance\n" +
            "• Always use the setter function to update state\n" +
            "• State updates trigger re-renders",
        exampleUrl: "https://codesandbox.io/p/devbox/react-usestate",
        tags: ["state", "useState", "hooks", "re-render"],
    },
    {
        id: "props-passing",
        title: "Props and Data Passing",
        category: "React",
        description: "Passing data between components using props.",
        content:
            "Props (properties) are used to pass data from parent to child components.\n" +
            "\n" +
            "Parent Component:\n" +
            "function App() {\n" +
            "    const user = { name: 'John', age: 25 };\n" +
            "    return (\n" +
            "        <div>\n" +
            "            <UserCard user={user} isActive={true} />\n" +
            "        </div>\n" +
            "    );\n" +
            "}\n" +
            "\n" +
            "Child Component:\n" +
            "function UserCard({ user, isActive }) {\n" +
            "    return (\n" +
            "        <div className={isActive ? 'active' : 'inactive'}>\n" +
            "            <h2>{user.name}</h2>\n" +
            "            <p>Age: {user.age}</p>\n" +
            "        </div>\n" +
            "    );\n" +
            "}\n" +
            "\n" +
            "Props are:\n" +
            "• Read-only (immutable)\n" +
            "• Passed from parent to child\n" +
            "• Can be any JavaScript value",
        exampleUrl: "https://codesandbox.io/p/devbox/react-props",
        tags: ["props", "data-passing", "parent-child", "destructuring"],
    },
    {
        id: "event-handling",
        title: "Event Handling",
        category: "React",
        description:
            "Handling user interactions and events in React components.",
        content:
            "React uses synthetic events to handle user interactions consistently across browsers.\n" +
            "\n" +
            "Event Handlers:\n" +
            "function Button() {\n" +
            "    const handleClick = (event) => {\n" +
            "        event.preventDefault();\n" +
            "        console.log('Button clicked!');\n" +
            "    };\n" +
            "\n" +
            "    const handleSubmit = (event) => {\n" +
            "        event.preventDefault();\n" +
            "        const formData = new FormData(event.target);\n" +
            "        console.log(formData.get('username'));\n" +
            "    };\n" +
            "\n" +
            "    return (\n" +
            "        <form onSubmit={handleSubmit}>\n" +
            '            <input name="username" />\n' +
            '            <button type="submit" onClick={handleClick}>\n' +
            "                Submit\n" +
            "            </button>\n" +
            "        </form>\n" +
            "    );\n" +
            "}\n" +
            "\n" +
            "Common events: onClick, onChange, onSubmit, onFocus, onBlur",
        exampleUrl: "https://codesandbox.io/p/devbox/react-events",
        tags: ["events", "onClick", "onChange", "onSubmit", "synthetic-events"],
    },
    {
        id: "useeffect-lifecycle",
        title: "useEffect and Component Lifecycle",
        category: "React",
        description:
            "Managing side effects and component lifecycle with useEffect.",
        content:
            "useEffect hook lets you perform side effects in functional components.\n" +
            "\n" +
            "Basic useEffect:\n" +
            "import { useState, useEffect } from 'react';\n" +
            "\n" +
            "function Timer() {\n" +
            "    const [seconds, setSeconds] = useState(0);\n" +
            "\n" +
            "    useEffect(() => {\n" +
            "        const interval = setInterval(() => {\n" +
            "            setSeconds(s => s + 1);\n" +
            "        }, 1000);\n" +
            "\n" +
            "        // Cleanup function\n" +
            "        return () => clearInterval(interval);\n" +
            "    }, []); // Empty dependency array\n" +
            "\n" +
            "    return <div>Timer: {seconds}s</div>;\n" +
            "}\n" +
            "\n" +
            "Dependency array:\n" +
            "• [] - runs once (mount)\n" +
            "• [value] - runs when value changes\n" +
            "• undefined - runs on every render",
        exampleUrl: "https://codesandbox.io/p/devbox/react-useeffect",
        tags: [
            "useEffect",
            "lifecycle",
            "side-effects",
            "cleanup",
            "dependencies",
        ],
    },
    {
        id: "conditional-rendering",
        title: "Conditional Rendering and Lists",
        category: "React",
        description:
            "Rendering components conditionally and working with lists.",
        content:
            "React allows you to render different content based on conditions and display lists of data.\n" +
            "\n" +
            "Conditional Rendering:\n" +
            "function UserStatus({ isLoggedIn, user }) {\n" +
            "    if (isLoggedIn) {\n" +
            "        return <h1>Welcome back, {user.name}!</h1>;\n" +
            "    }\n" +
            "    return <h1>Please log in.</h1>;\n" +
            "}\n" +
            "\n" +
            "Ternary Operator:\n" +
            "const status = isLoggedIn ? <Dashboard /> : <Login />;\n" +
            "\n" +
            "Rendering Lists:\n" +
            "function TodoList({ todos }) {\n" +
            "    return (\n" +
            "        <ul>\n" +
            "            {todos.map(todo => (\n" +
            "                <li key={todo.id}>\n" +
            "                    {todo.text}\n" +
            "                </li>\n" +
            "            ))}\n" +
            "        </ul>\n" +
            "    );\n" +
            "}\n" +
            "\n" +
            "Important: Always provide a unique 'key' prop for list items.",
        exampleUrl: "https://codesandbox.io/p/devbox/react-conditional-lists",
        tags: ["conditional-rendering", "lists", "map", "key-prop", "ternary"],
    },
];
