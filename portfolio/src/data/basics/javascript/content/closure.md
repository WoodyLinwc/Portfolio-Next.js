- **Closure**: When an **inner function retains access** to variables from its outer function, even after the outer function has finished executing.
- Closures are created when a **function is defined inside another function** and references variables from the outer function.

```javascript
function createCounter() {
  let count = 0;
  return function () {
    return ++count; // Closure preserves 'count'
  };
}

const counter1 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
```

- **IIFE (Immediately Invoked Function Expression)**: A function that **runs immediately when defined**, often used to create private scope and avoid polluting global namespace.

```javascript
const module = (function () {
  const private = "secret"; // scoped inside IIFE only

  return {
    getPrivate: () => private, // closure keeps access to it
  };
})();

console.log(module.getPrivate()); // ✅ "secret"
console.log(module.private); // ❌ undefined
console.log(private); // ❌ ReferenceError
```

- **Currying**: A technique that transforms **a function taking multiple arguments** into a series of functions **each taking a single argument**, using closures to remember previous arguments.

```javascript
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}
console.log(curriedAdd(2)(3)); // 5

const add2 = curriedAdd(2); // fix 'a = 2'
console.log(add2(5)); // 7
console.log(add2(10)); // 12
```

- Instead of IIFE, Modern best practice is to use let/const with block scope, modules, or private class fields for encapsulation.
