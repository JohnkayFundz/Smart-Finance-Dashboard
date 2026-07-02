Browser
   │
   ▼
main.js
   │
   ▼
app.js
(Initialize + Refresh)
   │
   ├───────────────┬────────────────┐
   ▼               ▼                ▼
Features       Services         Shared
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
 └──► Core (only when necessary)Core ─────────► Features
Core ─────────► Services

Services ─────► Features

Shared ───────► Features

Feature A ────► Feature BFeature A
     │
     ▼
   app.refresh()
     ▲
     │
Feature BBrowser
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
Update State
     │
     ▼
app.refresh()
     │
     ├── Save state
     ├── Recalculate dashboard
     ├── Update charts
     ├── Apply theme
     └── Render affected UIsrc/
│
├── main.js
├── app.js
│
├── core/
│   ├── state.js
│   ├── storage.js
│   ├── constants.js
│   ├── events.js
│   ├── helpers.js
│   └── config.js
│
├── services/
│   ├── dashboard.js
│   ├── charts.js
│   ├── export.js
│   ├── import.js
│   └── theme.js
│
├── shared/
│   ├── ui.js
│   ├── modal.js
│   ├── table.js
│   ├── form.js
│   ├── validation.js
│   └── formatter.js
│
├── features/
│   ├── transactions/
│   ├── budgets/
│   ├── goals/
│   ├── categories/
│   └── settings/
│
└── assets/Browser
    │
    ▼
Feature UI
    │
    ▼
Feature Logic
    │
    ▼
Core State
    │
    ▼
app.refresh()
    │
    ├── Storage
    ├── Dashboard
    ├── Charts
    ├── Theme
    └── UI
