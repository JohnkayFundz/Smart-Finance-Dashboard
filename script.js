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
    └── UI RendererFeature
    │
    ▼
Core State
    │
    ▼
Services read state
    │
    ▼
UI renders stateDashboard Service
        │
        ▼
dashboard:updated
        │
        ├── Logger
        ├── Analytics
        ├── Notifications
        └── DevTools✓ Feature
      │
      ▼
state.transactions.push(...)✗ Dashboard Service

✗ Charts Service

✗ UI Renderer

✗ Loggerapp.refresh()
    │
    ├── Storage
    ├── Dashboard
    ├── Charts
    ├── Theme
    └── UIDashboard
    │
    ▼
Charts

Charts
    │
    ▼
Storage

Storage
    │
    ▼
ThemeDashboard updated
        │
        ▼
emit(dashboard:updated)
        │
        ▼
AnalyticsDashboard updated
        │
        ▼
emit(dashboard:updated)
        │
        ▼
Storage.save()

Charts.render()

Theme.apply()

UI.render()| Event                 | Emitter                                 |
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
emit(EVENTS.DASHBOARD_UPDATED, {
    dashboard,
    timestamp: Date.now()
});emit(EVENTS.TRANSACTION_ADDED, {
    transaction,
    source: "transactions",
    timestamp: Date.now()
});
