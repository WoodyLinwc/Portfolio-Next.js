## Text Content Elements

- h1, h6, p, strong, pre, code

```html
<h1>Main Heading</h1>
<h6>Smallest Heading</h6>

<p>Regular paragraph text</p>
<strong>Important text (bold)</strong>
<em>Emphasized text (italic)</em>
<pre>
    Preformatted text
    preserves   spaces
    and line breaks
</pre>

<code> function example() { console.log("Hello World"); } </code>
```

## Unordered & Ordered Lists

- ul, ol, li

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>
    Third item
    <ul>
      <li>Nested item</li>
      <li>Another nested item</li>
    </ul>
  </li>
</ul>

<ol type="a">
  <li>Item a</li>
  <li>Item b</li>
</ol>
```

## Links & Media

- a herf, img src, video controls, source

```html
<a href="https://example.com">External link</a>
<a href="/page.html">Internal link</a>
<a href="#section">Anchor link</a>

<img src="image.jpg" alt="Description of image" width="300" height="200" />
<video controls width="400" height="300">
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video element.
</video>
```

## Tables

- table, caption
- thead, tr, th
- tbody, tr, td

```html
<table>
  <caption>
    Month
  </caption>
  <thead>
    <tr>
      <th>Month</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>January</td>
    </tr>
    <tr>
      <td>Febuary</td>
    </tr>
  </tbody>
</table>
```
