## Debounce & Throttle Patterns

-   Essential techniques for controlling function **execution frequency**.

```javascript
// Debounce: Execute function only after delay period of inactivity
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle: Execute function at most once per time period
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
```

## Memory Leaks

-   Remove event listeners when **components unmount**.
-   Use **weak reference** (WeakMap/WeakSet, objects can be garbage collected)

```javascript
In Chrome DevTool, memory tab
Take Heap Snapshot,
Perform actions that might cause memory leaks
Take another snapshot
Compare snapshots to see what increased
```

## Loading Performance

-   **Lazy Loading**: Load resources only when needed.
-   **Code Splitting**: Break bundles into smaller chunks.
-   **Preloading** Critical Resources: Load important resources early.
-   **Caching Strategies**: Implement smart caching to avoid repeated work.
