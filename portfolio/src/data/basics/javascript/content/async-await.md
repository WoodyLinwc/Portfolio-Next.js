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
