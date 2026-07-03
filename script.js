{ dashboard, timestamp }

{ transaction, source, timestamp }

{ id, timestamp }

{ file, timestamp }{
    data: ...,
    timestamp: Date.now()
}emit(EVENTS.TRANSACTION_ADDED, {
    data: transaction,
    timestamp: Date.now()
});emit(EVENTS.BUDGET_UPDATED, {
    data: budget,
    timestamp: Date.now()
});emit(EVENTS.DASHBOARD_UPDATED, {
    data: dashboard,
    timestamp: Date.now()
});emit(EVENTS.THEME_CHANGED, {
    data: theme,
    timestamp: Date.now()
});on(EVENTS.DASHBOARD_UPDATED, ({ data, timestamp }) => {
    console.log(data);
});emit(EVENTS.TRANSACTION_ADDED, {
    transaction,
    source: "transactions",
    timestamp: Date.now()
});transaction:addedsource = transactionssource: "transactions"on(EVENTS.TRANSACTION_ADDED, ({ data, timestamp }) => {
    console.log(
        "[DevTools] Transaction:",
        data,
        new Date(timestamp)
    );
});

on(EVENTS.DASHBOARD_UPDATED, ({ data, timestamp }) => {
    console.log(
        "[DevTools] Dashboard:",
        data,
        new Date(timestamp)
    );
});

on(EVENTS.UI_RENDERED, ({ timestamp }) => {
    console.log(
        "[DevTools] UI rendered",
        new Date(timestamp)
    );
});| Event                 | Emitter                                 | Payload                            |
| --------------------- | --------------------------------------- | ---------------------------------- |
| `transaction:added`   | `features/transactions/transactions.js` | `{ data: transaction, timestamp }` |
| `transaction:updated` | `features/transactions/transactions.js` | `{ data: transaction, timestamp }` |
| `transaction:deleted` | `features/transactions/transactions.js` | `{ data: { id }, timestamp }`      |
| `budget:created`      | `features/budgets/budgets.js`           | `{ data: budget, timestamp }`      |
| `budget:updated`      | `features/budgets/budgets.js`           | `{ data: budget, timestamp }`      |
| `budget:deleted`      | `features/budgets/budgets.js`           | `{ data: { id }, timestamp }`      |
| `goal:completed`      | `features/goals/goals.js`               | `{ data: goal, timestamp }`        |
| `storage:saved`       | `services/storage.js`                   | `{ data: { key }, timestamp }`     |
| `dashboard:updated`   | `services/dashboard.js`                 | `{ data: dashboard, timestamp }`   |
| `charts:rendered`     | `services/charts.js`                    | `{ data: { chartId }, timestamp }` |
| `theme:changed`       | `services/theme.js`                     | `{ data: theme, timestamp }`       |
| `ui:rendered`         | `shared/ui/index.js`                    | `{ timestamp }`                    |
| `export:finished`     | `services/export.js`                    | `{ data: { file }, timestamp }`    |
| `import:finished`     | `services/import.js`                    | `{ data: { file }, timestamp }`    |
export function emitEvent(event, data) {
    emit(event, {
        data,
        timestamp: Date.now()
    });
}emitEvent(EVENTS.TRANSACTION_ADDED, transaction);

emitEvent(EVENTS.DASHBOARD_UPDATED, dashboard);

emitEvent(EVENTS.THEME_CHANGED, theme);

emitEvent(EVENTS.BUDGET_UPDATED, budget);
