JavaScript functions can be declared in multiple ways.

## Function Declaration

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Function Expression

```javascript
const greet = function (name) {
    return `Hello, ${name}!`;
};
```

## Arrow Functions

```javascript
// Single parameter (parentheses optional)
const greet = (name) => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// Multi-line arrow function
const processUser = (user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return fullName.toUpperCase();
};
```
