devtools/
│
├── dashboard.html          # Layout
├── dashboard.js            # Coordinator
│
├── timeline.js             # Event store
├── statistics.js           # Derived metrics
│
├── charts/
│   ├── timelineChart.js
│   ├── eventTypeChart.js
│   └── waterfallChart.js
│
├── panels.js               # Summary cards
├── table.js                # Event table
└── utils.js                # Shared helpers (optional)Event Bus
    │
    ▼
on("*")
    │
    ▼
timeline.addEvent()
    │
    ├───────────────┐
    ▼               ▼
statistics      dashboard
    │               │
    ▼               ▼
metrics      charts / panels / tableconst MAX_EVENTS = 1000;

export const timeline = [];

export function addEvent(event, data, timestamp) {
    timeline.push({
        event,
        data,
        timestamp
    });

    if (timeline.length > MAX_EVENTS) {
        timeline.shift();
    }
}

export function getTimeline() {
    return timeline;
}

export function clearTimeline() {
    timeline.length = 0;
}export function getTotalEvents() {}

export function getEventCounts() {}

export function getAverageRefreshTime() {}

export function getLastEvent() {}

export function getRefreshHistory() {}

export function getEventsPerSecond() {}

export function getSlowestRefresh() {}

export function getFastestRefresh() {}on("*", ({ data, timestamp }, event) => {

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
│       ●
│          ●
│              ●
│                  ●
└────────────────────────────►

transaction
storage
dashboard
uitransaction:added     ████████████

storage:saved         █████████

dashboard:updated     ████████

charts:rendered       ███████

ui:rendered           ███████

theme:changed         ███Transaction Added
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
UI Renderedconst duration =
    current.timestamp - previous.timestamp;Time        Event                 Data
──────────────────────────────────────────────────
20:31:12    transaction:added     {...}

20:31:12    storage:saved         { key }

20:31:12    dashboard:updated     {...}

20:31:12    charts:rendered       { chartId }

20:31:12    ui:rendered           nullState
    │
    ▼
Services
    │
    ▼
UITimeline
    │
    ▼
Statistics
    │
    ▼
Visualizationon("*", ({ data, timestamp }, event) => {
    addEvent(event, data, timestamp);
});
