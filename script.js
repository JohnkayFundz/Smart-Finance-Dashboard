import {
    getTotalEvents,
    getAverageRefreshTime,
    getLastEvent,
    getEventsPerSecond
} from "./statistics.js";

export function renderPanels() {
    document.getElementById("total-events").textContent =
        getTotalEvents();

    document.getElementById("avg-refresh").textContent =
        `${getAverageRefreshTime()} ms`;

    document.getElementById("last-event").textContent =
        getLastEvent()?.events?.at(-1)?.event ??
        getLastEvent()?.event ??
        "None";

    document.getElementById("fps").textContent =
        getEventsPerSecond();
}+--------------------------------------------------------------+
| Total Events | Avg Refresh | Last Event | FPS | Active Cycle |
+--------------------------------------------------------------+

+--------------------------------------------------------------+
| Fastest Refresh | Slowest Refresh | Avg Events/Cycle         |
+--------------------------------------------------------------+

+--------------------------------------------------------------+
| Memory Usage | Event Queue | Timeline Size | Last Refresh    |
+--------------------------------------------------------------+
