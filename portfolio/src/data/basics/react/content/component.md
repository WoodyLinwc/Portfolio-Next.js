-   **Components** are the **building blocks** of React applications - independent, reusable pieces that **return JSX**.

## Functional vs Class Components:

-   Functional Components: Modern standard, use hooks for state/lifecycle
-   Class Components: Legacy, use `this.state` and lifecycle methods

## Component Lifecycle

-   Component lifecycle refers to the **3 different phases** a component goes through: mounting, updating, and unmounting.
-   **Mounting**: Component is created and inserted into DOM
-   **Updating**: Component re-renders due to **prop/state** changes
-   **Unmounting**: Component is removed from DOM
-   In functional components, **useEffect** handles all lifecycle concerns

## Class Component Lifecycle Methods

-   **componentDidMount**: After **first render** (API calls, subscriptions)
-   **componentDidUpdate**: After **every update** (side effects based on changes)
-   **componentWillUnmount**: Before component removal (**cleanup**)

## Event Handling

-   React uses **SyntheticEvents** - a wrapper around **native events** that provides consistent behavior across browsers (`preventDefault`, `stopPropagation`)

```javascript
function Button() {
    const handleClick = (event) => {
        event.preventDefault(); // SyntheticEvent method
        console.log("Button clicked");
    };

    return <button onClick={handleClick}>Click me</button>;
}
```

## Passing Arguments

```javascript
<button onClick={() => handleClick(id)}>Click</button>
<button onClick={handleClick.bind(null, id)}>Click</button>

```
