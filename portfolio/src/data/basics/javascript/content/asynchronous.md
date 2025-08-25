-   Asynchronous behavior means some operation **take time to complete**, not immediately(fetch data from a server), but we don't want to **freeze** the program.

## Callback - the original solution

-   A callback is simply a **function passed to another function**.
-   **Callback hell**: when you have multiple asynchronous functions that depends on each other, nested callback, hard to read and maintain

```javascript
function fetchUserData(userId, callback) {
    setTimeout(() => {
        const userData = { id: userId, name: "Alice" };
        callback(null, userData); // First param: error, second: data
    }, 1000);
}

fetchUserData(123, (error, user) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("User:", user);
    }
});
// User: { id: 123, name: 'Alice' }
```

## Promise - a better way

-   Promise is the **eventual completion** of asynchronous operation.
-   It has 3 states, **pending, rejected, fulfilled**.
-   Promise is **chainable**, attach .then() to handle result, .catch() to handle error or rejection

```javascript
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Waited ${ms}ms`);
        }, ms);
    });
}

wait(1000).then(console.log); // "Waited 1000ms" after 1 second
// wait(1000).then(data => console.log(data));

//can use async/await:
async function demo() {
    console.log("Start");
    const msg = await wait(5000); // ⏸ pauses here
    console.log(msg); // " Waited 5000ms"
    console.log("End");
}

demo();
```

Promise object

```javascript
const promiseObj = new Promise((resolve) => resolve("Hello!"));
promiseObj.then((result) => console.log(result));
```

## Async/await - syntactic sugar of promise

-   It makes asynchronous code look **synchronous** and still use **promise behind the scene**, use with **try/catch**.
-   Early days: **XMLHttpRequest (XHR)** is the original browser API for making HTTP requests. Verbose and callback-based
-   ES6+: **Fetch API**, promise-based, cleaner syntax
-   Libraries: **Axios**, automatic JSON handling, automatically catches 404, 500 errors, request and response interceptors (middleware function)
