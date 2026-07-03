devtools/
│
├── dashboard.html          # UI layout
├── dashboard.js            # Coordinator
│
├── timeline.js             # Event history
├── statistics.js           # Metrics
│
├── charts/
│   ├── timelineChart.js
│   ├── eventTypeChart.js
│   └── waterfallChart.js
│
├── table.js
└── panels.js               # Summary cardsEvent Bus
     │
     ▼
on("*")
     │
     ▼
timeline.push()
     │
     ├────────────┐
     ▼            ▼
Statistics    Dashboard
     │            │
     ▼            ▼
Metrics      Charts/Tableexport const timeline = [];

export function addEvent(event, data, timestamp) {
    timeline.push({
        event,
        data,
        timestamp
    });
}export function getTotalEvents() {}

export function getEventCounts() {}

export function getAverageRefreshTime() {}

export function getLastEvent() {}

export function getRefreshHistory() {}on("*", ({ data, timestamp }, event) => {

    addEvent(event, data, timestamp);

    renderPanels();

    renderTimelineChart();

    renderEventTypeChart();

    renderWaterfallChart();

    renderTable();
});+------------------------------------------------------+
| Total Events | Avg Refresh | Last Event | FPS        |
+------------------------------------------------------+Total Events
────────────
324


Average Refresh
───────────────
18 ms


Last Event
──────────
ui:rendered


FPS
───
60Time
│
│      ●
│         ●
│             ●
│                 ●
└──────────────────────────────►
 transaction
 dashboard
 charts
 uitransaction:added     ████████████

dashboard:updated     █████████

storage:saved         █████████

charts:rendered       ███████

theme:changed         ███

ui:rendered           ████████Transaction Added
        │
        ▼
Storage Saved
        │ 4 ms
        ▼
Dashboard Updated
        │ 3 ms
        ▼
Charts Rendered
        │ 2 ms
        ▼
Theme Changed
        │ 1 ms
        ▼
UI Rendered{
    data,
    timestamp
}const duration =
    current.timestamp - previous.timestamp;Time        Event                 Data
────────────────────────────────────────────────────
20:31:12    transaction:added     {...}

20:31:12    storage:saved         {key}

20:31:12    dashboard:updated     {...}

20:31:12    charts:rendered       {chartId}

20:31:12    ui:rendered           nullconst MAX_EVENTS = 1000;

export function addEvent(event, data, timestamp) {
    timeline.push({ event, data, timestamp });

    if (timeline.length > MAX_EVENTS) {
        timeline.shift();
    }
}
