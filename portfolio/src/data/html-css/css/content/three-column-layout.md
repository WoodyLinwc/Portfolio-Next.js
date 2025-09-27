## Three Column Layout

```html
<div class="container">
  <div class="left">Left</div>
  <div class="middle">Middle</div>
  <div class="right">Right</div>
</div>
```

```css
.container {
  display: flex;

  /* center screen */
  justify-content: center;
}

.left,
.right {
  width: 200px;

  /*  prevent shrinking when screen size decrease*/
  flex-shrink: 0;
  min-width: 200px;
}

.middle {
  flex-grow: 1; /* fill the remaining space */

  /* prevent expanding when screen size increase */
  max-width: 1000px;
}
```
