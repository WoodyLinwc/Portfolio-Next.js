## JS behavior of moving variable and function declarations to the top.

-   **var** hoisted and initialized to **undefined** and can be **redeclared**, function-scoped
-   **Both** let and const also hoisted, but **not initialized**, you can **ReferenceError**, block-scoped {}
-   **let** can be reassign
-   **const** cannot be reassign but you can modify the properties of const object
-   Each loop iteration with let creates a **new lexical environment**, which closures can capture separately.
