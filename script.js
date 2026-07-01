js/
│
├── main.js
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
│   ├── theme/
│   ├── goals/
│   ├── recurring/
│   ├── search/
│   ├── filters/
│   └── categories/
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
    └── components/Application Startup
──────────────────

main.js
    │
    ▼
initialize()
    │
    ├── Load persisted state
    ├── Apply theme
    ├── Build dashboard
    ├── Build charts
    └── Render UI


Application Runtime
───────────────────

User Action
      │
      ▼
Feature module
      │
      ▼
Update state
      │
      ▼
refresh()
      │
      ├── Persist state
      ├── Refresh dashboard
      ├── Refresh charts
      ├── Apply theme
      └── Refresh UIUI
 │
 ▼
Features
 │
 ▼
Core
 │
 ▼
Services
