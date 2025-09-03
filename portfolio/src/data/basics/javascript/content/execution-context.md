- **Execution context**: A container that holds **all the information** JavaScript needs to run code - variables, functions, this value, and scope references.
- **Call stack**: A stack of these **containers**, showing which code is currently running and what called it, LIFO.

```javascript
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
}

first();

// Call Stack progression:
// 1. Global Context
// 2. Global Context → first() Context
// 3. Global Context → first() Context → second() Context
// 4. Global Context → first() Context (second pops off)
// 5. Global Context (first pops off)
```

## Inside execution context

- **Variable environment** - Where variables and functions are stored
- **Lexical Environment** - Where the scope chain is managed
- **this Binding** - What this refers to in this context

## Lexical Scope (The concept)

- The rule that says variables are accessible based on **where they're written** in the code, not where they're called.

```
function outer() {
  const x = 10;
  function inner() {
    console.log(x); // Can access x due to lexical scope
  }
  inner();
}
```
