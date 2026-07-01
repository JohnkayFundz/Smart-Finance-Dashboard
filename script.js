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
      ├──► storage.save()
      ├──► dashboard.calculate()
      ├──► chartService.update()
      └──► ui.render()export function load(key, defaultValue = null) {
    try {
        const value = localStorage.getItem(key);

        return value === null
            ? defaultValue
            : JSON.parse(value);
    } catch {
        return defaultValue;
    }
}import { load } from "./storage.js";
import { STORAGE_KEYS } from "./constants.js";

export const state = {
    budgets: load(STORAGE_KEYS.BUDGETS, []),
    transactions: load(STORAGE_KEYS.TRANSACTIONS, []),
    theme: load(STORAGE_KEYS.THEME, "light")
};export function refresh() {
    save(STORAGE_KEYS.BUDGETS, state.budgets);
    save(STORAGE_KEYS.TRANSACTIONS, state.transactions);

    updateDashboard();
    updateCharts();
    renderUI();
}refreshStorage();
refreshDashboard();
refreshCharts();
refreshUI();
