Browser
    │
    ▼
main.js
    │
    ▼
app.initialize()
    │
    ├── Load state
    ├── Apply theme
    ├── Render UI
    ├── Calculate dashboard
    └── Render charts

──────────────────────────────────────

User Action
    │
    ▼
budget-ui.js / transaction-ui.js
    │
    ▼
budget.js / transaction.js
    │
    ▼
Update state
    │
    ▼
app.refresh()
    │
    ├── Persist state
    ├── Apply theme
    ├── Render UI
    ├── Update dashboard
    └── Update chartsjs/
│
├── main.js                 # Entry point
├── app.js                  # initialize() and refresh()
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
    └── ui.js
