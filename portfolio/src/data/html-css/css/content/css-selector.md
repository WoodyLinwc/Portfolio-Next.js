## Basic Selectors

**Universal Selector(\*)**, **Type Selector**, **Class Selector(.)**, **ID Selector**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 2em;
}

.btn {
  padding: 10px 15px;
  border: none;
}

#header {
  background-color: navy;
}
```

## Attribute Selectors

```css
[disabled] {
  opacity: 0.5;
}

[type="text"] {
  border: 1px solid #ccc;
}

/* Starts with */
[href^="https"] {
  color: green;
}
```

## Combinators

Descendant Combinator (space), Child Combinator (>), Adjacent Sibling Combinator (+), General Sibling Combinator (~)

```css
article p {
  line-height: 1.6;
}
```

## Pseudo-Classes

select elements based on their **state** or **position**

```css
a:hover {
  color: red;
}
a:visited {
  color: purple;
}
li:first-child {
  font-weight: bold;
}
```

## Pseudo-Elements

lets you **style a portion** of an element

```css
p::first-letter {
  font-size: 3em;
  float: left;
}
```
