- **Lexical Scope**: The **rule** that variables are accessible based on **where they're written** in the code, not where they're called from.
- **Lexical Environment**: The **data structure** that implements lexical scope - contains current scope's variables plus a reference to the outer scope.
- **Scope Chain**: The **lookup mechanism** that JavaScript uses to **find variables** by walking up through nested scopes until it finds the variable or reaches global scope.

```javascript
const global = "I'm global";

function outer() {
  const outerVar = "I'm outer";

  function inner() {
    const innerVar = "I'm inner";
    console.log(innerVar); // Found in current lexical environment
    console.log(outerVar); // Found via scope chain, due to lexical scope
    console.log(global); // Found via scope chain, due to lexical scope
  }

  inner();
}

outer();
```
