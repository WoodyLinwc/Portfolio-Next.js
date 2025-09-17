## Re-renders / State Management

Slow UI, wasted renders

- React is **unidirectional**, from parent to child, so if parent re-render then it's child also re-render.
- **React.memo**: Wrap **child components** to prevent re-renders when props haven't changed
- **useMemo**: Memoize expensive calculations **value** that don't need to run on every render
- **useCallback**: Memoize **function** references to prevent child re-renders caused by new function instances
- State management libraries: Redux Toolkit, Zustand, or Jotai for predictable state updates and selective subscriptions
- **React DevTools Profiler**: Identify performance bottlenecks and unnecessary re-renders

## Large Assets & Images

Loading high-resolution images, consume significant bandwidth and memory, especially problemetic on mobile network and device.

- **Lazy loading**: Load images only when they enter the viewport using Intersection Observer API or libraries like `react-lazyload`
- Responsive images: Serve different image sizes based on device screen size and pixel density
- **Image optimization**: Use modern formats (**WebP**, **AVIF**), compress images, use appropriate quality settings.
- **CDN implementation**: Serve assets from geographically distributed servers with caching
- **Progressive loading**: Show low-quality placeholders while high-quality images load
- React Native specific: Use `react-native-fast-image` for better caching and performance

## Memory Leaks

Crashes, slowdowns

- JavaScript is **garbage collected**, but certain patterns prevent garbage collection.
- **Cleanup in useEffect**: Always return cleanup functions for subscriptions, timers, and listeners
- **AbortController**: Use for cancelling fetch requests when components unmount
- **Weak references**: Use WeakMap/WeakSet for temporary object relationships
- **Subscription management**: Unsubscribe from observables, remove event listeners
- Memory profiling: Use browser DevTools Memory tab or React Native Flipper to identify leaks

## App Size & Bundle Bloat

Slower installs, longer loads

- **Code splitting**: Split application into chunks that load on-demand using `React.lazy()` and **dynamic imports**
- **Tree-shaking**: Configure bundlers (Webpack, Metro) to eliminate dead code
- **Bundle analysis**: Use tools like webpack-bundle-analyzer or react-native-bundle-visualizer
- **Modular imports**: Import only needed functions (`import { debounce } from 'lodash/debounce`' instead of `import _ from 'lodash'`)
- **Dependency audit**: Regularly review and remove unused dependencies, choose lighter alternatives
- **Asset optimization**: Compress images, use SVGs for icons, minimize fonts

## Heavy JavaScript Computation

JavaScript is **single-threaded**, so heavy computations block UI updates, user interactions

- **Web Workers (Web)**: Browser API, move heavy computations to background threads that don't block UI
- **Background threads (React Native)**: Use libraries like react-native-worker-threads or native modules
- **Time-slicing**: Break large computations into smaller chunks using `requestIdleCallback` or `setTimeout`
- **Memoization**: Cache computation results to avoid repeating expensive operations
- Algorithmic optimization: Use more efficient algorithms and data structures
- Progressive processing: Show progress indicators and process data incrementally
