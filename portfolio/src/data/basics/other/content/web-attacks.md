## XSS – Cross-Site Scripting

An attacker injects **malicious scripts** (usually JavaScript) into a web page. The script can **steal cookies**, tokens, or manipulate the DOM

- Use **HttpOnly** cookies (JavaScript cannot read them).
- **Sanitize/escape** user input before rendering.
- CSP

## CSRF – Cross-Site Request Forgery

An attacker **tricks** a logged-in user’s browser into sending requests to a website the user is authenticated on, **without consent**. Can perform unwanted actions like **changing passwords** or making transactions.

- Use cookies with **SameSite** attribute.

## SQL Injection (SQLi)

Attacker **manipulates database** queries via input.

- Parameterized queries: A safe way to run SQL queries by separating the SQL code from **user input**. User input is treated **as data not code**.
- ORM: A tool that maps database tables to programming objects. Lets developers interact with the database **using code** instead of raw SQL.

## Man-in-the-Middle (MITM)

**Intercepting communication** between client & server. Attacker on public Wi-Fi intercepts login credentials sent over HTTP.

- Always use **HTTPS/TLS**

## Clickjacking

Tricks users into clicking **hidden buttons** or links, performing unintended actions.

- **Content-Security-Policy**: frame-ancestors 'none'

## Content-Security-Policy (CSP)

CSP is a **HTTP response header**, server tells the browser **which sources of content** (scripts, images, styles, frames, etc.) are allowed to load and execute.
