emitEvent(EVENTS.TRANSACTION_ADDED, transaction);
emitEvent(EVENTS.DASHBOARD_UPDATED, dashboard);
emitEvent(EVENTS.UI_RENDERED);
on(EVENTS.TRANSACTION_ADDED, ({ data, timestamp }) => {
    console.log("[DevTools] Transaction:", data, new Date(timestamp));
});

on(EVENTS.DASHBOARD_UPDATED, ({ data, timestamp }) => {
    console.log("[DevTools] Dashboard:", data, new Date(timestamp));
});

on(EVENTS.UI_RENDERED, ({ timestamp }) => {
    console.log("[DevTools] UI rendered:", new Date(timestamp));
});
const timeline = [];

on("*", ({ data, timestamp }, event) => {
  timeline.push({ event, data, timestamp });
  console.table(timeline);
});
