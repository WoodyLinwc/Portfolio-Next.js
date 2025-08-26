## JS behavior of moving variable and function declarations to the top.

-   **var** hoisted and initialized to **undefined** and can be **redeclared**, function-scoped
-   **Both** let and const also hoisted, but **not initialized**, you can **ReferenceError**, block-scoped {}
-   **let** can be reassign
-   **const** cannot be reassign but you can modify the properties of const object
-   Each loop iteration with let creates a **new lexical environment**, which closures can capture separately.

## Strict Mode

-   `'use strict';`
-   no variable declaration is **ReferenceError**
-   Prevent duplicate parameters
-   `this` is undefined, instead of global object

```javascript
function example() {
    undeclaredVar = 10; // ReferenceError in strict mode

    // Prevents duplicate parameters
    function bad(a, b, a) {}

    // console.log(globalThis) in ES2020
    console.log(this); // undefined (instead of global object)
}
```
