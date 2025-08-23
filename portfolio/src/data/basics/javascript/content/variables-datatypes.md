Variables in JavaScript can be declared using var, let, or const.

## Data Types

• **Primitive types**: string, number, boolean, null, undefined, symbol, bigint
• **Reference types**: object, array, function

## Examples

```javascript
const name = "John"; // string
let age = 25; // number
const isActive = true; // boolean
const user = { name: "John", age: 25 }; // object
const numbers = [1, 2, 3]; // array
```

## Best Practices

-   Use `const` by default for values that won't be reassigned
-   Use `let` for variables that will be reassigned
-   Avoid `var` in modern JavaScript code
