-   **Custom hooks** are JavaScript functions that **encapsulate** and **reuse stateful logic** between components.

## Rules of Custom Hooks

-   Must start with **"use"** (React convention)
-   Can call **other hooks**
-   Follow all Rules of Hooks
-   Return whatever makes sense (values, functions, objects)

## Common Custom Hook Patterns

-   **Data fetching**: useApi, useFetch
-   **Local storage**: useLocalStorage
-   **Form handling**: useForm
-   **Window size**: useWindowSize
-   **Previous value**: usePrevious

**Testing Custom Hooks**: Use `@testing-library/react-hooks` to test hook logic in isolation.

```javascript
// Custom hook for API calls
function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
    const { data: user, loading, error } = useApi(`/api/users/${userId}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return <div>{user.name}</div>;
}
```
