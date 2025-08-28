## React Core Philosophy

-   React is a JS **UI library**, focusing on creating **reusable components** and managing **application** state efficiently

## Declarative UI

-   React treats UI as a **function of state**.
-   You describe **what UI look like** based on the current state, and it handles how.

## Component-based Architecture

-   Applications are built as a **tree of components**, building UI from **small and isolated pieces**, each managing its own state and rendering logic.

## Virtual DOM

-   React maintains a **lightweight JS representation** of the real DOM.
-   When **state/props changes**, React
-   Creates a **new Virtual DOM**.
-   Uses Diffing Algorithm to **compare new one with previous** Virtual DOM.
-   Calculates the **minimal changes** needed.
-   Updates only **changed DOM nodes**.

This process is call **reconciliation** and makes React fast.

## Unidirectional Data Flow

-   Data flows from **parent to child** (top-down) through **props**, which makes app logic more **predictable** and easier to **debug**.

## React Fiber

-   React's reconciliation engine (introduce in React 16) that enables:
-   Incremental rendering
-   Ability to pause, abort, or reuse work
-   Priority assignment to different types of updates

## Before React

-   In vanilla JS:
-   You often need to **manually manipulate the DOM** (document.createElement, appendChild, innerHTML, etc.).
-   **Event handlers scattered everywhere** in your code, making it harder to maintain.
-   It’s easy to perform **unnecessary DOM** operations that slow down the app (e.g., re-rendering whole sections when only one small change was needed).
