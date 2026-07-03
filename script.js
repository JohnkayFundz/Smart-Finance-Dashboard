app.js
    ↓
Features
    ↓
Services
    ↓
Shared
    ↓
Coreapp.js
├──► Features
├──► Services
├──► Shared
└──► Core

Features
├──► Services
├──► Shared
└──► Core

Services
└──► Core

Shared
└──► Core

Core
└──► (nothing)Core ─────► *

Services ─► Features

Shared ───► Features

Feature A ─► Feature BBrowser
    │
    ▼
main.js
    │
    ▼
app.initialize()
    │
    ▼
User Action
    │
    ▼
Feature
    │
    ▼
Update Core State
    │
    ▼
app.refresh()app.refresh()
    │
    ├── Storage Service
    ├── Dashboard Service
    ├── Charts Service
    ├── Theme Service
    └── UI RendererDashboard Service
        │
        ▼
dashboard:updated
        │
        ▼
Analytics
Logger
Notifications
DevTools| Event                 | Emitter                                 | Typical listeners           |
| --------------------- | --------------------------------------- | --------------------------- |
| `transaction:added`   | `features/transactions/transactions.js` | Analytics, Notifications    |
| `transaction:updated` | `features/transactions/transactions.js` | Analytics                   |
| `budget:created`      | `features/budgets/budgets.js`           | Analytics                   |
| `goal:completed`      | `features/goals/goals.js`               | Notifications               |
| `storage:saved`       | `services/storage.js`                   | Logger                      |
| `dashboard:updated`   | `services/dashboard.js`                 | Analytics, Logger, DevTools |
| `charts:rendered`     | `services/charts.js`                    | DevTools                    |
| `theme:changed`       | `services/theme.js`                     | DevTools                    |
| `ui:rendered`         | `shared/ui/index.js`                    | DevTools                    |
| `export:finished`     | `services/export.js`                    | Logger, Notifications       |
| `import:finished`     | `services/import.js`                    | Logger, Notifications       |
on()
off()
once()
emit()
clear()transaction:added
transaction:updated
budget:created
goal:completed
storage:saved
dashboard:updated
charts:rendered
theme:changed
ui:rendered
export:finished
import:finishedrefresh:dashboard
refresh:charts
refresh:storage
