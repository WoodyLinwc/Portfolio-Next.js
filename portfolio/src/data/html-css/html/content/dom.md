## Convert Node List to Array

```javascript
const pArray = [...document.querySelectorAll("p")];

console.log(pArray);
// [
//   <p id="first">First paragraph</p>,
//   <p class="highlight">Second paragraph</p>,
//   <p><strong>Third paragraph</strong></p>
// ]

console.log(pArray.length); // 3

console.log(pArray[0].id); // "first"

console.log(pArray[1].className); // "highlight"

console.log(pArray[2].textContent); // "Third paragraph", preferred

console.log(pArray[2].innerHTML); // "<strong>Third paragraph</strong>"
```

## .innerHTML vs .outerHTML vs .innerText vs .textContent

```javascript
<div id="example">
    Hello <span style="display:none">Hidden</span> <b>World</b>!
</div>;

const el = document.getElementById("example");

console.log(el.innerText); // "Hello World!"  (the <span> is hidden), what user actually sees

console.log(el.textContent); // "Hello Hidden World!", fastest

console.log(el.innerHTML);
// "Hello <span style="display:none">Hidden</span> <b>World</b>!"

console.log(el.outerHTML);
// "<div id="example">Hello <span style="display:none">Hidden</span> <b>World</b>!</div>"
```
