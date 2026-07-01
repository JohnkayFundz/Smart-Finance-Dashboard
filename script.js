Browser
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
    └── Render UIUI
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
refresh()export function setTheme(theme) {
    state.theme = theme;
    applyTheme(theme);
}

export function toggleTheme() {
    setTheme(
        state.theme === "light" ? "dark" : "light"
    );
}js/
│
├── main.js          # Entry point
├── app.js           # Application lifecycle
│
├── core/            # State, storage, constants, helpers
├── features/        # Budgets, transactions, dashboard, theme
├── services/        # Charts, exports, reports
└── shared/          # Shared UI components and utilities
