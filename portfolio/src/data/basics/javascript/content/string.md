## String Creation and Basic Operations

repeat(), padStart(), padEnd()

```javascript
const str1 = "hello";
const str2 = String(123);
const str3 = `template ${str1}`;

const str4 = str1.repeat(3); // "hellohellohello"
const str5 = str1.padStart(10, "0"); // "00000hello"
const str6 = str1.padEnd(10, "!"); // "hello!!!!!"
```

## String Searching

indexOf(), lastIndexOf(), includes(), startWith(), endsWith()

```javascript
const str = "hello world";
str.indexOf("o"); // 4 (first occurrence)
str.lastIndexOf("o"); // 7 (last occurrence)

str.includes("world"); // true
str.startsWith("hello"); // true
str.endsWith("world"); // true
```

## String Transformation

trim(), trimStart(), toLowerCase(), toUpperCase(), replace(), replaceAll()

```javascript
const str = "  Hello World  ";
const trimStart = str.trimStart(); // "Hello World  "

str.trim()
    .toLowerCase()
    .toUpperCase()
    .replace("WORLD", "JS")
    .replaceAll("L", "l");
// HEllO JS
```

## String Splitting and Slicing

split(), slice(), substring(), charAt()

```javascript
const str = "a,b,c,d";
str.split(",").join(" "); // ['a', 'b', 'c', 'd'] - "a b c d"
str.slice(2, 5); // "b,c"
str.slice(-1); // d, can take negative indices, most common

str.substring(2, 5); // "b,c"
str.charAt(0); // "a"
```

## String() vs toString()

-   **String()**: global function, **safe**, never throws error, most common.
-   **toString()**: method, **throws error** on null or undefined, accepts **radix parameter**.

```javascript
String(null); // "null"
String(undefined); // "undefined"

null.toString(); // TypeError
(15).toString(16); // "f", need ()
```
