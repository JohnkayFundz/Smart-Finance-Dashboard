Application starts
        │
        ▼
initialize()
        │
        ├── Load modules
        ├── Apply initial theme
        ├── Render initial dashboard
        ├── Create charts
        └── Render UI

──────────────────────────────

User changes data
        │
        ▼
refresh()
        │
        ├── Save state
        ├── Recalculate dashboard
        ├── Update charts
        ├── Apply theme
        └── Update UIexport function setTheme(theme) {
    state.theme = theme;
    applyTheme(theme);
}

export function toggleTheme() {
    setTheme(
        state.theme === "light" ? "dark" : "light"
    );
}Browser
   │
   ▼
main.js
   │
   ▼
app.initialize()
   │
   ├── refreshTheme()
   ├── refreshDashboard()
   ├── refreshCharts()
   └── refreshUI()

────────────────────────────────────

User Action
   │
   ▼
budget-ui.js / transaction-ui.js
   │
   ▼
budget.js / transaction.js
   │
   ▼
state.js
   │
   ▼
app.refresh()
   │
   ├── refreshStorage()
   ├── refreshDashboard()
   ├── refreshCharts()
   ├── refreshTheme()
   └── refreshUI()js/
├── main.js        ← Entry point
├── app.js         ← Application lifecycle
├── core/
├── features/
├── services/
└── shared/
