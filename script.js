js/
│
├── app.js
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
    └── ui.jsimport { state } from "./core/state.js";
import { save } from "./core/storage.js";
import { STORAGE_KEYS } from "./core/constants.js";

import { updateDashboard } from "./features/dashboard/dashboard.js";
import { updateCharts } from "./services/chartService.js";
import { renderUI } from "./shared/ui.js";

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

function refreshUI() {
    renderUI();
}

export function refresh() {
    refreshStorage();
    refreshDashboard();
    refreshCharts();
    refreshUI();
}User Action
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
};
