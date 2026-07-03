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
        ┌───────────────┼────────────────────────────┐
        ▼               ▼              ▼            ▼
 Storage Service   Dashboard      Charts        Theme
        │            Service       Service      Service
        │               │              │            │
        │               │              │            │
 emit(storage:saved)    │      emit(charts:rendered)
                        │
            emit(dashboard:updated)
                        │
        ┌───────────────┼──────────────────────────┐
        ▼               ▼              ▼           ▼
    Logger         Analytics     Notifications   DevToolsdashboard:updated
    Emitter:
        dashboard.js

    Listeners:
        analytics.js
        logger.js
        devtools.js
        notifications.js
