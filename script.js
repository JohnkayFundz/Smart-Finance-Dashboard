js/
│
├── state.jsexport const state = {
    budgets: [],
    transactions: [],
    filters: {}
};saveBudgets()
loadBudgets()

saveTransactions()
loadTransactions()validateBudget()

validateTransaction()

validateAmount()

validateDate()budgetList.addEventListener("click", ...)js/
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
│   ├── budget.js
│   ├── transaction.js
│   └── dashboard.js
│
├── ui/
│   ├── ui.js
│   ├── modal.js
│   └── charts.js
│
└── validation/
    └── validation.jsUser Action
      │
      ▼
budget.js / transaction.js
      │
      ▼
storage.js
      │
      ▼
refreshDashboard()
      │
      ▼
UI + Charts + Metrics
