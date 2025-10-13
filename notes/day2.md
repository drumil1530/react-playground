# 🧩 Day 2 — useEffect, useContext & useRef Exploration

**Date:** 13 Oct 2025
**Focus:** Understanding `useEffect`, `useContext` (conceptually), and `useRef` through small experiments and coding tasks.

---

## ✅ Completed Tasks

1. **useEffect Experiments**

   - Practiced dependency arrays, cleanup functions, and multiple effects.
   - Applied `useEffect` for:

     - Fetching APIs with Axios (first-time use).
     - Managing `setInterval` for timers and clearing them to avoid stacking issues.
   - Learned that:

     - Main callback of `useEffect` cannot be async; async operations must be inside a nested function.
     - Effects run after rendering, so immediate changes inside them may not reflect on first render (example: theme toggling issue).
   - Fixed previous mistakes from early React experiments with stacked intervals.

2. **Button Component Refactor**

   - Made it more modular and user-friendly.
   - Added support for:

     - Variants, radius, fonts, padding, cursor styles.
     - Runtime style overrides.
   - Improved code readability and future-proofing for theming.

3. **useContext (Conceptual)**

   - Learned the purpose of `useContext`: avoiding prop drilling and sharing global state.
   - Explored potential use-cases (theme, auth, language, settings).
   - Couldn’t practice in the current app since all components are modular and self-contained.
   - Added semantic custom theme for light/dark switching in code to reinforce concept.

4. **useRef Experiments**

   - Explored two main use cases:

     1. **DOM access:**

        - Auto-focus input on button click (`AutoFocusInput` component).
     2. **Persistent mutable values:**

        - Stopwatch timer using interval ID (`StopwatchTimer` component).
        - Render count tracker for components (`ToDo` component).
   - Observed differences from `useState`:

     - `useState` is reactive — triggers re-renders on update.
     - `useRef` is persistent but non-reactive — holds values across renders without causing updates.
   - Learned subtle behaviors:

     - Current DOM value (`inputRef.current.value`) doesn’t automatically trigger UI update.
     - Render count increments each re-render and React may double-render in development due to `StrictMode`.

5. **Other Notes**

   - Added **Remixicon** for UI icons.
   - Practiced small UI enhancements using Tailwind.

---

## 🧠 Key Learnings & Realizations

1. **useEffect**

   - Cleanup is crucial to avoid memory leaks and stacked intervals.
   - Effects run *after rendering*, so initial values may not reflect immediately.
   - Async API calls require an internal async function.

2. **useContext**

   - Conceptually powerful, but sometimes unnecessary for small, modular apps.
   - Best used for global state like themes, auth, or settings.

3. **useRef**

   - Can store DOM nodes or mutable values across renders.
   - Does not trigger re-renders (unlike `useState`).
   - Acts like a static variable in a functional component.
   - Perfect for tracking intervals, render counts, or previous values.

4. **React Dev Behavior**

   - Components may render twice in development mode due to `StrictMode`.
   - `useRef` helps track persistent values across these renders without causing extra re-renders.

---

## ⚙️ Reflection

- Explored **effects, context, and references** systematically.
- Debugging timers and render counts deepened understanding of React’s rendering model.
- Realized that **well-structured modular components** can eliminate the need for context in small apps.
- The combination of `useEffect` + `useRef` solved real issues I encountered in earlier React experiments (like stacked intervals and uncontrolled inputs).

---

## 🔜 Next Steps

- Move to **more practical useContext examples** when a real shared state exists.
- Explore **useRef for previous values** or animation-related tasks.
- Continue building reusable, modular components for future projects.
- Start **Day 3** with deeper practice on `useContext` and real shared state scenarios.

---

> “Side-effects are not just effects; they teach you how React thinks — after the render.”
