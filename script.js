js/
│
├── main.js                 # Application entry point
├── app.js                  # Application lifecycle (initialize, refresh)
│
├── core/
│   ├── state.js            # Global application state
│   ├── storage.js          # localStorage wrapper
│   ├── constants.js        # App constants
│   └── helpers.js          # Shared utility functions
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
    └── ui.jsBrowser
    │
    ▼
main.js
    │
    ▼
initialize()
    │
    ├── Load state
    ├── Apply theme
    ├── Calculate dashboard
    ├── Render charts
    └── Render UI

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
refresh()
    │
    ├── Persist state
    ├── Update dashboard
    ├── Update charts
    ├── Apply theme
    └── Render UIrefresh() {
    // 1. Persist state
    // 2. Synchronize UI
    // 3. Synchronize dashboard
    // 4. Synchronize charts
    // 5. Synchronize theme
}features/
├── budgets/
├── transactions/
├── dashboard/
├── theme/
├── goals/
├── categories/
├── recurring/
├── search/
├── filters/
└── notifications/services/
├── chartService.js
├── exportService.js
├── reportService.js
├── importService.js
├── notificationService.js
└── backupService.js
