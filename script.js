emitEvent(EVENTS.TRANSACTION_ADDED, transaction);
emitEvent(EVENTS.DASHBOARD_UPDATED, dashboard);
emitEvent(EVENTS.UI_RENDERED);on(EVENTS.TRANSACTION_ADDED, ({ data, timestamp }) => {
    console.log("[DevTools] Transaction:", data, new Date(timestamp));
});

on(EVENTS.DASHBOARD_UPDATED, ({ data, timestamp }) => {
    console.log("[DevTools] Dashboard:", data, new Date(timestamp));
});

on(EVENTS.UI_RENDERED, ({ timestamp }) => {
    console.log("[DevTools] UI rendered:", new Date(timestamp));
});const timeline = [];

on("*", ({ data, timestamp }, event) => {
    timeline.push({
        event,
        data,
        timestamp
    });

    console.table(timeline);
});| Time     | Event               | Data                      |
| -------- | ------------------- | ------------------------- |
| 20:31:12 | `transaction:added` | Transaction object        |
| 20:31:12 | `storage:saved`     | `{ key: "transactions" }` |
| 20:31:12 | `dashboard:updated` | Dashboard object          |
| 20:31:12 | `charts:rendered`   | `{ chartId: "expenses" }` |
| 20:31:12 | `ui:rendered`       | `null`                    |
const timeline = [];

on("*", ({ data, timestamp }, event) => {
    timeline.push({
        event,
        data,
        time: new Date(timestamp).toLocaleTimeString()
    });

    console.table(timeline);
});const timeline = [];

on("*", ({ data, timestamp }, event) => {
    timeline.push({
        event,
        data,
        timestamp,
        time: new Date(timestamp).toLocaleTimeString()
    });

    console.table(timeline);
});
