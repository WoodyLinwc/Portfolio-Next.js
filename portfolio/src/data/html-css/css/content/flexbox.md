## Flexbox

Center an element

```css
.container {
  display: flex; /* default flex-direction: row */
  justify-content: center; /* main axis*/
  align-items: center; /* cross axis*/
}
```

## Main Axis Controller: justify-content

Alignment

- **flex-start** (default): 123------
- **flex-end**: ------123
- **center**: ---123---

Space

- **space-between**: 1---2---3
- **space-around**: -1--2--3-
- **space-evenly**: --1--2--3--

## Cross Axis Controller: align-items

- **stretch** (default): stretch to fill the container’s cross-axis size
- **flex-start**:
- **flex-end**:
- **center**:

```css
.special {
  /*  ignore align-items */
  align-self: flex-start;
}
```

A good practice

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
