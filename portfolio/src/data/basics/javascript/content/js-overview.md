-   It is a **just-in-time** compiled language that runs everywhere, from browsers to servers to mobile apps.
-   JS supports **dynamic typing**, meaning variables don't need a type declaration. It introduces type safety concerns, but now we have TS, a superset of JS has static typing also with better IDE support.
-   It's **prototype-based**, meaning objects inherit directly from other objects.
-   It's **single-threaded**; JS uses the event loop for concurrency.
-   It supports **first-class** function, meaning function can be treated as a variable (Stored in variables; Passed as arguments, returned from other functions)
-   JS engines like V8(Chrome), SpiderMonkey(Firefox) use a JIT compiler to convert JS to optimized machine code.
-   JS gets more powerful after **ES6**.
-   JS is managing two parallel systems within each **Execution Context** - a **lexical system** for variables (static, predictable) and a **dynamic system** for object context (changes with each call). **Closures extend** the lexical system's lifetime, while **call/apply/bind** give you control over the dynamic system.

```
JavaScript Engine:
├── Single Call Stack (synchronous execution)
├── Two Parallel Systems per Context:
│   ├── Lexical System (variables, scope, closures)
│   └── Dynamic System ('this' binding)
├── Event Loop (asynchronous coordination)
│   ├── Web APIs (external operations)
│   ├── Microtask Queue (high priority)
│   └── Callback Queue (standard priority)
└── Function Types:
    ├── Regular Functions (own 'this', own execution context)
    └── Arrow Functions (inherited 'this', own execution context)


```
