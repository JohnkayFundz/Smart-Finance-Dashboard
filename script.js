Browser
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
app.refresh()
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
        ├── Logger
        ├── Analytics
        ├── Notifications
        └── DevToolsdashboard:updated

Emitter:
    services/dashboard.js

Listeners:
    analytics.js
    logger.js
    devtools.js
    notifications.js| Event                 | Emitter                                 |
| --------------------- | --------------------------------------- |
| `transaction:added`   | `features/transactions/transactions.js` |
| `transaction:updated` | `features/transactions/transactions.js` |
| `transaction:deleted` | `features/transactions/transactions.js` |
| `budget:created`      | `features/budgets/budgets.js`           |
| `budget:updated`      | `features/budgets/budgets.js`           |
| `budget:deleted`      | `features/budgets/budgets.js`           |
| `goal:completed`      | `features/goals/goals.js`               |
| Event               | Emitter                 |
| ------------------- | ----------------------- |
| `storage:saved`     | `services/storage.js`   |
| `dashboard:updated` | `services/dashboard.js` |
| `charts:rendered`   | `services/charts.js`    |
| `theme:changed`     | `services/theme.js`     |
| `ui:rendered`       | `shared/ui/index.js`    |
| `export:finished`   | `services/export.js`    |
| `import:finished`   | `services/import.js`    |
