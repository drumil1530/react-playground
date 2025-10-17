# 🧩 Day 5 — useReducer Exploration

**Date:** 17 Oct 2025
**Focus:** Understanding `useReducer` through a Todo Management app and comparing it with `useState`.

---

## ✅ Completed Tasks

1. **Todo App (useReducer Version)**

   - Implemented a Todo Management app using `useReducer`.
   - Defined a reducer function handling 3 action types:

     - `ADD_TODO`: Adds a new task.
     - `TOGGLE_TODO`: Marks a task as complete/incomplete.
     - `DELETE_TODO`: Removes a task by index.

   - Used `useRef` for accessing input value (instead of local component state).
   - Encountered a key realization: reducer-based state changes are more **structured**, but not necessarily simpler.

   ```tsx
   const [state, dispatch] = useReducer(ToDo, []);
   dispatch({ type: 'ADD_TODO', value: inputRef.current?.value });
   ```

   - Initially passed `event` into action for `preventDefault()`, but realized later that this side-effect doesn’t belong in reducers (they should remain pure).

---

## 🧠 Key Learnings & Realizations

1. **Reducers introduce structure, not simplicity.**

   - For small apps, `useState` feels clearer.
   - For large, complex state transitions (multiple related updates), reducers shine.

2. **Reducer = pure function.**

   - Should only take the current state and action → return new state.
   - No DOM operations, async logic, or side effects inside it.

3. **Dispatch is conceptually like `setState`, but smarter.**

   - You describe _what_ happened (via action), not _how_ to update.
   - Great for team projects where multiple components need to trigger the same update logic.

4. **useRef can simplify controlled input logic.**

   - Avoids unnecessary re-renders for input typing.
   - However, not ideal for validation-heavy or reactive input flows.

5. **React doesn’t re-render on reducer logic alone.**

   - It re-renders only when the returned state actually differs (same as `useState`).

---

## ⚙️ Reflection

At first glance, `useReducer` felt unnecessarily complex — especially for something as simple as a Todo list.
But once the mental model clicked, it became clear that reducers are _a design choice_, not a shortcut.

They are better suited for situations like:

- Multiple actions modifying a single state object.
- Shared state transitions across components.
- Logic that might evolve or grow over time (e.g., a dashboard, form manager, or cart system).

For simple lists or toggles, `useState` remains more elegant.

---

## 🔜 Next Steps

- Try a slightly more complex example with multiple related states (e.g., a Counter + History reducer).
- Observe when reducer logic _actually_ makes code easier to manage.
- Move to **useContext** experiments next (since you already discovered a re-rendering issue there).

---

> “`useReducer` doesn’t make state simpler — it makes logic more predictable. The trade-off is verbosity for clarity.”
