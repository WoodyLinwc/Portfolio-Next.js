## Number Creation and Checking

```javascript
const num = 42;

Number.isInteger(42); // true
Number.parseInt("f", 16); // 15, radix can be 2-36
Number.parseInt("12abc", 10); // 12, preferred
Number.parseInt("1.999"); // 1
Number.parseFloat("1.00"); // 1, 1 === 1.00
parseInt("12abc"); // 12, global function
```

## Number Formatting

```javascript
const num = 3.99;

num.toFixed(1); // "4.0", return a string, round up
```

## Math Operations

```javascript
Math.abs(-5); // 5
Math.floor(3.7); // 3
Math.min(1, 2, 3); // 1
Math.pow(2, 3); // 8

Math.random(); // 0 ≤ result < 1
Math.floor(Math.random() * 10); // 0 to 9
Math.floor(Math.random() * (max - min + 1)) + min; // inclusive
```

## Date Creation and Methods

```javascript
const now = new Date();
const date = new Date("2001-01-22"); // 'YYYY-MM-DD'
new Date(2023, 0, 15); // January 15, 2023

console.log(now); //2001-01-22T01:03:51.761Z

date.getTime(); // Timestamp, 980121600000
date.getFullYear(); // 2001
date.getMonth(); // 0 (0-indexed)
date.getDate(); // 22
date.getDay(); // 1 (0=Sunday)
```
