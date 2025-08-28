-   JSX is a **syntax extension** that allows writing **HTML-like** code in JavaScript.
-   It's transpiled to `React.createElement()` calls.

## JSX Transpilation:

```javascript
// JSX
const element = <h1>Hello, {name}!</h1>;

// Transpiles to:
const element = React.createElement("h1", null, "Hello, ", name, "!");
```

## JSX Rules:

-   Must return **single parent element** (use Fragment `<>`if needed)
-   Use `className` instead of `class`
-   Use `htmlFor` instead of `for`
-   Self-closing tags must end with `/>`
-   Event handlers use **camelCase** (`onClick`, `onChange`)
-   Inline styles are objects: `style={{ backgroundColor: 'red' }}`
-   Any valid JavaScript expression can be embedded using `{}`

## Conditional Rendering Patterns

```javascript
// Ternary operator
{
    isLoggedIn ? <Dashboard /> : <Login />;
}

// Logical AND
{
    isLoggedIn && <Dashboard />;
}

// Function call, but it's recommended to create a separate component
function renderContent(isLoggedIn) {
    return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
}

function App() {
    return <div>{renderContent(true)}</div>;
}
```
