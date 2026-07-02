const listeners = new Map();

export function on(event, handler) {
    if (!listeners.has(event)) {
        listeners.set(event, new Set());
    }

    listeners.get(event).add(handler);
}

export function off(event, handler) {
    listeners.get(event)?.delete(handler);
}

export function once(event, handler) {
    function wrapper(payload) {
        off(event, wrapper);
        handler(payload);
    }

    on(event, wrapper);
}

export function emit(event, payload) {
    listeners.get(event)?.forEach(handler => {
        try {
            handler(payload);
        } catch (error) {
            console.error(`Error handling "${event}"`, error);
        }
    });
}emit(EVENTS.DASHBOARD_UPDATED, dashboard);export const EVENTS = Object.freeze({
    STORAGE_SAVED: "storage:saved",

    DASHBOARD_UPDATED: "dashboard:updated",

    CHARTS_RENDERED: "charts:rendered",

    THEME_CHANGED: "theme:changed",

    UI_RENDERED: "ui:rendered",

    TRANSACTION_ADDED: "transaction:added",
    TRANSACTION_UPDATED: "transaction:updated",
    TRANSACTION_DELETED: "transaction:deleted",

    BUDGET_CREATED: "budget:created",
    BUDGET_UPDATED: "budget:updated",
    BUDGET_DELETED: "budget:deleted",

    GOAL_COMPLETED: "goal:completed",

    EXPORT_FINISHED: "export:finished",
    IMPORT_FINISHED: "import:finished"
});transaction:added
transaction:deleted

budget:updated

dashboard:updated

charts:rendered

storage:saved

theme:changed

export:finished

import:finishedrefresh:dashboard
refresh:charts
refresh:storageexport function refresh(mode = "full") {
    const options = REFRESH[mode] ?? REFRESH.full;

    if (options.storage) refreshStorage();
    if (options.dashboard) refreshDashboard();
    if (options.charts) refreshCharts();
    if (options.theme) refreshTheme();
    if (options.ui) refreshUI();
}Transaction added
        │
        ▼
Update state
        │
        ▼
app.refresh()
        │
        ├── refreshStorage()
        ├── refreshDashboard()
        ├── refreshCharts()
        ├── refreshTheme()
        └── refreshUI()

dashboard.js
        │
        ▼
emit("dashboard:updated")

Notification module
Analytics module
Logger module
Developer tools
        ▲
        │
listen if interested
