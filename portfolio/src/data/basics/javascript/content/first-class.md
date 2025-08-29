-   **First-class function** (can be treated as variable) enables higher-order function, which enables currying
-   **HOF**: Functions that take **functions as arguments and/or return functions**, for example .map() .forEach(), .map(n => n\*2), n => n\*2 is the callback function

## Static method vs Instance method

**Static methods**: For **utility functions**, factory methods, or operations that don't depend on instance state

**Instance methods**: For operations that work with or modify the specific data of an object instance

```javascript
// Static - Called on `Array` constructor
Array.isArray(something);
Array.from(nodeList); // Creates array from array-like object
Array.of(1, 2, 3); // Creates array from arguments

// Instance - works with existing array
const myArray = [1, 2, 3];
myArray.push(4); // Modifies the array
myArray.length; // Accesses array property
```
