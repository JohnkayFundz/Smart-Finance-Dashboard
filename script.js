// devtools/timeline.js
import { on } from "../core/events.js";

const timeline = [];

/**
 * Subscribe to all events and log them in a timeline.
 * @param {string[]} events - List of events to track
 */
export function initTimelineLogger(events) {
  events.forEach(event => {
    on(event, ({ data, timestamp }) => {
      timeline.push({
        event,
        data,
        timestamp: new Date(timestamp).toLocaleTimeString()
      });

      // Display as a console table
      console.clear();
      console.table(timeline);
    });
  });
}
import { initTimelineLogger } from "./devtools/timeline.js";
import { EVENTS } from "../core/constants.js";

initTimelineLogger([
  EVENTS.TRANSACTION_ADDED,
  EVENTS.TRANSACTION_UPDATED,
  EVENTS.BUDGET_UPDATED,
  EVENTS.DASHBOARD_UPDATED,
  EVENTS.CHARTS_RENDERED,
  EVENTS.THEME_CHANGED,
  EVENTS.UI_RENDERED
]);
┌─────────┬─────────────────────┬─────────────────────────────┬───────────────┐
│ (index) │        event        │            data             │   timestamp   │
├─────────┼─────────────────────┼─────────────────────────────┼───────────────┤
│    0    │ 'transaction:added' │ { id: 1, amount: 50 }       │ '20:46:12'    │
│    1    │ 'dashboard:updated' │ { total: 500, expenses: 50 }│ '20:46:12'    │
│    2    │ 'charts:rendered'   │ { chartId: 'expenses' }     │ '20:46:12'    │
│    3    │ 'ui:rendered'       │ null                        │ '20:46:12'    │
└─────────┴─────────────────────┴─────────────────────────────┴───────────────┘
