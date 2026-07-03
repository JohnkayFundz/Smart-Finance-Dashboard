{
    data,
    timestamp
}export function emitEvent(event, data = null) {
    emit(event, {
        data,
        timestamp: Date.now()
    });
}on(event, handler)
off(event, handler)
once(event, handler)
emit(event, payload)
emitEvent(event, data = null)
clear(event?){
    data,
    timestamp
}on(EVENTS.TRANSACTION_ADDED, ({ data, timestamp }) => {
    console.log(data);
});on(EVENTS.DASHBOARD_UPDATED, ({ data, timestamp }) => {
    console.log(data);
});on(EVENTS.UI_RENDERED, ({ data, timestamp }) => {
    // data === null
});emitEvent(EVENTS.TRANSACTION_ADDED, transaction);
emitEvent(EVENTS.TRANSACTION_UPDATED, transaction);
emitEvent(EVENTS.BUDGET_UPDATED, budget);
emitEvent(EVENTS.DASHBOARD_UPDATED, dashboard);
emitEvent(EVENTS.THEME_CHANGED, theme);
emitEvent(EVENTS.GOAL_COMPLETED, goal);
emitEvent(EVENTS.UI_RENDERED);on(EVENTS.TRANSACTION_ADDED, ({ data, timestamp }) => {
    console.log("[DevTools] Transaction:", data, new Date(timestamp));
});

on(EVENTS.DASHBOARD_UPDATED, ({ data, timestamp }) => {
    console.log("[DevTools] Dashboard:", data, new Date(timestamp));
});

on(EVENTS.UI_RENDERED, ({ timestamp }) => {
    console.log("[DevTools] UI rendered:", new Date(timestamp));
});
