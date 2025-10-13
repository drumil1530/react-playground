# 🧭 Conventional Commit Style Guide — *for react-playground*

## 🔹 General Rule

Each commit message should be in the format:

```bash
<type>(optional scope): <short summary>

(optional longer description)
```

Example:

```bash
feat(todo): add edit feature to todo list

Refactored input handling and added state for edit mode.
```

---

## ⚙️ Common Types You’ll Use

| Type          | Meaning                                     | Typical Example                            |
| ------------- | ------------------------------------------- | ------------------------------------------ |
| **feat:**     | A new feature or functionality              | `feat(counter): add reset button`          |
| **fix:**      | A bug fix or patch                          | `fix(todo): correct task deletion logic`   |
| **chore:**    | Maintenance, dependencies, config, or setup | `chore: add remixicon dependency`          |
| **refactor:** | Code restructuring without feature change   | `refactor: simplify list rendering logic`  |
| **style:**    | Purely aesthetic changes (spacing, format)  | `style: format code using prettier`        |
| **docs:**     | Documentation or comments only              | `docs(readme): update project description` |
| **test:**     | Adding or updating tests                    | `test: add unit tests for todo utils`      |
| **build:**    | Build system or tooling change              | `build: configure Vite for production`     |
| **perf:**     | Performance optimization                    | `perf: optimize re-rendering in task list` |
| **ci:**       | Continuous Integration workflow changes     | `ci: add GitHub Actions for build`         |

---

## 🧩 Optional Scopes for You

Use `(scope)` when relevant — helps organize commits per component or section:

| Area       | Scope Example                      |
| ---------- | ---------------------------------- |
| Components | `(todo)`, `(navbar)`, `(counter)`  |
| Pages      | `(home)`, `(about)`                |
| Config     | `(vite)`, `(eslint)`, `(tailwind)` |
| Assets     | `(icons)`, `(images)`              |
| Docs       | `(readme)`, `(notes)`              |

Example:

```
chore(icons): add remixicon dependency
feat(todo): implement delete functionality
refactor(list): separate list item into new component
```

---

## ✨ Formatting Rules

* Use **present tense** — “add” not “added”, “fix” not “fixed”.
* Keep summary under **72 characters**.
* Use description block (optional) for explanation or reasons.
* Keep each commit focused on *one intent* (feature, fix, refactor, etc.)

---

## 🪶 Example Commit Flow for react-playground

```bash
feat(counter): add decrement functionality
fix(todo): correct index bug when deleting tasks
refactor(app): move components into separate folder
chore: add remixicon dependency
docs(notes): add day 1 learning notes
```

---

## 💡 Extra Tip — Commit Frequency

Since `react-playground` is a learning repo:

* Prefer **frequent, small commits** that reflect your learning steps.
* Each feature or small improvement = one commit.
