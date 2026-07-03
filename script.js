// devtools/timeline.js
import { on } from "../core/events.js";

const timeline = [];
let currentCycle = null;

export function startCycle(mode) {
  currentCycle = {
    mode,
    events: [],
    startedAt: Date.now()
  };
  timeline.push(currentCycle);
}

export function endCycle() {
  if (currentCycle) {
    currentCycle.endedAt = Date.now();
    currentCycle.duration = currentCycle.endedAt - currentCycle.startedAt;
    currentCycle = null;
  }
}

export function initTimelineLogger(events) {
  events.forEach(event => {
    on(event, ({ data, timestamp }) => {
      const entry = { event, data, timestamp: new Date(timestamp).toLocaleTimeString() };

      if (currentCycle) {
        currentCycle.events.push(entry);
      } else {
        timeline.push(entry);
      }

      console.clear();
      console.table(timeline.map(t => ({
        mode: t.mode || "-",
        eventCount: t.events ? t.events.length : 1,
        duration: t.duration || "-",
        lastEvent: t.events ? t.events[t.events.length - 1]?.event : t.event,
        timestamp: t.endedAt ? new Date(t.endedAt).toLocaleTimeString() : t.timestamp
      })));
    });
  });
}

export function getTimeline() {
  return timeline;
}
import { startCycle, endCycle, initTimelineLogger } from "./devtools/timeline.js";
import { EVENTS } from "./core/constants.js";

initTimelineLogger([
  EVENTS.TRANSACTION_ADDED,
  EVENTS.TRANSACTION_UPDATED,
  EVENTS.BUDGET_UPDATED,
  EVENTS.DASHBOARD_UPDATED,
  EVENTS.CHARTS_RENDERED,
  EVENTS.THEME_CHANGED,
  EVENTS.UI_RENDERED
]);

export function refresh(mode = "full") {
  startCycle(mode);

  // existing refresh pipeline
  if (options.storage) refreshStorage();
  if (options.dashboard) refreshDashboard();
  if (options.charts) refreshCharts();
  if (options.theme) refreshTheme();
  if (options.ui) refreshUI();

  endCycle();
}
┌─────────┬───────────────┬─────────────┬───────────────┬───────────────┐
│ (index) │     mode      │ eventCount  │   duration    │   lastEvent   │
├─────────┼───────────────┼─────────────┼───────────────┼───────────────┤
│    0    │ 'transaction' │      4      │    12 ms      │ 'ui:rendered' │
│    1    │ 'budget'      │      3      │    9 ms       │ 'charts:rendered' │
└─────────┴───────────────┴─────────────┴───────────────┴───────────────┘
