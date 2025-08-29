## Event Flow has 3 Phase

-   **Capture Phase**: Event travels **down** from document **root to target** element.
-   **Target Phase**: Event **reaches the actual** target element
-   **Bubble Phase**: Event travels up from **target element back** to document root

**Default behavior**: Events **bubble up** (child → parent → grandparent)

**Bubbling**: The default event listener behavior is bubbling, which enables **event delegation**

## Event Delegation

Event delegation is a technique where instead of attaching an event listener to **each child element**, you attach a **single event listener** to a common ancestor and use the event’s **bubbling** to detect which child triggered it.

```javascript
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<script>
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('You clicked:', e.target.innerText);
  }
});
</script>
```

**stopPropagation()**: `event.stopPropagation()` **stops the bubbling**, The event will not reach parent elements anymore. For example,

A modal has a close button — clicking the button shouldn’t also trigger the modal’s background click handler.

**event.preventDefault()**: Stops the **browser's default behavior** for that event.

```javascript
// prevent page refresh
form.addEventListener("submit", function (event) {
    event.preventDefault();
});

// stop navigation
link.addEventListener("click", function (event) {
    event.preventDefault();
});

// right click - disable context menu, no Back, Reload, Inspect
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
```
