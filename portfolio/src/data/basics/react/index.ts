import type { BasicTopic } from "../types";

import test from "./content/test.md";
import coreReact from "./content/core-react.md";
import jsx from "./content/jsx.md";
import propsState from "./content/props-state.md";
import hooks from "./content/hooks.md";
import customHooks from "./content/custom-hooks.md";
import component from "./content/component.md";
import controlledComponent from "./content/controlled-component.md";
import stateManagement from "./content/state-management.md";
import reactRouter from "./content/react-router.md";
import errorBoundaries from "./content/error-boundaries.md";

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
        id: "custom-hooks",
        title: "Custom Hooks",
        category: "React",
        description:
            "Encapsulate and Reuse Stateful Logic, Data Fetching, Local Storage, Form Handling, Window Size",
        content: customHooks,
    },

    {
        id: "component",
        title: "Component Patterns & Event Handling",
        category: "React",
        description:
            "Functional vs CLass Component, Component Lifecycle, SyntheticEvent, Native Event",
        content: component,
    },

    {
        id: "controlled-component",
        title: "Forms & Controlled Component",
        category: "React",
        description:
            "Controlled & Uncontrolled Component, Form Input Value, Single Source of Truth, useState vs useRef",
        content: controlledComponent,
    },

    {
        id: "state-management",
        title: "State Management & Data Flow",
        category: "React",
        description:
            "State Lifting, Common Ancestor, Data Consistency, Share Data, Redux, Zustand, Context",
        content: stateManagement,
    },

    {
        id: "react-router",
        title: "React Router",
        category: "React",
        description:
            "BrowserRouter, Routers, Route, Link, Navigate, useNavigate",
        content: reactRouter,
    },

    {
        id: "error-boundaries",
        title: "Error Boundaries, Suspense & Lazy Loading",
        category: "React",
        description:
            "Render Methods & Lifecycle Methods, getDerivedStateFromError, componentDidCatch, React.lazy",
        content: errorBoundaries,
    },

    {
        id: "",
        title: "",
        category: "React",
        description: "",
        content: test,
    },
];
