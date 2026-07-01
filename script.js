function refreshStorage() {
    save(STORAGE_KEYS.BUDGETS, state.budgets);
    save(STORAGE_KEYS.TRANSACTIONS, state.transactions);
    save(STORAGE_KEYS.THEME, state.theme);
}

function refreshDashboard() {
    updateDashboard();
}

function refreshCharts() {
    updateCharts();
}

function refreshTheme() {
    applyTheme(state.theme);
}

function refreshUI() {
    renderUI();
}

export function refresh() {
    refreshStorage();
    refreshDashboard();
    refreshCharts();
    refreshTheme();
    refreshUI();
}features/
└── theme/
    └── theme.js// theme.js
export function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
}import { applyTheme } from "./features/theme/theme.js";

function refreshTheme() {
    applyTheme(state.theme);
}User Action
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
      ├──► refreshStorage()
      ├──► refreshDashboard()
      ├──► refreshCharts()
      ├──► refreshTheme()
      └──► refreshUI()
