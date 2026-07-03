// devtools.js
import { on } from "../core/events.js";

on("transaction:added", ({ transaction, timestamp }) => {
  console.log("[DevTools] Transaction added:", transaction, "at", new Date(timestamp));
});

on("dashboard:updated", ({ dashboard, timestamp }) => {
  console.log("[DevTools] Dashboard recalculated:", dashboard, "at", new Date(timestamp));
});

on("ui:rendered", ({ timestamp }) => {
  console.log("[DevTools] UI rendered at", new Date(timestamp));
});
emit(EVENTS.DASHBOARD_UPDATED, {
    dashboard,
    timestamp: Date.now()
});
emit(EVENTS.TRANSACTION_ADDED, {
    transaction,
    source: "transactions",
    timestamp: Date.now()
});
| Event | Emitter | Typical Payload |
| --- | --- | --- |
| ``transaction:added`` | ``features/transactions/transactions.js`` | ``{transaction, ``source, ``timestamp}`` |
| ``transaction:updated`` | ``features/transactions/transactions.js`` | ``{transaction, ``timestamp}`` |
| ``transaction:deleted`` | ``features/transactions/transactions.js`` | ``{id, ``timestamp}`` |
| ``budget:created`` | ``features/budgets/budgets.js`` | ``{budget, ``timestamp}`` |
| ``budget:updated`` | ``features/budgets/budgets.js`` | ``{budget, ``timestamp}`` |
| ``budget:deleted`` | ``features/budgets/budgets.js`` | ``{id, ``timestamp}`` |
| ``goal:completed`` | ``features/goals/goals.js`` | ``{goal, ``timestamp}`` |
| ``storage:saved`` | ``services/storage.js`` | ``{key, ``timestamp}`` |
| ``dashboard:updated`` | ``services/dashboard.js`` | ``{dashboard, ``timestamp}`` |
| ``charts:rendered`` | ``services/charts.js`` | ``{chartId, ``timestamp}`` |
| ``theme:changed`` | ``services/theme.js`` | ``{theme, ``timestamp}`` |
| ``ui:rendered`` | ``shared/ui/index.js`` | ``{timestamp}`` |
| ``export:finished`` | ``services/export.js`` | ``{file, ``timestamp}`` |
| ``import:finished`` | ``services/import.js`` | ``{file, ``timestamp}`` |
