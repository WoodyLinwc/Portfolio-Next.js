## Object Creation and Property Operations

Object.create(), hasOwnProperty(), in, getOwnPropertyNames()

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = new Object();
const obj3 = Object.create(null); // no prototype
const obj4 = Object.create(obj1); // inherits from obj1

obj1.hasOwnProperty("a"); // true
"a" in obj1; // true
Object.getOwnPropertyNames(obj1); // ['a', 'b']
```

## Object Manipulation

Spread Operator, assign(), freeze(), seal(), preventExtensions()

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// copying and merging
const copy = { ...obj1 };
const merge = { ...obj1, ...obj2 };
const assigned = Object.assign({}, obj1, obj2);

// Freezing and sealing (shallow copy, only top level)
Object.freeze(obj); // prevents all changes
Object.seal(obj); // prevents adding/removing properties
Object.preventExtensions(obj); // prevents adding properties
```

## Object Iteration

Object.keys(), Object.values(), Object.entries(), forEach()

```javascript
const obj = { a: 1, b: 2, c: 3 };

const keys = Object.keys(obj); // ['a', 'b', 'c']
const values = Object.values(obj); // [1, 2, 3]
const entries = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

// iteration methods
for (const key in obj) {
    /* iterate keys */
}
for (const [key, value] of Object.entries(obj)) {
    /* iterate entries */
}

Object.values(obj).forEach((value) => {
    /* iterate values */
});
Object.entries(obj).forEach(([key, value]) => {
    /* iterate entries*/
});
```

## for...of vs for...in

-   **for...of** works on **iterable** (Map, Set, Array, String, Object.entries)
-   **for...in** works on Objects, iterating on Keys

## Convert Map to Object

Object.fromEntries()

```javascript
const map = new Map([
    ["language", "JavaScript"],
    ["type", "dynamic"],
]);

const obj = Object.fromEntries(map);
console.log(obj);
// { language: "JavaScript", type: "dynamic" }
```
