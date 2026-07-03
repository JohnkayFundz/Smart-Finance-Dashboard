const listeners = {};

export function on(event, handler) {
  (listeners[event] ||= []).push(handler);
}

export function emit(event, payload) {
  (listeners[event] || []).forEach(handler => handler(payload));
}
import { emit } from "../../core/events.js";
import { state } from "../../core/state.js";

export function addTransaction(transaction) {
  state.transactions.push(transaction);

  emit("transaction:added", {
    transaction,
    source: "transactions",
    timestamp: Date.now()
  });

  refresh("transaction");
}
import { emit } from "../core/events.js";

export function refreshDashboard() {
  const dashboard = calculateDashboard();
  emit("dashboard:updated", {
    dashboard,
    timestamp: Date.now()
  });
}
import { emit } from "../../core/events.js";

export function refreshUI() {
  renderDashboard();
  renderSidebar();
  renderTables();
  renderCards();

  emit("ui:rendered", { timestamp: Date.now() });
}
| Event | Emitter |
| --- | --- |
| ``transaction:added`` | ``features/transactions/transactions.js`` |
| ``transaction:updated`` | ``features/transactions/transactions.js`` |
| ``transaction:deleted`` | ``features/transactions/transactions.js`` |
| ``budget:created`` | ``features/budgets/budgets.js`` |
| ``budget:updated`` | ``features/budgets/budgets.js`` |
| ``budget:deleted`` | ``features/budgets/budgets.js`` |
| ``goal:completed`` | ``features/goals/goals.js`` |
| ``storage:saved`` | ``services/storage.js`` |
| ``dashboard:updated`` | ``services/dashboard.js`` |
| ``charts:rendered`` | ``services/charts.js`` |
| ``theme:changed`` | ``services/theme.js`` |
| ``ui:rendered`` | ``shared/ui/index.js`` |
| ``export:finished`` | ``services/export.js`` |
| ``import:finished`` | ``services/import.js`` |
