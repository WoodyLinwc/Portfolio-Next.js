## Array Creation and Basic Operations

Array.of(), Array.from(), push(), pop(), unshift(), shift(), toSpliced()

```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(3); // [ <3 empty items> ]
const arr3 = Array.of(1, 2, 3); // [1,2,3]
const arr4 = Array.from({ length: 3 }, (_, i) => i); // [0,1,2]

// Adding/removing elements
arr.push(4); //  returns new length
arr.pop(); // returns removed element

arr.unshift(0); //  returns new length
arr.shift(); // returns removed element

// start, remove count, add
arr.splice(1, 1, "new"); // modify original, [1, "new", 3]

// keep the original
function toSpliced(arr, start, deleteCount, ...items) {
    const result = [...arr]; // Create copy
    result.splice(start, deleteCount, ...items); // Modify copy
    return result;
}
const newArr = toSpliced(arr, 1, 1, "new");
```

## Array Searching and Checking

indexOf(), lastIndexOf(), includes(), find(), findIndex(), some(), every()

```javascript
const arr = [1, 2, 3, 4, 5];
arr.indexOf(3); // 2 (first occurrence)
arr.lastIndexOf(3); // 2 (last occurrence)
arr.includes(3); // true
arr.find((x) => x > 3); // 4 (first match)
arr.findIndex((x) => x > 3); // 3 (index of first match)
arr.some((x) => x > 4); // true (at least one matches)
arr.every((x) => x > 0); // true (all match)
```

## Array Transformation

map(), filter(), reduce(), reduceRight(), flatMap()

```javascript
const arr = [1, 2, 3, 4, 5];
arr.map((x) => x * 2); // [2, 4, 6, 8, 10]
arr.filter((x) => x > 2); // [3, 4, 5]
arr.reduce((sum, x) => sum + x, 0); // 15
arr.reduceRight((sum, x) => sum + x, 0); // 15 (right to left)
arr.flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
```

-   **map()**

```javascript
array.map((element, index, array) => {
    // element: current item being processed
    // index: current index (0, 1, 2, ...)
    // array: the original array being mapped
});

[1, 2, 3].map((num, i, arr) => {
    const isLast = i === arr.length - 1;
    return isLast ? `${num} (last)` : num.toString();
});
// ['1', '2', '3 (last)']
```

## Array Sorting and Reversing

sort(), reverse()

```javascript
const arr = [3, 1, 4, 1, 5];
arr.sort(); // [1, 1, 3, 4, 5] (mutates original)
arr.sort((a, b) => b - a); // [5, 4, 3, 1, 1] (descending)
arr.reverse(); // [5, 1, 4, 1, 3] (mutates original)
[...arr].sort(); // non-mutating sort
```

## Array Slicing and Joining

slice(), join(), concat()

```javascript
const arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // [2, 3] (from index 1 to 3, exclusive)
arr.slice(-2); // [4, 5] (last 2 elements)
arr.join("-"); // "1-2-3-4-5"
arr.concat([6, 7]); // [1, 2, 3, 4, 5, 6, 7]
```

## Array Flattening and Copying

flat(), shallow copying, unique array

```javascript
// Flattening arrays
const nested = [1, [2, 3], [4, [5, 6]]];
const flat1 = nested.flat(); // [1, 2, 3, 4, [5, 6]] - one level
const flatAll = nested.flat(Infinity); // [1, 2, 3, 4, 5, 6] - all levels

// Shallow copying arrays
const arr = [1, 2, 3];
const copy1 = [...arr]; // spread operator
const copy2 = Array.from(arr); // Array.from()
const copy3 = arr.slice(); // slice()

// Converting array to Set (removes duplicates)
const arr = [1, 2, 2, 3, 3, 4];
const uniqueSet = new Set(arr); // Set {1, 2, 3, 4}
const uniqueArray = [...new Set(arr)]; // [1, 2, 3, 4]
```
