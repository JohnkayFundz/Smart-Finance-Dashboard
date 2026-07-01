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
    └── Render UIjs/
│
├── main.js                 # Entry point
├── app.js                  # Application lifecycle
│
├── core/
│   ├── state.js
│   ├── storage.js
│   ├── constants.js
│   └── helpers.js
│
├── features/
│   ├── budgets/
│   ├── transactions/
│   ├── dashboard/
│   └── theme/
│
├── services/
│   ├── chartService.js
│   ├── exportService.js
│   └── reportService.js
│
└── shared/
    ├── modal.js
    └── ui.jsexport function setTheme(theme) {
    state.theme = theme;
    applyTheme(theme);
}

export function toggleTheme() {
    setTheme(
        state.theme === "light" ? "dark" : "light"
    );
}budget.js
      │
      ▼
state updated
      │
      ▼
dispatch("state:changed")
      │
      ▼
app.js listens
      │
      ▼
refresh()
