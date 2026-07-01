User Action
      │
      ▼
budget.js
      │
      ▼
Update state
      │
      ▼
app.refresh()
      │
      ├────────► storage.save()
      │
      ├────────► dashboard.calculate()
      │
      └────────► ui.render()export function validateBudget(budget) {
    const errors = {};

    if (!budget.name?.trim()) {
        errors.name = "Budget name is required.";
    }

    if (Number(budget.amount) <= 0) {
        errors.amount = "Budget amount must be greater than zero.";
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
}const button = event.target.closest("button");
if (!button) return;js/
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
│   │   ├── budget.js
│   │   ├── budget-ui.js
│   │   └── budget-validation.js
│   │
│   ├── transactions/
│   │   ├── transaction.js
│   │   ├── transaction-ui.js
│   │   └── transaction-validation.js
│   │
│   └── dashboard/
│       └── dashboard.js
│
├── services/
│   ├── chartService.js
│   ├── exportService.js
│   └── reportService.js
│
└── shared/
    ├── modal.js
    └── ui.jsexport const STORAGE_KEYS = Object.freeze({
    BUDGETS: "budgets",
    TRANSACTIONS: "transactions",
    THEME: "theme"
});localStorage.getItem(STORAGE_KEYS.BUDGETS);
