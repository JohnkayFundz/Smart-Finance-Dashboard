                     Browser
                        │
                        ▼
                     main.js
                        │
                        ▼
                     app.js
             (Initialize / Refresh)
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
    Features         Services         Shared
        │               │                ▲
        └───────────────┼────────────────┘
                        ▼
                      Core
        (State • Storage • Constants • Helpers)app.js
├──► Features
├──► Services
├──► Shared
└──► Core

Features
├──► Core
├──► Services
└──► Shared

Services
└──► Core

Shared
└──► Core (only if required)Core ─────────► Features
Core ─────────► Services

Services ─────► Features

Shared ───────► Features

Feature A ────► Feature BBrowser
    │
    ▼
main.js
    │
    ▼
app.initialize()
    │
    ├── Load persisted state
    ├── Initialize services
    ├── Apply theme
    ├── Calculate dashboard
    ├── Render charts
    └── Render all UIUser Action
     │
     ▼
Feature UI
     │
     ▼
Feature Logic
     │
     ▼
Update Core State
     │
     ▼
app.refresh()
     │
     ├── Persist state
     ├── Update dashboard
     ├── Update charts
     ├── Apply theme
     └── Render affected UIUser
   │
   ▼
Feature
   │
   ▼
Core State
   │
   ▼
app.refresh()Core State
      │
      ├────────► Features
      ├────────► Services
      └────────► Sharedsrc/
│
├── main.js
├── app.js
│
├── core/
│   ├── state.js
│   ├── storage.js
│   ├── constants.js
│   ├── helpers.js
│   ├── config.js
│   └── events.js        // optional
│
├── services/
│   ├── dashboard.js
│   ├── charts.js
│   ├── reports.js
│   ├── theme.js
│   ├── export.js
│   └── import.js
│
├── shared/
│   ├── ui.js
│   ├── modal.js
│   ├── table.js
│   ├── form.js
│   ├── formatter.js
│   └── validation.js
│
├── features/
│   ├── transactions/
│   ├── budgets/
│   ├── goals/
│   ├── categories/
│   └── settings/
│
└── assets/                     Browser
                         │
                         ▼
                      main.js
                         │
                         ▼
                  app.initialize()
                         │
                         ▼
                    Application
                         │
                         ▼
                  User Interaction
                         │
                         ▼
                     Feature UI
                         │
                         ▼
                   Feature Logic
                         │
                         ▼
                  Update Core State
                         │
                         ▼
                    app.refresh()
         ┌────────────┼────────────┬────────────┬────────────┐
         ▼            ▼            ▼            ▼            ▼
     Storage     Dashboard      Charts       Theme         UIapp.refresh()
├── refreshStorage()
├── refreshDashboard()
├── refreshCharts()
├── refreshTheme()
└── refreshUI()
