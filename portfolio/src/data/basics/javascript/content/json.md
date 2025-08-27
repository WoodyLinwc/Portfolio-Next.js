# `JSON.stringify()` vs `JSON.parse()`

-   `JSON.stringify()`: sending data to server, use it to convert object to string
-   `JSON.parse()`: receiving data from server, use it to convert string to object. (.json() in fetch)

```javascript
const obj = { name: "John", age: 30 };

// JavaScript object → JSON string
const json = JSON.stringify(obj); // '{"name":"John","age":30}'

// JSON string → JavaScript object
const parsed = JSON.parse(json); // {name: "John", age: 30}
```

## `JSON.stringify()` with replacer

-   Hiding sensitive fields before sending API responses.

```javascript
const obj = { name: "Alice", age: 25, password: "secret" };

// Only serialize selected keys
const json = JSON.stringify(obj, ["name", "age"]); // '{"name":"Alice","age":25}'

// Using a replacer function
const json2 = JSON.stringify(obj, (key, value) =>
    key === "password" ? undefined : value
); // '{"name":"Alice","age":25}'
```

## `JSON.stringify` with spacing (pretty-print)

-   `null` means "include all properties"
-   `2` means "indent with 2 spaces"
-   Debugging or writing config files.

```javascript
const obj = { name: "Alice", age: 25 };
const pretty = JSON.stringify(obj, null, 2);
console.log(pretty);

/* Output:
{
  "name": "Alice",
  "age": 25
}
*/
```

## `JSON.parse` with reviver

-   transform values while parsing

```javascript
const json = '{"name":"Alice","birth":"1990-01-01"}';

const parsed = JSON.parse(json, (key, value) => {
    if (key === "birth") return new Date(value);
    return value;
});

console.log(parsed.birth instanceof Date); // true
```

## Deep Copying via JSON, structuredClone()

```javascript
const obj = { a: 1, b: { c: 2 } };

const copy = JSON.parse(JSON.stringify(obj));
// Loses functions, undefined, symbols. Converts dates to strings

const copy2 = structuredClone(obj);
```
