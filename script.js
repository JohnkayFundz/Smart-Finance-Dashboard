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
state updated
    │
    ▼
refresh()
    │
    ├── Persist state
    ├── Update dashboard
    ├── Update charts
    ├── Apply theme
    └── Render UIstate updated
      │
      ▼
state:changed
      ├── Dashboard updates
      ├── Charts update
      ├── Notifications update
      ├── Activity log updates
      ├── Analytics update
      └── Auto-savejs/
│
├── main.js                 # Entry point
├── app.js                  # initialize() & refresh()
│
├── core/
│   ├── state.js            # Global state
│   ├── storage.js          # Persistence
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
}
