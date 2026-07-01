js/
│
├── app.js                  # Application orchestrator
│
├── core/
│   ├── state.js            # Global application state
│   ├── storage.js          # localStorage abstraction
│   ├── constants.js
│   └── helpers.js
│
├── features/
│   ├── budgets/
│   │   ├── budget.js
│   │   ├── budget-ui.js
│   │   └── budget-validation.js
│   │
│   ├── transactions/
│   │   ├── transaction.js
│   │   ├── transaction-ui.js
│   │   └── transaction-validation.js
│   │
│   ├── dashboard/
│   │   └── dashboard.js
│   │
│   └── theme/
│       └── theme.js
│
├── services/
│   ├── chartService.js
│   ├── exportService.js
│   └── reportService.js
│
└── shared/
    ├── modal.js
    └── ui.jsUser Action
      │
      ▼
budget-ui.js
      │
      ▼
budget.js
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
      └──► refreshUI()export function load(key, defaultValue = null) {
    try {
        const value = localStorage.getItem(key);

        return value === null
            ? defaultValue
            : JSON.parse(value);
    } catch {
        return defaultValue;
    }
}export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}export const state = {
    budgets: load(STORAGE_KEYS.BUDGETS, []),
    transactions: load(STORAGE_KEYS.TRANSACTIONS, []),
    theme: load(STORAGE_KEYS.THEME, "light")
};function refreshStorage() {
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

function refreshUI() {
    renderUI();
}

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
}
