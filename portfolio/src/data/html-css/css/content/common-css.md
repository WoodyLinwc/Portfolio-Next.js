## Common CSS Properties Reference

- color, background-color, font-weight, text-align, display, cursor, border, box-sizing

```css
.container {
  color: red; /* text color */
  background-color: lightgray;
  background-image: url("image.jpg");

  font-size: 16px;
  font-weight: bold;

  text-align: center; /* left, right, center, justify */
  text-decoration: underline; /* none, underline, overline, line-through */
  text-transform: uppercase; /* lowercase, uppercase, capitalize */

  /* same for height */
  width: 100px;
  max-width: 1000px;
  min-width: 1000px;
}
```

```css
.element {
  /*  same for padding */
  margin: 20px; /* All sides */
  margin: 10px 20px; /* Top/bottom, Left/right */
  margin: 10px 15px 20px 25px; /* Top, Right, Bottom, Left (margin-bottom etc)*/

  border: 1px solid black; /* width style color, none */
  border-radius: 5px;

  display: block; /* block, inline, inline-block, none */
  display: flex; /* Flexbox */
  display: grid; /* CSS Grid */
  visibility: hidden; /* visible, hidden */
  position: static; /* static, relative, absolute, fixed, sticky */

  cursor: pointer; /* default, pointer, text, wait, help, not-allowed */

  box-sizing: content-box; /* Default - padding/border added to width */
  box-sizing: border-box; /* Width includes padding and border */
}
```

```
    /* Relative units */
    em    /* Relative to parent font-size */
    rem   /* Relative to root font-size */
    %     /* Percentage of parent */
    vw    /* Viewport width (1vw = 1% of viewport width) */
    vh    /* Viewport height (1vh = 1% of viewport height) */
```
