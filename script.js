UI
 │
 ▼
Feature
 │
 ▼
State
 │
 ▼
dispatch("state:changed")
 │
 ▼
Event Listener
 │
 ▼
refresh()Browser
    │
    ▼
main.js
    │
    ▼
initialize()
    │
    ├── Load state
    ├── Apply theme
    ├── Calculate dashboard
    ├── Render charts
    └── Render UI

──────────────────────────────────────

User Action
    │
    ▼
budget-ui.js / transaction-ui.js
    │
    ▼
budget.js / transaction.js
    │
    ▼
state.js updated
    │
    ▼
refresh()
    │
    ├── Persist state
    ├── Update dashboard
    ├── Update charts
    ├── Apply theme
    └── Render UIexport function setTheme(theme) {
    state.theme = theme;
    applyTheme(theme);
}

export function toggleTheme() {
    setTheme(
        state.theme === "light" ? "dark" : "light"
    );
}js/
│
├── main.js
├── app.js
│
├── core/
│
├── features/
│
├── services/
│
└── shared/
