const timeline = [];

on("*", ({ data, timestamp }, event) => {
    timeline.push({
        event,
        data,
        timestamp
    });

    console.table(
        timeline.map(({ event, data, timestamp }) => ({
            Time: new Date(timestamp).toLocaleTimeString(),
            Event: event,
            Data: data
        }))
    );
});{
    event,
    data,
    timestamp
}const duration = end.timestamp - start.timestamp;{
    data,
    timestamp
}on(event, handler)
off(event, handler)
once(event, handler)
emit(event, payload)
emitEvent(event, data = null)
clear(event?)emitEvent(EVENTS.TRANSACTION_ADDED, transaction);
emitEvent(EVENTS.DASHBOARD_UPDATED, dashboard);
emitEvent(EVENTS.UI_RENDERED);on(EVENTS.TRANSACTION_ADDED, ({ data, timestamp }) => {
    console.log(data);
});const timeline = [];

on("*", ({ data, timestamp }, event) => {
    timeline.push({
        event,
        data,
        timestamp
    });

    console.table(
        timeline.map(({ event, data, timestamp }) => ({
            Time: new Date(timestamp).toLocaleTimeString(),
            Event: event,
            Data: data
        }))
    );
});
