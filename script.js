export function refresh() {
    refreshStorage();
    refreshDashboard();
    refreshCharts();
    refreshUI();
}export function refresh({
    storage = true,
    dashboard = true,
    charts = true,
    ui = true
} = {}) {
    if (storage) refreshStorage();
    if (dashboard) refreshDashboard();
    if (charts) refreshCharts();
    if (ui) refreshUI();
}refresh({
    dashboard: false,
    charts: false
});const refreshers = {
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

    ui() {
        renderUI();
    }
};

export function refresh() {
    refreshers.storage();
    refreshers.dashboard();
    refreshers.charts();
    refreshers.ui();
}User Action
      │
      ▼
budget-ui.js
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
      │       └──► localStorage
      │
      ├──► refreshDashboard()
      │
      ├──► refreshCharts()
      │
      ├──► refreshTheme()
      │
      └──► refreshUI()function refreshTheme() {
    applyTheme(state.theme);
}
