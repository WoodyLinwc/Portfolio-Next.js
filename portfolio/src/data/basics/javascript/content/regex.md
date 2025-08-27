## RegExp Creation and Methods

test(), exec(), Capture Groups(), match(), replace(), search(),

```javascript
const regex = /hello/gi; // global, case-insensitive
const regex2 = new RegExp("hello");

// Checks if the pattern exists in a string.
const email = /\w+@\w+\.\w+/;
console.log(email.test("user@example.com")); // true
console.log(email.test("invalid-email")); // false

// Get match details, Capture Groups ()
const regex = /(\w+)@(\w+\.\w+)/;
const result = regex.exec("user@example.com");

console.log(result[0]); // "user@example.com" (full match)
console.log(result[1]); // "user" (first group)
console.log(result[2]); // "example.com" (second group)
```

## String Methods with Regex

-   `match()` - Find matches

```javascript
const text = "Phone: 123-456-7890 or 987-654-3210";
const phoneRegex = /\d{3}-\d{3}-\d{4}/g;

console.log(text.match(phoneRegex));
// ["123-456-7890", "987-654-3210"]
```

-   `replace()`- Replace matches, $ means capture group

```javascript
const text = "Hello World";
console.log(text.replace(/world/i, "JavaScript"));
// "Hello JavaScript"

// With capture groups
const name = "John Doe";
console.log(name.replace(/(\w+) (\w+)/, "$2, $1"));
// "Doe, John"
```

-   `search()` - Find position

```javascript
const text = "Find the word here";

console.log(text.search(/word/)); // 9 (index position)
console.log(text.search(/xyz/)); // -1 (not found)
```

-   `split()` - Split string, [] for multiple punctuation

```javascript
const csv = "apple,banana;orange:grape";
console.log(csv.split(/[,;:]/));
// ["apple", "banana", "orange", "grape"]
```

## Common Patterns

-   Extract Numbers

```javascript
const text = "I have 5 apples and 10 oranges";
const numbers = text.match(/\d+/g);
console.log(numbers); // ["5", "10"]
```

-   Remove All Numbers/Letters

```javascript
const text = "0He1ll2o345!";

const noNumber = text.replace(/\d+/g, "");
const noNumber2 = text.split(/[0-9]/g).join("");

const noLetter = text.split(/[a-z]/g).join("");

const noWord = text.split(/\w+/g).join("");
```

## Common Patterns Cheat Sheet

```javascript
/\d/        // Any digit (0-9)          /*/         // Zero or more
/\w/        // Any word character (a-z, A-Z, 0-9, _)
/\s/        // Any whitespace
/./         // Any character except newline
/^/         // Start of string          /?/         // Zero or one
/$/         // End of string            /{3}/       // Exactly 3
/[a-z]/     // Any lowercase letter     /{2,5}/     // Between 2 and 5
/[^a-z]/    // Anything except lowercase letters
/+/         // One or more              /(abc)/     // Capture group
```
