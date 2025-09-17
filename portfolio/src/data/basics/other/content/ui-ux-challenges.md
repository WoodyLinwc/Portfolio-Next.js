## Rendering Large Lists

- **Virtualization**: Only render items currently visible in the viewport plus a **small buffer**
- **React Native**: Use `FlatList` instead of `ScrollView` - it automatically virtualizes and provides built-in optimizations like `getItemLayout` for consistent item heights. There's `FlashList` performs well without needing `getItemLayout`, it can **recycle views** which consumes less memory.
- **React Web**: Use libraries like `react-window` or `react-virtualized`
- **Server-Side Pagination**: Backend returns only **a slice of data** (limit + offset or cursor). REST APIs, `GET /users?page=2&limit=20`
- **React Query**: Provides a clean API. I usually combine `useQuery` with page numbers for classic pagination, or `useInfiniteQuery` for infinite scroll, **pair it** with a UI component `react-window` or `FlatList`

## Janky Animations & Gestures

Sluggish UI and animation.

- **React Native**: Use `react-native-reanimated` v2+ for **native-driven animations** that run on the **UI thread**, not JS thread which is for state changes and bussiness logic.
- **React Web**: CSS transitions and animations for simple cases, `requestAnimationFrame` for complex JavaScript animations, a browser API requests that the browser calls a specified function to update an animation **before the next repaint**.
- use `transform` and `opacity` properties (they don't trigger **reflow/repaint**), implement proper gesture handling with libraries like `react-native-gesture-handler`
- **Reflow** (or Layout): recalculate the size and position of elements on the page, `width`, `height`, `padding`, or `margin`.
- **Repaint**: A repaint is when the browser re-draws the pixels of an element on the screen, `background-color` or `border-color`.

## Screen Fragmentation

Inconsistency of layout across different devices

- **Flexbox**: Use flexible layouts that adapt to container size, **simplifying alignment**
- **Responsive design**: **Media queries** in React web, `Dimensions` API in React Native

```
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

- **Relative units**: Use percentages, `vh/vw` units instead of fixed pixel values
- **Safe areas**: Handle notches and status bars with `react-native-safe-area-context`

## Accessibility (a11y)

Excludes users with disabilities

- **Semantic markup**: Use proper HTML elements (`button`, `input`, `nav`) instead of generic `div`s
- **ARIA attributes**: `aria-label`, `aria-describedby`, `role` attributes for complex components. For example, `<button aria-label="Close"></button>`
- **React Native**: Use accessibilityLabel, accessibilityRole, accessibilityHint
- **Focus management**: Ensure keyboard navigation works, manage focus **after route changes**
- Testing: Use screen readers (VoiceOver, TalkBack), automated tools like eslint-plugin-jsx-a11y

## Navigation & Routing

Confusing UX

- **React Web**: React Router v6 with proper route nesting, **lazy loading**, and **error boundaries**.
- **React Native**: React Navigation v6 with stack, tab, and drawer navigators

## Internationalization (i18n) & Localization (l10n)

## UI Consistency Across Platforms

iOS vs Android vs Web differences

- **Platform-specific styling**: Use `Platform.OS` in React Native, CSS media queries for responsive web design
- **Design systems**: Implement component libraries that adapt to platform conventions (Material-UI for Android-like web, native components for mobile)
- **Conditional rendering**: Show platform-appropriate components (iOS action sheets vs Android bottom sheets)
