-   **React Router** enables **client-side routing** in React applications, creating **Single Page Applications** (SPAs).

Core Components:

-   **BrowserRouter**: Provides routing context
-   **Routes**: Container for route definitions
-   **Route**: Defines path-to-component mapping
-   **Link**: Navigation without page refresh
-   **Navigate**: Programmatic navigation

```javascript
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:id" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}
```

-   **Route Parameters**: Dynamic segments in URLs (`/users/:id`)
-   **Query Parameters**: URL search parameters (`?search=react`)
-   **Nested Routes**: Routes within routes for complex layouts

Navigation Methods:

-   **Link**: Declarative navigation
-   **useNavigate**: Imperative navigation
-   **Navigate**: Component-based redirect

```javascript
// useNavigate(): Programmatic navigation after events (form submit, login)
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // simulate login logic
        const success = true;
        if (success) {
            navigate("/dashboard"); // redirect after login
        }
    };

    return <button onClick={handleLogin}>Login</button>;
}

// Navigate: Conditional redirects inside JSX (protected routes, auto-redirects)
function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; // redirect if not logged in
    }
    return children;
}
```
