## React Developer Tools

-   **React Developer Tools** are browser extensions for **debugging** and **profiling** React applications

Components Tab:

-   **Component tree**: Hierarchical view of React components
-   **Props inspection**: See all props passed to components
-   **State inspection**: View and modify component state
-   **Hooks details**: See all hooks and their values

Profiler Tab:

-   **Performance analysis**: Identify slow components
-   **Render timings**: See how long components take to render
-   **Commit timeline**: Visualize when components update
-   **Flamegraph**: Hierarchical view of component render times

Key Profiling Metrics:

-   **Render duration**: Time spent rendering
-   **Number of renders**: How often components re-render
-   **Props changes**: What caused re-renders

## Testing React Components

-   Testing ensures components work correctly and helps prevent regressions during refactoring.
-   **Regressions**: Something that used to work correctly is now broken after making changes.

Testing Philosophy:

-   **Test behavior, not implementation**: Focus on what users see and do
-   **Test like a user**: Use queries that match how users find elements
-   **Avoid testing internal state**: Test outputs and interactions

**React Testing Library** (Recommended):

```javascript
import { render, screen, fireEvent } from "@testing-library/react";

test("increments counter when button is clicked", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: /increment/i });
    const counter = screen.getByText("Count: 0");

    fireEvent.click(button);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

Testing Strategies:

-   **Unit tests**: Individual components in isolation
-   **Integration tests**: Multiple components working together
-   **E2E tests**: Complete user workflows

## React 18 Features

-   React 18 introduced **concurrent rendering** and new features for better user experience and performance.

**Automatic Batching**: Multiple state updates are batched automatically

```javascript
// React 18: Both updates batched automatically
setTimeout(() => {
    setCount(1);
    setFlag(true);
    // Only one re-render
}, 1000);
```

**useDeferredValue**: Defer expensive updates

```javascript
function App() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <ExpensiveList query={deferredQuery} />
        </div>
    );
}
```

**Concurrent Rendering**: React can interrupt, pause, and resume rendering work
