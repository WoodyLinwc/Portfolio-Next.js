## Lifting State Up

-   **Lifting state up** means moving state to the **closest common ancestor** of components that need to **share** it. Prevents data inconsistency. State changes are centralized

When to Lift State:

-   Multiple components need the same data
-   Components need to communicate with siblings
-   Parent needs to coordinate child components

Clear Data Flow Pattern:

-   State lives in parent component
-   Data flows down via props
-   Changes flow up via callback functions

## State Management Libraries

-   External libraries for managing **complex application state** across many components.

## Redux

-   Predictable state container with **single store**
-   **Store**: Single source of truth for app state
-   **Actions**: Plain objects describing what happened
-   **Reducers**: Pure functions that specify state changes
-   **Middleware**: Handle async operations (Redux Thunk/Saga)

## Zustand

-   Lightweight alternative with simpler API

```javascript
const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

## Context

**Context** + **useReducer**: Built-in React solution for medium complexity
