const refreshers = {
    storage() {
        save(STORAGE_KEYS.BUDGETS, state.budgets);
        save(STORAGE_KEYS.TRANSACTIONS, state.transactions);
        save(STORAGE_KEYS.THEME, state.theme);
    },

    dashboard() {
        updateDashboard();
    },

    charts() {
        updateCharts();
    },

    theme() {
        applyTheme(state.theme);
    },

    ui() {
        renderUI();
    }
};

export function refresh({
    storage = true,
    dashboard = true,
    charts = true,
    theme = true,
    ui = true
} = {}) {
    if (storage) refreshers.storage();
    if (dashboard) refreshers.dashboard();
    if (charts) refreshers.charts();
    if (theme) refreshers.theme();
    if (ui) refreshers.ui();
}User Action
      │
      ▼
budget-ui.js
      │
      ▼
budget.js / transaction.js
      │
      ▼
state.js (updated)
      │
      ▼
app.refresh(...)
