# 🧩 Day 3 — Optimization Hooks & Context Overview

**Date:** 14 Oct 2025
**Focus:** Exploring `React.memo`, `useMemo`, and `useCallback` for render optimization and gaining conceptual clarity on `useContext`.

---

## ✅ Completed Tasks

1. **`React.memo` Behavior**

   - Created multiple child components (`TestComponent1`, `TestComponent2`) to observe re-renders.
   - Confirmed that `React.memo` prevents re-renders unless props change.

2. **`useMemo` Experiment — Expensive Sorting**

   - Built a large randomized array and sorted it inside `useMemo` to prevent recomputation.
   - Verified that cached results persist until a dependency changes.
   - Compared with a non-memoized version to see performance difference.
   - Added a parent-controlled `filterFn` to demonstrate dependency-based re-execution.

3. **`useCallback` Practice — Stable Function Reference**

   - Wrapped the filter function inside `useCallback` and passed it to a memoized child.
   - Observed that without `useCallback`, the child re-rendered on every parent state change.
   - With `useCallback`, it only re-rendered when the filter’s dependency (`minValue`) changed.

4. **Integration of All Three**

   - Combined `React.memo`, `useMemo`, and `useCallback` in one small demo.
   - Verified how they complement each other — memoized components, values, and functions all stabilize rendering when used correctly.

---

## 🧠 Key Learnings & Realizations

1. **`React.memo`**

   - Prevents re-renders when props are unchanged.
   - Best for static UI blocks like buttons, modals, or icons.

2. **`useMemo`**

   - Caches the **result** of expensive computations.
   - Useful for sorted lists, derived data, or complex calculations.

3. **`useCallback`**

   - Caches the **function reference** itself.
   - Prevents unnecessary re-renders in memoized children receiving callbacks.

4. **They all depend on dependency arrays.**
   Any change there re-triggers their internal logic.

5. **Practical use-case awareness.**

   - Most real-world apps rarely need heavy optimization.
   - React already batches updates efficiently.
   - Premature optimization adds mental load — use profiling to confirm need.

6. **Component design matters more.**
   Small, focused components naturally limit unnecessary renders.

---

## ⚙️ Reflection

Today’s session tied everything together — from understanding how React re-renders to seeing how memoization can control it.
While `useMemo` and `useCallback` look powerful, they’re not magic speed boosters. They help only when components truly face heavy computations or redundant re-renders.

Learning this clarified a major misconception: optimization hooks aren’t about making every component “fast,” but about avoiding wasted work in the few that actually need it.
It felt satisfying to *see* optimization rather than just reading about it.

---

## 🔜 Next Steps

- Implement `useContext` tomorrow for shared state without prop drilling.

---

> “Optimization isn’t about speed — it’s about knowing where not to waste energy.”
