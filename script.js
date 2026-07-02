transaction:added
transaction:updated
transaction:deleted

budget:created
budget:updated
budget:deleted

goal:completed
goal:deleted

category:created
settings:changedstorage:saved
dashboard:updated
charts:rendered
theme:changed
ui:rendered

app:initialized
app:refreshedconst listeners = new Map();export function on(event, handler) {
    if (!listeners.has(event)) {
        listeners.set(event, new Set());
    }

    listeners.get(event).add(handler);
}

export function off(event, handler) {
    listeners.get(event)?.delete(handler);
}

export function emit(event, payload) {
    listeners.get(event)?.forEach(handler => handler(payload));
}export function emit(event, payload) {
    listeners.get(event)?.forEach(handler => {
        try {
            handler(payload);
        } catch (error) {
            console.error(`Error handling "${event}"`, error);
        }
    });
}export const EVENTS = Object.freeze({
    APP_INITIALIZED: "app:initialized",
    APP_REFRESHED: "app:refreshed",

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
    BUDGET_DELETED: "budget:deleted"
});emit(EVENTS.DASHBOARD_UPDATED, dashboard);refreshStorage();
refreshDashboard();
refreshCharts();
refreshTheme();
refreshUI();Browser
    │
    ▼
main.js
    │
    ▼
app.js
    │
    ├──────────────┬──────────────┬──────────────┐
    ▼              ▼              ▼              ▼
Features       Services       Shared          Core
                                    ▲
                                    │
                               Event Bus
