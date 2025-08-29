-   **DOM**: The **programming interface** for HTML documents - represents the page structure as a **tree of objects** that JavaScript can manipulate.
-   **DOM Node**: An individual element in the DOM tree (elements, text, attributes, etc.).

```javascript
// Selecting elements
const button = document.getElementById("myButton");
const paragraphs = document.querySelectorAll("p");
const firstDiv = document.querySelector(".container");

// Manipulating elements
button.textContent = "Click me!";
button.style.backgroundColor = "blue";
button.classList.add("active");

// Creating and adding elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph";
document.body.appendChild(newParagraph);
```

-   **Event**: An action or occurrence detected by the browser (clicks, key presses, page loads, etc.).
-   **Event Handler**: A function that responds to a specific event.
-   **Event Listener**: A method to **register event handlers** that listen for specific events on DOM elements.

```javascript
// Method 1: Inline event handler (avoid this)
// <button onclick="handleClick()">Click</button>

// Method 2: Property assignment
button.onclick = function () {
    console.log("Button clicked!");
};

// Method 3: Event listeners (preferred)
button.addEventListener("click", function () {
    console.log("Button clicked with listener!");
});

// Multiple listeners on same element
button.addEventListener("click", handler1);
button.addEventListener("click", handler2);
button.addEventListener("mouseenter", handler3);
```

-   **Event Object**: An object containing information about the event that occurred (target, type, coordinates, etc.).

```javascript
<button id="myButton">Click Me!</button>;
const button = document.getElementById("myButton");

button.addEventListener("click", function (event) {
    console.log("event.target:", event.target); // <button id="myButton">Click Me!</button>
    console.log("event.type:", event.type); // "click"
    console.log("event.target.innerText:", event.target.innerText); // "Click Me!"

    console.log("event.preventDefault()"); // Stops default behavior
    console.log("event.stopPropagation()"); // Stops event bubbling
});
```
