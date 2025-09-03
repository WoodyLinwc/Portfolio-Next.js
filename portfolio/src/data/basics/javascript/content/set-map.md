## Set Creation and Methods

add(), has(), delete(), clear(), size

```javascript
const set = new Set([1, 2, 3, 3]); // {1, 2, 3}
set.add(4); // add element

set.has(3); // true
set.delete(2); // remove element
set.clear(); // remove all
set.size; // number of elements

Array.from(set); // convert to array
[...set]; // spread to array
```

## Set Operations

- Union, Intersection, Difference

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// Union
const union = new Set([...set1, ...set2]); // {1, 2, 3, 4, 5}

// Intersection
const intersection = new Set([...set1].filter((x) => set2.has(x))); // {3}

// Difference
const difference = new Set([...set1].filter((x) => !set2.has(x))); // {1, 2}
```

## Map Creation and Methods

set(), get(), has(), delete(), clear(), size

```javascript
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.get("key1"); // 'value1'

map.has("key1"); // true
map.delete("key1"); // remove entry
map.clear(); // remove all
map.size; // number of entries

// From array of arrays
const map2 = new Map([
  ["a", 1],
  ["b", 2],
]);
```

## Map Iteration

for...of, forEach()

```javascript
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
for (const [key, value] of map) {
  /* iterate entries */
}
for (const key of map.keys()) {
  /* iterate keys */
}
for (const value of map.values()) {
  /* iterate values */
}

map.forEach((value, key) => {
  /* iterate */
});
```

## Convert Map to Array to Object

- `Array.from(map) or [...map]`

```javascript
const objArr = Array.from(map, ([key, value]) => ({ key, value }));
console.log(objArr);
// [{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]
```
