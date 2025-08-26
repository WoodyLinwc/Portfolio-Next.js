-   HTTP is the **protocol** that defines **how browsers and servers communicate**.
-   **Request**: A message sent from client (browser) to server asking for resources or actions.
-   **Response**: A message sent back from server to client containing the requested data or result.
-   **Headers**: **Metadata** about the request/response
-   **Async**: HTTP requests are asynchronous and work with Promises/async-await
-   **Error Handling**: Check `response.ok` and handle different status codes appropriately

## HTTP Methods

-   GET: **Retrieve** data from the server, doesn’t change the server’s state, **idempotent** (making the same GET request multiple times will have the same effect and return the same result).
-   POST: **Create** new resources on the server, **not idempotent** (Sending the same request twice can create **duplicate** resources)
-   PUT: **Update** a resource or create it if it doesn’t exist (sometimes), **idempotent**.
-   DELETE: **Remove** a resource from the server. **Idempotent** (Deleting a resource multiple times has the same effect as deleting it once).

```javascript
// example POST request
const response = await fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userData),
});

const result = await response.json();
```

## Status Code Categories:

-   1xx: **Informational**
-   2xx: **Success** (200 OK, 201 Created)
-   3xx: **Redirection** (301 Moved, 304 Not Modified)
-   4xx: **Client Error** (400 Bad Request, 401 Unauthorized, 404 Not Found)
-   5xx: **Server Error** (500 Internal Server Error, 503 Service Unavailable)
