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
├── panels.js
├── table.js
└── utils.js            Event Bus
                 │
                 ▼
           dashboard.js
                 │
                 ▼
      timeline.addEvent()
                 │
                 ▼
           statistics.js
                 │
                 ▼
      Charts • Panels • Table// dashboard.js

import { on } from "../core/events.js";
import { addEvent } from "./timeline.js";

import { renderPanels } from "./panels.js";
import { renderTimelineChart } from "./charts/timelineChart.js";
import { renderEventTypeChart } from "./charts/eventTypeChart.js";
import { renderWaterfallChart } from "./charts/waterfallChart.js";
import { renderTable } from "./table.js";

on("*", ({ data, timestamp }, event) => {
    addEvent(event, data, timestamp);

    renderPanels();
    renderTimelineChart();
    renderEventTypeChart();
    renderWaterfallChart();
    renderTable();
});const MAX_EVENTS = 1000;

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
}getTotalEvents()

getEventCounts()

getAverageRefreshTime()

getLastEvent()

getRefreshHistory()

getEventsPerSecond()

getSlowestRefresh()

getFastestRefresh()export function renderTimelineChart() {
    const events = getTimeline();

    // draw chart
}export function renderEventTypeChart() {
    const counts = getEventCounts();

    // draw chart
}renderPanels();getTotalEvents()

getAverageRefreshTime()

getLastEvent()

getEventsPerSecond()renderTable();getTimeline()Feature
    │
    ▼
Core State
    │
    ▼
Services
    │
    ▼
UI
    │
    ▼
Semantic Events
    │
    ▼
Event Bus
    │
    ▼
DevTools
    │
    ▼
Timeline
    │
    ▼
Statistics
    │
    ▼
Visualization
