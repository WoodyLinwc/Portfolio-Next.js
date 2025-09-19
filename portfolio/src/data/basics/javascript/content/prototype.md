- **Prototype**: An object directly inherit from other object. An object can be designated as a prototype for another object.
- **Prototype Chain**: The **lookup mechanism** JavaScript uses to find properties - if not found on the object, it looks up the prototype chain.

The internal property that points to an object's prototype (accessed via `__proto__` or `Object.getPrototypeOf()`).

## Every Object Has a Prototype:

```javascript
const obj = {};
console.log(obj.__proto__); // Object.prototype
console.log(Object.getPrototypeOf(obj)); // Object.prototype (preferred way)
console.log(obj.__proto__ === Object.prototype); // true

const arr = [];
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null (end of chain)
```

- **Constructor Function**: A function used with `new` keyword to create objects and set up prototype relationships.

`prototype` property: A property on constructor functions that becomes the prototype for instances created by that constructor.

## ES6 Class Syntax:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`;
  }

  fetch() {
    return `${this.name} fetches the ball`;
  }
}

const buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.speak()); // "Buddy barks"
console.log(buddy.sleep()); // "Buddy is sleeping"

// Under the hood, this creates the same prototype chain as before!
```

After React 16.8, it introduced Hooks.
