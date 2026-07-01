┌─────────────────────────────────────────────────────────────┐
│                         Browser                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
                      main.js
                           │
                           ▼
                      initialize()
                           │
      ┌────────────────────┼────────────────────┐
      ▼                    ▼                    ▼
   core/              features/           services/
      │                    │                    │
      └───────────────► shared UI ◄─────────────┘js/
│
├── main.js                 # Starts the application
├── app.js                  # initialize() and refresh()
│
├── core/
│   ├── state.js            # Single source of truth
│   ├── storage.js          # Persistence layer
│   ├── constants.js
│   └── helpers.js
│
├── features/
│   ├── budgets/
│   ├── transactions/
│   ├── dashboard/
│   ├── theme/
│   ├── goals/
│   ├── recurring/
│   ├── search/
│   ├── filters/
│   ├── categories/
│   └── notifications/
│
├── services/
│   ├── chartService.js
│   ├── exportService.js
│   ├── importService.js
│   ├── reportService.js
│   ├── notificationService.js
│   └── backupService.js
│
└── shared/
    ├── modal.js
    ├── ui.js
    └── components/Browser
    │
    ▼
main.js
    │
    ▼
initialize()
    │
    ├── Load persisted state
    ├── Apply theme
    ├── Calculate dashboard
    ├── Render charts
    └── Render UIUser Action
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
    // Persist application state
    // Synchronize dashboard
    // Synchronize charts
    // Synchronize theme
    // Synchronize UI
}UI
 │
 ▼
Features
 │
 ▼
Core
 │
 ▼
Services
