-   **Execution context**: A container that holds **all the information** JavaScript needs to run code
-   **Call stack**: A stack of these containers, showing which code is currently running and what called it

## Inside execution context

-   **Variable environment** - Where variables and functions are stored
-   **Lexical Environment** - Where the scope chain is managed
-   **this Binding** - What this refers to in this context

## Lexical Scope (The concept)

-   The rule that says variables are accessible based on **where they're written** in the code, not where they're called.

```
function outer() {
  const x = 10;
  function inner() {
    console.log(x); // Can access x due to lexical scope
  }
  inner();
}
```

## Lexical Environment (the implementation)

The actual data structure that the JavaScript engine creates to store:

-   Environment Record (variables in current scope)
-   Reference to outer environment (parent scope)
