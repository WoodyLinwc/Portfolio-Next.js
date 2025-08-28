import type { BasicTopic } from "../types";

import test from "./content/test.md";
import coreReact from "./content/core-react.md";
import jsx from "./content/jsx.md";

export const reactBasics: BasicTopic[] = [
    {
        id: "core-react",
        title: "React Overview",
        category: "React",
        description:
            "Declarative UI, Component-based Architecture, Virtual DOM, Unidirectional Data Flow, React Fiber, Before React",
        content: coreReact,
    },

    {
        id: "jsx",
        title: "JSX (JavaScript XML)",
        category: "React",
        description:
            "Syntax Extension, HTML-like, Transpilation, JSX Rules, Conditional Rendering Patterns",
        content: jsx,
    },

    {
        id: "",
        title: "",
        category: "React",
        description: "",
        content: test,
    },
];
