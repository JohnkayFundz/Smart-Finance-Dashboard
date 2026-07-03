{
    data,
    timestamp
}on(event, handler)
off(event, handler)
once(event, handler)
emit(event, payload)
emitEvent(event, data = null)
clear(event?)export function emitEvent(event, data = null) {
    emit(event, {
        data,
        timestamp: Date.now()
    });
}export function emitEvent(event, data = null) {
    emit(event, {
        data,
        timestamp: Date.now(),
        traceId: crypto.randomUUID()
    });
}emitEvent(EVENTS.TRANSACTION_ADDED, transaction);
emitEvent(EVENTS.TRANSACTION_UPDATED, transaction);
emitEvent(EVENTS.BUDGET_UPDATED, budget);
emitEvent(EVENTS.DASHBOARD_UPDATED, dashboard);
emitEvent(EVENTS.THEME_CHANGED, theme);
emitEvent(EVENTS.GOAL_COMPLETED, goal);
emitEvent(EVENTS.UI_RENDERED);on(EVENTS.TRANSACTION_ADDED, ({ data, timestamp }) => {
    console.log(data);
    console.log(new Date(timestamp));
});on(EVENTS.DASHBOARD_UPDATED, ({ data, timestamp }) => {
    console.log(data);
});on(EVENTS.UI_RENDERED, ({ data, timestamp }) => {
    // data === null
});on(EVENTS.TRANSACTION_ADDED, ({ data, timestamp }) => {
    console.log("[DevTools] Transaction:", data, new Date(timestamp));
});

on(EVENTS.DASHBOARD_UPDATED, ({ data, timestamp }) => {
    console.log("[DevTools] Dashboard:", data, new Date(timestamp));
});

on(EVENTS.UI_RENDERED, ({ timestamp }) => {
    console.log("[DevTools] UI rendered:", new Date(timestamp));
});{
    data,
    timestamp
}| Event                 | Emitter                                 | `data`        |
| --------------------- | --------------------------------------- | ------------- |
| `transaction:added`   | `features/transactions/transactions.js` | `transaction` |
| `transaction:updated` | `features/transactions/transactions.js` | `transaction` |
| `transaction:deleted` | `features/transactions/transactions.js` | `{ id }`      |
| `budget:created`      | `features/budgets/budgets.js`           | `budget`      |
| `budget:updated`      | `features/budgets/budgets.js`           | `budget`      |
| `budget:deleted`      | `features/budgets/budgets.js`           | `{ id }`      |
| `goal:completed`      | `features/goals/goals.js`               | `goal`        |
| `storage:saved`       | `services/storage.js`                   | `{ key }`     |
| `dashboard:updated`   | `services/dashboard.js`                 | `dashboard`   |
| `charts:rendered`     | `services/charts.js`                    | `{ chartId }` |
| `theme:changed`       | `services/theme.js`                     | `theme`       |
| `ui:rendered`         | `shared/ui/index.js`                    | `null`        |
| `export:finished`     | `services/export.js`                    | `{ file }`    |
| `import:finished`     | `services/import.js`                    | `{ file }`    |
