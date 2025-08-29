## Props (Properties):

-   External data passed from **parent to child** components
-   **Read-only** - components should never modify their props
-   Can be **any data type**: strings, numbers, objects, functions, JSX

```javascript
// Props destructuring
function UserCard({ name, email, onEdit }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <button onClick={onEdit}>Edit</button>
        </div>
    );
}

// Children prop for composition
function Card({ title, children }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-body">{children}</div>
        </div>
    );
}
```

## State

-   State is **internal data** that belongs to a component and can **trigger re-renders** when changed.
-   State is **immutable** - always create **new objects/arrays**
-   State updates are **asynchronous**
-   Multiple state updates may be **batched**
-   Use **functional updates** when new state depends on previous state

```javascript
// only increase count by 1
function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
}
// functional updates
function handleClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
}
```

## useState

-   **useState** is a hook that adds state to functional components. It returns an array with the **current state value and a setter function**. When the setter is called, it triggers a re-render with the new state value.

## Updating Objects/Arrays:

```javascript
// Object
setUser({ ...user, name: "New Name" });

// Array
setItems([...items, newItem]);
setItems(items.filter((item) => item.id !== id));
```

## Lazy Initial State

```javascript
const [data, setData] = useState(() => expensiveCalculation());
```
