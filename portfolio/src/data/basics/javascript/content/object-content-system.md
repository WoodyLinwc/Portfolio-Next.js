-   'this': A **reference** to an object. **Can be different** each time the same function is called.
-   **'this' binding**: The **process** of determining what object `this` points to at **runtime** based on **how** the function was invoked.
-   **call()**: A method that **immediately invokes** a function with a specified `this` value and individual argument.
-   **apply()**: A method that **immediately invokes** a function with a specified `this` value and an array of arguments.
-   **bind()**: A method that creates a **new function** with `this` bound to the specified value.

```javascript
function greet(greeting) {
    return `${greeting}, ${this.name}!`;
}

const person = { name: "Bob" };

// explicit this binding.
greet.call(person, "Hello"); // "Hello, Bob!"
greet.apply(person, ["Hi"]); // "Hi, Bob!"
const boundGreet = greet.bind(person);
boundGreet("Hey"); // "Hey, Bob!"
```

-   **Regular Function**: `this` depends on HOW the function is called. Method call, `this` refers to the object. Regular function call, `this` refers to global object, `undefined` in strict mode.
-   **Arrow Function**: A function that **doesn't have its own `this`** - instead inherits `this` from the enclosing scope and cannot be used as constructors.

```javascript
const obj = {
    name: "Alice",

    regularMethod: function () {
        console.log(this.name); // "Alice" - 'this' bound to obj, implicit this binding

        function inner() {
            console.log(this.name); // undefined - 'this' rebound
        }

        const arrow = () => {
            console.log(this.name); // "Alice" - 'this' inherited
        };

        inner();
        arrow();
    },
};
```

## undefined vs null

-   `undefined` means variable has been declared but not assigned a value. `typeof undefined` is undefined
-   `null` is an **intentional** assignment representing "no value", `typeof null` is **object**.
