import type { BasicTopic } from "../types";

import test from "./content/test.md";
import coreReact from "./content/core-react.md";
import jsx from "./content/jsx.md";
import propsState from "./content/props-state.md";
import hooks from "./content/hooks.md";

import component from "./content/component.md";

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
        id: "props-state",
        title: "Props & State",
        category: "React",
        description:
            "Read-only, {children}, useState, Functional Updates, Lazy Initial State",
        content: propsState,
    },

    {
        id: "react-hooks",
        title: "React Hooks",
        category: "React",
        description:
            "useEffect, useContext, Prop Drilling, useReducer, useMemo & useCallback, React.memo, useRef",
        content: hooks,
    },

    {
        id: "component",
        title: "Component Patterns",
        category: "React",
        description: "",
        content: component,
    },

    {
        id: "",
        title: "",
        category: "React",
        description: "",
        content: test,
    },
];
