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
      ├──► refreshStorage()
      ├──► refreshDashboard()
      ├──► refreshCharts()
      ├──► refreshTheme()
      └──► refreshUI()import { state } from "../../core/state.js";

export function applyTheme(theme = state.theme) {
    document.documentElement.dataset.theme = theme;
}

export function toggleTheme() {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme();
}export function refresh() {
    refreshStorage();
    refreshDashboard();
    refreshCharts();
    refreshTheme();
    refreshUI();
}export function initialize() {
    refreshTheme();
    refreshDashboard();
    refreshCharts();
    refreshUI();
}initialize();js/
│
├── app.js
│      ├── initialize()
│      └── refresh()
│
├── core/
│      ├── state.js
│      ├── storage.js
│      ├── constants.js
│      └── helpers.js
│
├── features/
│      ├── budgets/
│      ├── transactions/
│      ├── dashboard/
│      └── theme/
│
├── services/
│      ├── chartService.js
│      ├── exportService.js
│      └── reportService.js
│
└── shared/
       ├── modal.js
       └── ui.js
