## Higher-Order Components (HOC)

-   **Higher-Order Components** are functions that **take a component** and return a new component with **additional functionality**
-   HOCs can create **wrapper hell** with deeply nested components, make debugging harder

Common Use Cases:

-   **Authentication**: Protect routes/components
-   **Data fetching**: Inject data into components
-   Styling: Add CSS classes or themes
-   Analytics: Track component usage

## Render Props Pattern

-   **Render props** is a pattern where a component takes a **function as a prop** that returns JSX, allowing for flexible component composition.

## Compound Components

-   **Compound components** work together as a cohesive unit, often with **implicit state sharing** between parent and children.
-   Examples: `<select>` and `<option>`, React Router's `<Routes>`and `<Route>`
