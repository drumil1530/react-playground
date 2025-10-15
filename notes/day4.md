# 🧩 Day 4 — useContext & Custom Hooks

**Date:** 15 Oct 2025
**Focus:** Exploring `useContext` for global state management and building reusable custom hooks.

---

## ✅ Completed Tasks

1. **useContext Practical**

   - Learned the **flow of Context API**:

     - `createContext()` defines the context structure and sets the default value.
     - `Context.Provider` shares data via its `value` prop to the entire component tree.
     - `useContext()` allows any nested component to consume those shared values.
   - Practically implemented:

     - One parent component defining and providing context.
     - Multiple child components reading and updating that same context.
   - Understood that **context re-renders all consumers** when the provided value changes.
   - Realized how it helps eliminate **prop drilling** and maintain a cleaner data flow.

2. **Custom Hooks Exploration**

   - Created multiple **reusable logic hooks** to replace repetitive logic inside components:

     - `useToggle` → toggles a boolean value.
     - `useCounter` → manages numeric state with `increment`, `decrement`, and `reset`.
     - `useLocalStorage` → syncs state with `localStorage`, automatically persisting values.
     - `useWindowSize` → tracks live `width` and `height` of the browser window.
     - `useFetch` → fetches API data with error handling.
     - `useDebounce` → delays state updates to prevent unnecessary re-renders or fetches.
   - Combined `useDebounce` + `useFetch` → created **debounced API fetching** logic.
   - Practiced modular design — one hook focuses on *what* to do, another on *when* to do it.

---

## 🧠 Key Learnings & Realizations

1. **`useContext` is React’s built-in dependency injection.**
   It allows passing state or functions deeply without intermediate props.

2. **Provider and consumer separation matters.**
   Keeping context logic and consumer logic separate helps maintain clarity.

3. **Hooks are not just shortcuts — they’re abstractions of behavior.**
   Each hook defines a pattern that can be reused in multiple places.

4. **Composition > Configuration.**
   Instead of packing everything inside one hook, composing small hooks gives better flexibility.

5. **`useEffect` timing in hooks.**
   Realized how `useEffect` controls when things like fetch or localStorage updates happen.

6. **Debouncing concept in React.**
   Instead of delaying API inside `useFetch`, handling it through `useDebounce` provides control and separation of concerns.

---

## ⚙️ Reflection

Today’s session felt like a major structural leap.
After days of learning individual hooks, **I finally built my own** — ones that *feel native to React itself.*
`useContext` made data sharing intuitive, and writing custom hooks like `useDebounce` and `useLocalStorage` felt like crafting tools I can use forever.

The best part?
The code now looks *cleaner, smaller, and smarter* — logic extracted, components focused only on UI.
Even though my mind feels full, it’s the good kind of full — the “I’ve actually understood how React breathes” kind.

---

## 🔜 Next Steps

- Experiment with combining hooks (`useLocalStorage` + `useContext`).
- Start preparing for **data fetching and API integration** in upcoming projects.

---

> “Understanding React hooks is like understanding thought itself — small, reusable, and composable.”
