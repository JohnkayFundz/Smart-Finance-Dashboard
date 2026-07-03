devtools/
│
├── dashboard.html
├── dashboard.js
├── timelineChart.js
├── eventTypeChart.js
├── table.js
└── timeline.js// timeline.js

export const timeline = [];on("*", ({ data, timestamp }, event) => {
    timeline.push({
        event,
        data,
        timestamp
    });

    updateTimelineChart();
    updateEventTypeChart();
    updateTable();
});Time
│
│    ●
│       ●
│          ●
│             ●
└──────────────────────►
 transaction
 dashboard
 storage
 uitransaction:added      ███████████
dashboard:updated      ██████
storage:saved          ██████
ui:rendered            ██████
theme:changed          ██tbody.innerHTML = "";

timeline.forEach(({ event, data, timestamp }) => {
    tbody.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
            <td>${new Date(timestamp).toLocaleTimeString()}</td>
            <td>${event}</td>
            <td>${JSON.stringify(data)}</td>
        </tr>
        `
    );
});Total Events:           324

Transactions:            82

Dashboard Updates:       82

Charts Rendered:         82

Storage Saved:           82

UI Rendered:             82

Average Refresh:        18 mstransaction:added

│

storage:saved
████

dashboard:updated
██████

charts:rendered
███████

theme:changed
████████

ui:rendered
██████████+------------------------------------------------------+
| Event Dashboard                                      |
+------------------------------------------------------+

+------------------------------------------------------+
| Total Events | Avg Refresh | Last Event | FPS        |
+------------------------------------------------------+

+----------------------+-------------------------------+
| Timeline Chart       | Event Type Chart              |
+----------------------+-------------------------------+

+------------------------------------------------------+
| Refresh Waterfall                                 |
+------------------------------------------------------+

+------------------------------------------------------+
| Live Event Table                                    |
|------------------------------------------------------|
| Time | Event | Data                                |
|----------------------------------------------- ------|
| ...                                              ... |
+------------------------------------------------------+{
    data,
    timestamp
}
