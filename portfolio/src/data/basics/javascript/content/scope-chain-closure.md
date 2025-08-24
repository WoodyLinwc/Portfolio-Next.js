-   **Scope chain**: the path that JS follows to **find variables**, moving from inner to outer
-   **Lexical scope**: The scope is determined by **where you write** the code, not where you call it
-   **Closure**: Inner function has **access to variables from its outer function**, even after the outer function has finished executing.
-   **IIFE** creates the closure immediately and used with **var** to **create private variable** before ES6.
-   **Traditional module systems** use closures to create private scope and control what's accessible from outside.

## Currying

-   Transforming a function with **multiple arguments** into **a sequence of functions** that each take a **single argument**. Used Closure.

## IIFE

-   It stands for immediately-invoked function expression that **runs as soon as it is defined**
-   Before ES6, it was used with var to create private scope (module), now we use let and const for block-scoping.
