-   'this': A **reference** to an object. **Can be different** each time the same function is called.
-   **'this' binding**: The **process** of determining what object `this` points to at **runtime** based on **how** the function was invoked.
-   **call()**: A method that **immediately invokes** a function with a specified `this` value and individual argument.
-   **apply()**: A method that **immediately invokes** a function with a specified `this` value and an array of arguments.
-   **bind()**: A method that creates a **new function** with a permanently bound `this` value and optionally pre-filled arguments.

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

-   **Regular Function**: A function that gets its **own `this` binding** determined by how it's called, following the standard this binding rules.
-   **Arrow Function**: A function that **doesn't have its own `this`** - instead inherits this from the lexical scope where it's defined.

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
