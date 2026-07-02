app.js
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
└──► CoreCore ─────────► *

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
dashboard updated
        │
        ▼
emit(DASHBOARD_UPDATED)
        │
        ├── Logger
        ├── Analytics
        ├── Notifications
        └── DevToolson()
off()
once()
emit()
clear()transaction:added
transaction:updated
transaction:deleted

budget:created
budget:updated
budget:deleted

goal:completed

storage:saved
dashboard:updated
charts:rendered
theme:changed
ui:rendered

export:finished
import:finishedrefresh:dashboard
refresh:charts
refresh:storage                 Browser
                     │
                     ▼
                  main.js
                     │
                     ▼
                   app.js
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    Features     Services      Shared
        │            │            │
        └────────────┼────────────┘
                     ▼
                   Core
                     │
          (Single Source of Truth)
                     │
                     ▼
              Refresh Pipeline
                     │
                     ▼
              Semantic Events
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
   Logger       Analytics     Notifications
