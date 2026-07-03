export function getAverageRefreshTime() {
    const history = getRefreshHistory();

    if (history.length < 2) {
        return 0;
    }

    let total = 0;

    for (let i = 1; i < history.length; i++) {
        total += history[i].timestamp - history[i - 1].timestamp;
    }

    return Math.round(total / (history.length - 1));
}export function getSlowestRefresh() {
    const history = getRefreshHistory();

    if (history.length < 2) {
        return null;
    }

    let slowest = 0;

    for (let i = 1; i < history.length; i++) {
        slowest = Math.max(
            slowest,
            history[i].timestamp - history[i - 1].timestamp
        );
    }

    return slowest;
}export function getFastestRefresh() {
    const history = getRefreshHistory();

    if (history.length < 2) {
        return null;
    }

    let fastest = Infinity;

    for (let i = 1; i < history.length; i++) {
        fastest = Math.min(
            fastest,
            history[i].timestamp - history[i - 1].timestamp
        );
    }

    return fastest;
}import { getTimeline } from "./timeline.js";const timeline = getTimeline();statistics.js
│
├── Basic
│   ├── getTotalEvents()
│   ├── getLastEvent()
│   └── getEventCounts()
│
├── Timeline
│   ├── getRefreshHistory()
│   ├── getAverageRefreshTime()
│   ├── getFastestRefresh()
│   └── getSlowestRefresh()
│
└── Performance
    └── getEventsPerSecond()
