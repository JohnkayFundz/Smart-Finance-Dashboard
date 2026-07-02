core/
├── state.js
├── constants.js
├── events.js      // Event bus
├── eventNames.js  // Event constants
├── helpers.js
└── config.jsimport { emit } from "../core/events.js";
import { EVENTS } from "../core/eventNames.js";

emit(EVENTS.DASHBOARD_UPDATED, dashboard);export function clear(event) {
    if (event) {
        listeners.delete(event);
    } else {
        listeners.clear();
    }
}export function emit(event, payload) {
    const handlers = [...(listeners.get(event) ?? [])];

    for (const handler of handlers) {
        try {
            handler(payload);
        } catch (error) {
            console.error(`Error handling "${event}"`, error);
        }
    }
}export function on(event, handler) {
    if (!listeners.has(event)) {
        listeners.set(event, new Set());
    }

    listeners.get(event).add(handler);

    return () => off(event, handler);
}const unsubscribe = on(EVENTS.DASHBOARD_UPDATED, updateDashboard);

// Later...
unsubscribe();Transaction Added
        │
        ▼
Update State
        │
        ▼
app.refresh()
        │
        ▼
dashboard.js
        │
        ▼
emit(DASHBOARD_UPDATED)
        │
        ▼
Logger
Analytics
NotificationTransaction Added
        │
        ▼
emit(TRANSACTION_ADDED)
        │
        ▼
Dashboard updates itself
Storage saves itself
Charts update themselves
Theme updates itselfexport function refresh(mode = "full") {
    const options = REFRESH[mode] ?? REFRESH.full;

    if (options.storage) refreshStorage();
    if (options.dashboard) refreshDashboard();
    if (options.charts) refreshCharts();
    if (options.theme) refreshTheme();
    if (options.ui) refreshUI();
}Browser
    │
    ▼
main.js
    │
    ▼
app.js
    │
    ├───────────── Refresh Pipeline ─────────────┐
    ▼                                            │
Features ─────► Core State                       │
    │                                            │
    └──────────────► refresh()                   │
                         │                       │
                         ▼                       │
                 Storage Service                │
                 Dashboard Service              │
                 Charts Service                 │
                 Theme Service                  │
                 UI Renderer                    │
                         │
                         ▼
                  Semantic Events
                         │
         ┌───────────────┼────────────────┐
         ▼               ▼                ▼
     Notifications   Analytics        Developer Tools
