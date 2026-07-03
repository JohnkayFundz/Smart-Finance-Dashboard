                     Browser
                        │
                        ▼
                     main.js
                        │
                        ▼
                     app.js
                 (Lifecycle)
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
    Features         Services         Shared
        │               │                │
        └───────────────┼────────────────┘
                        ▼
                      Core
              (Single Source of Truth)
                        ▲
                        │
                  Update State
                        │
                    app.refresh()
                        │
 ┌─────────────┬─────────────┬────────────┬────────────┬─────────────┐
 ▼             ▼             ▼            ▼            ▼
Storage    Dashboard      Charts       Theme     UI Renderer
Service     Service       Service      Service      (Shared)
 │             │             │            │            │
 │             │             │            │            │
emit(...)   emit(...)     emit(...)   emit(...)   emit(ui:rendered)
 │             │             │            │            │
 └─────────────┴─────────────┴────────────┴────────────┘
                        │
                        ▼
              Optional Event Listeners
        ┌───────────────┼──────────────────────────┐
        ▼               ▼              ▼           ▼
     Logger        Analytics     Notifications   DevTools| Event                 | Emitter                                 |
| --------------------- | --------------------------------------- |
| `transaction:added`   | `features/transactions/transactions.js` |
| `transaction:updated` | `features/transactions/transactions.js` |
| `budget:created`      | `features/budgets/budgets.js`           |
| `goal:completed`      | `features/goals/goals.js`               |
| `storage:saved`       | `services/storage.js`                   |
| `dashboard:updated`   | `services/dashboard.js`                 |
| `charts:rendered`     | `services/charts.js`                    |
| `theme:changed`       | `services/theme.js`                     |
| `ui:rendered`         | `shared/ui/index.js`                    |
| `export:finished`     | `services/export.js`                    |
| `import:finished`     | `services/import.js`                    |
