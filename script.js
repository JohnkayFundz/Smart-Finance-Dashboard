Browser loads app
        │
        ▼
app.initialize()
        │
        ├──► load state
        ├──► apply theme
        ├──► calculate dashboard
        ├──► build charts
        └──► render UI

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
app.refresh()
        │
        ├──► save state
        ├──► update dashboard
        ├──► update charts
        ├──► apply theme (if changed)
        └──► render UIexport function initialize() {
    refreshTheme();
    refreshDashboard();
    refreshCharts();
    refreshUI();
}import { state } from "../../core/state.js";

export function applyTheme(theme = state.theme) {
    document.documentElement.dataset.theme = theme;
}

export function toggleTheme() {
    state.theme = state.theme === "light"
        ? "dark"
        : "light";

    applyTheme();
}js/
├── app.js
├── core/
├── features/
├── services/
└── shared/
