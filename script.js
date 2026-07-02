src/
│
├── main.js
├── app.js
│
├── core/
│   ├── state.js
│   ├── constants.js
│   ├── events.js
│   ├── eventNames.js
│   ├── helpers.js
│   └── config.js
│
├── services/
│
├── shared/
│
├── features/
│
└── assets/app.js
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
└──► (nothing)Browser
    │
    ▼
main.js
    │
    ▼
app.initialize()
    │
    ├── Load state
    ├── Apply theme
    ├── Calculate dashboard
    ├── Render charts
    └── Render UIUser
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
    └── UI Rendererexport function refresh(mode = "full") {
    const options = REFRESH[mode] ?? REFRESH.full;

    if (options.storage) refreshStorage();
    if (options.dashboard) refreshDashboard();
    if (options.charts) refreshCharts();
    if (options.theme) refreshTheme();
    if (options.ui) refreshUI();
}refreshDashboard()
        │
        ▼
dashboard updated
        │
        ▼
emit(DASHBOARD_UPDATED)app.refresh()
        │
        ▼
emit(refresh:dashboard)on()
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
refresh:storageDashboard updated
        │
        ▼
emit(dashboard:updated)
        │
        ├── Logger
        ├── Analytics
        ├── Notifications
        └── Developer ToolsTransaction added
        │
        ▼
emit(transaction:added)
        │
        ├── Save storage
        ├── Update dashboard
        ├── Update charts
        └── Render UI
