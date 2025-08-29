-   **Error boundaries** are React components that **catch JavaScript errors** anywhere in their **child component tree** and **display fallback UI** instead of crashing the app.

## What Error Boundaries Catch

-   Errors in **render methods**
-   Errors in **lifecycle methods**
-   Errors in **constructors** of child components

## What They DON'T Catch:

-   **Event handlers** (use try/catch)
-   **Async code**(setTimeout, promises)
-   **Server-side rendering** errors
-   Errors in the error boundary itself
-   No built-in hook, but libraries like `react-error-boundary` provide solutions
-   Error boundaries must be **class components**

```javascript
class ErrorBoundary extends React.Component {
    static getDerivedStateFromError + componentDidCatch
}

function BuggyButton() {
  const [count, setCount] = React.useState(0);

  if (count === 3) {
    throw new Error("Crashed at count 3!");
  }

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyButton />
    </ErrorBoundary>
  );
}
```

-   **Suspense** allows components to **wait for something** before rendering, commonly used with **code splitting** and **data fetching**.
-   **Code Splitting with React.lazy**

```javascript
const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading component...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}
```
