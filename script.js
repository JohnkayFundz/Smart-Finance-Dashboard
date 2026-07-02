core/
├── state.js
├── constants.js
├── events.js
├── eventNames.js
├── helpers.js
└── config.js                 Browser
                    │
                    ▼
                 main.js
                    │
                    ▼
                  app.js
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
    Features     Services     Shared
        │           │           │
        └───────────┼───────────┘
                    ▼
                  CoreTransaction Added
        │
        ▼
Update Core State
        │
        ▼
app.refresh()
        │
        ├── refreshStorage()
        ├── refreshDashboard()
        ├── refreshCharts()
        ├── refreshTheme()
        └── refreshUI()
                 │
                 ▼
        emit(DASHBOARD_UPDATED)
                 │
     ┌───────────┼───────────┐
     ▼           ▼           ▼
 Logger     Analytics   Notificationsexport function refresh(mode = "full") {
    const options = REFRESH[mode] ?? REFRESH.full;

    if (options.storage) refreshStorage();
    if (options.dashboard) refreshDashboard();
    if (options.charts) refreshCharts();
    if (options.theme) refreshTheme();
    if (options.ui) refreshUI();
}✓ on()
✓ off()
✓ once()
✓ emit()
✓ clear()dashboard:updated
charts:rendered
storage:saved

transaction:added
transaction:updated
transaction:deleted

budget:created

theme:changed

export:finishedrefresh:dashboard
refresh:charts
refresh:storageBrowser
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
    └── UI Renderer
             │
             ▼
      Semantic Events
             │
      Logger / Analytics /
      Notifications / DevTools
