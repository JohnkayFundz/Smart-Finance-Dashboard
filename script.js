const timeline = [];

on("*", ({ data, timestamp }, event) => {
    timeline.push({
        event,
        data,
        timestamp
    });

    console.table(
        timeline.map(entry => ({
            Time: new Date(entry.timestamp).toLocaleTimeString(),
            Event: entry.event,
            Data: entry.data
        }))
    );
});const duration = timeline[5].timestamp - timeline[0].timestamp;{
    event,
    data,
    timestamp
}| Time     | Event               | Data                      |
| -------- | ------------------- | ------------------------- |
| 20:31:12 | `transaction:added` | Transaction object        |
| 20:31:12 | `storage:saved`     | `{ key: "transactions" }` |
| 20:31:12 | `dashboard:updated` | Dashboard object          |
| 20:31:12 | `charts:rendered`   | `{ chartId: "expenses" }` |
| 20:31:12 | `ui:rendered`       | `null`                    |
