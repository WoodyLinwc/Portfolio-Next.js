## JWT

A **stateless** token that contains **user ID**, **roles**, expiration encoded in JSON and signed. Can be verified **without server-side storage** because the signature ensures authenticity.

- User logs in → server validates credentials.
- Server issues a JWT to the client.
- Client stores JWT (localStorage, sessionStorage, or cookie).
- Client sends JWT with **every request** (commonly in Authorization: Bearer <token>).
- Server verifies signature and grants access.

Use cases: RESTful APIs, Microservices, Mobile apps

## Session

A **server-side storage** of user data, keyed by a session ID.
The server keeps a **mapping** of sessionID → user info.

Stateful, easily revoke or expire sessions, more secure

- User logs in → server creates a session with user info.
- Server sends a **session ID** to the client (usually in a cookie).
- Client sends session ID with every request.
- Server looks up session ID → retrieves user data → authenticates request.

## Cookie

A **small piece of data** stored in the browser, automatically sent with **HTTP requests** to the domain that set it.

Can store **session IDs**, **JWTs**, or other data.

## Storing JWT in Cookies

Can be **HttpOnly** → JavaScript can’t access it → protects against XSS.

## Storing JWT localStorage (or sessionStorage)

Full **client-side control** → you decide when to send the token.

Not automatically sent with requests → you need to add it to Authorization headers manually.
