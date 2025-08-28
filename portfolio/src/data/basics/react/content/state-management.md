## Lifting State Up

-   **Lifting state up** means moving state to the **closest common ancestor** of components that need to **share** it. Prevents data inconsistency. State changes are centralized

When to Lift State:

-   Multiple components need the same data
-   Components need to communicate with siblings
-   Parent needs to coordinate child components

Clear Data Flow Pattern:

-   State lives in parent component
-   Data flows down via props
-   Changes flow up via callback functions
