js/
│
├── app.js                  ← Application orchestrator
│
├── core/
│   ├── state.js            ← Single source of truth
│   ├── storage.js          ← localStorage wrapper
│   ├── constants.js
│   └── helpers.js
│
├── features/
│   ├── budgets/
│   │   ├── budget.js       ← Business logic (CRUD)
│   │   ├── budget-ui.js    ← DOM/events
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
    └── ui.jsUser Action
      │
      ▼
budget-ui.js
      │
      ▼
budget.js          ← updates state
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
      └──► ui.render()export const state = {
    budgets: load(STORAGE_KEYS.BUDGETS),
    transactions: load(STORAGE_KEYS.TRANSACTIONS),
    theme: load(STORAGE_KEYS.THEME) ?? "light"
};
