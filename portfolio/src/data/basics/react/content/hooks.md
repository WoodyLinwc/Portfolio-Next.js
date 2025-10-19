## useEffect Hook

- **useEffect** handles **side effects** in functional components - operations like API calls, subscriptions, DOM manipulation, and timers.
- Side effects: operations that affect things outside the component.
- useEffect runs **after the render** is committed to the DOM.
- **Dependencies Array**: No array runs after every render, [] runs once, [x, y] runs when dependencies change
- **Cleanup Function**: Return a function from useEffect to clean up subscriptions, timers, or event listeners.

```javascript
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);

  // Cleanup runs before next effect or unmount
  return () => clearInterval(timer);
}, []); // Empty dependency array = componentDidMount + componentWillUnmount
```

## useContext Hook

- **useContext** provides a way to **share data** through the component tree without **prop drilling**. (Authentication, themes, language, API endpoints, feature flags)

Context Creation Process:

- Create context with `createContext()`. Wrap components with `Provider`. Consume context with `useContext()`

Context Limitations:

- **Performance**: **All consumers re-render** when context value changes

## useReducer Hook

- **useReducer** is an alternative to **useState** for managing **complex state logic** using the reducer pattern.

When to Use useReducer:

- Next state depends on previous state
- Want to **centralize state update** logic
- State transitions need to be **predictable**

Reducer Pattern:

- **Pure function**: `(state, action) => newState`
- Actions: Objects describing what happened
- **Immutability**: Always return new state object

**useReducer** + **useContext**: Powerful combination for global state management (**Redux** pattern).

## useMemo & useCallback Hooks vs React.memo

- Performance optimization hooks that **prevent unnecessary recalculations and re-renders** through memoization.
- **useMemo**: Memoizes the **result** of expensive calculations. **useCallback**: Memoizes **functions**.
- **React.memo**: **HOC** that wraps a functional component. Prevent re-render of **child component** if props unchanged.

```javascript
// useMemo - memoizes VALUE
const expensiveValue = useMemo(() => {
  return items.filter((item) => item.active).length;
}, [items]);

// useCallback - memoizes FUNCTION
const handleClick = useCallback((id) => {
  setSelected(id);
}, []);
```

- The React data flow is **unidirectional**, from parent to child.
- We wrap child component with `React.memo`, and use `useCallback` and `useMemo` inside parent component. They are most beneficial when working together.

## useRef Hook

- **useRef** provides a way to **access DOM elements** and **persist values** across renders without causing re-renders.
- **DOM Access**: Direct reference to DOM elements
- **Mutable Values**: Store values that **don't trigger re-renders**

```javascript
// DOM access
// or setInterval/setTimeout IDs for cleanup
const inputRef = useRef(null);
const focusInput = () => inputRef.current.focus();

// Mutable value (doesn't trigger re-render)
const countRef = useRef(0);
countRef.current += 1; // No re-render
```

## useRef vs useState:

- useRef: Mutable, no re-renders, `.current` property
- useState: Immutable, triggers re-renders, direct value
