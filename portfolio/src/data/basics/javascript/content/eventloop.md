- **Event Loop**: The **mechanism** that allows JavaScript to handle **asynchronous operations** despite being **single-threaded**.
- **Call Stack**:showing which code is currently running and what called it
- **Macrotask queue**: A queue that holds **callback functions** from **completed** asynchronous operations, waiting to be executed. For example, setTimeout, DOM event. (Instead of a giant macrotask queue, it breaks down to multiple task queues, interaction queue, timer task queue etc)
- **Microtask Queue**: A higher priority queue for **Promise callbacks** and other microtasks - always processed before the Macrotask queue.

```javascript
console.log("1"); // Synchronous

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log("2")); // Microtasks when fetch resolves

setTimeout(() => console.log("3"), 0); // Macrotask

Promise.resolve().then(() => console.log("4")); // Microtask

console.log("5"); // Synchronous

// Output: 1 5 4 3 2
// Synchronous > Microtask > Macrotask
```

## Event loop process

The event loop **continuously** monitors the **call stack**.

If the call stack is **empty**:

a. It first processes **all microtasks** in the microtask queue, **one by one**, until the microtask queue is empty.

b. Then it picks **one macrotask** from the macrotask queue (also called the callback queue) and executes it.

After the macrotask completes, the event loop goes back to **check the microtask queue again** before moving on to the next macrotask.
