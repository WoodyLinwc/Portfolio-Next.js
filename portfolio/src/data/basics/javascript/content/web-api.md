## Local Storage & Session Storage

- Persistent client-side data storage that survives page reloads and browser sessions.

```javascript
// localStorage persists until manually cleared
localStorage.setItem("user", JSON.stringify({ name: "Alice", id: 123 }));
const user = JSON.parse(localStorage.getItem("user"));
localStorage.removeItem("user");
localStorage.clear(); // removes all

// sessionStorage persists only for the browser tab session
sessionStorage.setItem("tempData", "value");
const temp = sessionStorage.getItem("tempData");

// Storage events (listen for changes in other tabs)
window.addEventListener("storage", (e) => {
  console.log("Storage changed:", e.key, e.newValue);
});
```

## URL & URLSearchParams

- Modern way to work with URLs and query parameters.

```javascript
// URL manipulation
const url = new URL("https://example.com/path?name=john&age=30");
console.log(url.hostname); // 'example.com'
console.log(url.pathname); // '/path'
console.log(url.search); // '?name=john&age=30'

// URLSearchParams for query string manipulation
const params = new URLSearchParams(url.search);
params.get("name"); // 'john'
params.set("city", "NYC");
params.delete("age");
params.toString(); // 'name=john&city=NYC'

// Common pattern: updating URL without page reload
const newUrl = new URL(window.location);
newUrl.searchParams.set("tab", "profile");
window.history.pushState({}, "", newUrl);
```

## Intersection Observer

- Efficiently observe when elements enter/exit the viewport - great for **lazy loading** and **infinite scroll**.

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Element is visible:", entry.target);
        // Lazy load image
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1, // trigger when 10% visible
    rootMargin: "50px", // trigger 50px before entering viewport
  }
);

// Observe multiple elements
document.querySelectorAll("img[data-src]").forEach((img) => {
  observer.observe(img);
});
```

- **Mutation Observer**: Watch for DOM changes - useful for responding to dynamic content updates.
- **Geolocation API**: Access user's location (requires user permission).
- **Clipboard API**: Modern way to interact with the system clipboard.
- **Notification API**: Show desktop notifications (requires user permission).
- **File API**: Handle file uploads and reading file contents.
- **Resize Observer**: Efficiently observe element size changes without polling.
- **Page Visibility API**: Detect when page becomes visible/hidden (useful for pausing video, animations).
- **History API**: Manipulate browser history without page reloads (Single Page Applications).
