## Differences between ESM and CommonJS

-   **ESM**: **asynchronous loading** (doesn't block execution), good support of **tree shaking** (bundler can determine where to eliminate dead code), works natively in browser `<script type="module">`
-   **CommonJS**: synchronous loading, fully support ESM after version 12

## ES6 Modules (ESM)

`import/export`

## CommonJS (Node.js Traditional)

`require/module.exports`

```javascript
// math.js - CommonJS exports
const PI = 3.14159;
function add(a, b) {
    return a + b;
}

module.exports = {
    PI,
    add,
    subtract: (a, b) => a - b,
};

// app.js - CommonJS imports
const { PI, add, subtract } = require("./math.js");
const math = require("./math.js");

console.log(PI); // 3.14159
console.log(math.add(2, 3)); // 5
```

##
