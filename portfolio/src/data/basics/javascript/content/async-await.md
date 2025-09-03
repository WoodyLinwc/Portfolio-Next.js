## Promise Style

```javascript
function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("❌ Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("✅ Data:", data);
      return data; // pass data to the next .then() if needed
    })
    .catch((error) => {
      console.error("❌ Fetch error:", error);
    });
}
```

## Promise utilities

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 1000);
});

promise.then((result) => console.log(result));
promise.catch((error) => console.error(error));
promise.finally(() => console.log("cleanup"));

// Promise utilities
Promise.all([promise1, promise2]); // wait for all
Promise.allSettled([promise1, promise2]); // wait for all, don't fail fast
Promise.race([promise1, promise2]); // first to resolve/reject
Promise.resolve(value); // resolved promise
Promise.reject(error); // rejected promise
```

## Async/await Style

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("❌ Network response was not ok");
    }
    const data = await response.json();
    console.log("✅ Data:", data);
    return data; // still returns a Promise
  } catch (error) {
    console.error("❌ Fetch error:", error);
  }
}
```
