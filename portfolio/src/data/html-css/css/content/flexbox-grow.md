## Flexbox Layout

3 key properties for space distribution

- **flex-grow**
- **flex-shrink**
- **flex-basis**: decides grow or shrink

```css
.container {
  display: flex; /* default: row */
}

/*  flex-grow flex-shrink flex-basis*/
.A {
  flex: 1 1 300px; /* width = 300px starting point */
}
```

## Space Enough: flex-grow

- remaining = container width - total basis
- individual space = grow / total grow \* remaining
- final width = flex-basis + individual space

## Space Not Enough: flex-grow

- excess = container - total basis
- individual space = grow / total grow \* remaining
- final width = flex-basis - individual space
