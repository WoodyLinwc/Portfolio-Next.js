## Flexbox Wrap

By default, Flexbox try to put all element in the same line, **flex-wrap: nowrap**;

```css
.container {
  display: flex;

  /*  allow elements to put in next line, and align-content */
  flex-wrap: wrap;

  /*  properties similar justify-content: flex-end, center space-between, space-around... handle space between lines*/
  align-content: flex-start;
}
```
