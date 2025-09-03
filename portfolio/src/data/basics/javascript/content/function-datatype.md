## Data Types

- **Primitive types**: string, number, boolean, null, undefined, symbol, bigint (**passed by value**)
- When access method `str.length`, JS temporarily create a **wrapper object**, allowing access to **String.prototype methods**, then **unboxes** it, `new String('hello').length`.
- They are **immutable**, meaning value cannot be changed once created, predictable and behave consistently.
- **Reference types**: object, array, function (**passed by reference**), **mutable**.

```javascript
// 7 primitive types
const string = "hello";
const number = 42;
const boolean = true;
const undefined = undefined;
const nullValue = null;
const symbol = Symbol("id");
const bigint = 123n;

// Primitives are passed by value
let a = 5;
let b = a; // Copy of value
a = 10;
console.log(b); // Still 5

// Objects, arrays, functions are reference types
const obj1 = { name: "Alice" };
const obj2 = obj1; // Reference Assignment
const obj3 = { ...obj1 }; // Shallow copying

obj1.name = "Bob";
console.log(obj2.name); // "Bob" - same object!
console.log(obj3.name); // "Alice"
```

## == vs ===

- == (Loose Equality): Compares values **after type coercion**.
- === (Strict Equality): Compares values **without type coercion**.

## Falsy value

```javascript
// Falsy values (only 8), everything else is truthy, "0", [], {}
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
```

## `typeof` vs `instanceof`

- `typeof` works with **Primitive** types and **function**.
- `instanceof` returns true/false, works with **Reference** types

```javascript
typeof 42;          // "number"
typeof undefined;   // "undefined"
typeof null;        // "object"     (quirk in JS!)
typeof [];          // "object"   (arrays are objects)

[] instanceof Array       // true
[] instanceof Object      // true (since Array extends Object)
new Date() instanceof Date // true
({}) instanceof Object    // true
```

# Pure Function

- A **pure function** is a function that **always returns the same output for the same input** and has no side effects (doesn't modify external state, make API calls, or log to console). Pure functions are predictable, testable, and essential in functional programming.

## Function Declaration

```javascript
function greet(name) {}
```

## Function Expression

```javascript
const bye = function (name) {};
```

## Arrow Functions

```javascript
const add = (a, b) => a + b;
```
