## Basic Document Elements

- !DOCTYPE, html, head, meta, title, link
- body

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

## Page Layout Elements (HTML5 Semantic)

- header, nav, ul, li
- main, section, article, header, h1
- aside, h3, p
- footer

```html
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <article>
      <header>
        <h1>Article Title</h1>
        <time datetime="2025-09-27">September 27, 2025</time>
      </header>
      <p>Article content...</p>
      <footer>
        <p>Author: John Doe</p>
      </footer>
    </article>
  </section>

  <aside>
    <h3>Sidebar</h3>
    <p>Related links or ads</p>
  </aside>
</main>

<footer>
  <p>&copy; 2025 Company Name</p>
</footer>
```
