// core/events.js
const listeners = {};

export function on(event, handler) {
  (listeners[event] ||= []).push(handler);
}

export function emit(event, payload) {
  (listeners[event] || []).forEach(handler => handler(payload));
}
import { emit } from "./core/events.js";

export function refresh(mode = "full") {
    const options = REFRESH[mode] || REFRESH.full;

    if (options.storage) {
        refreshStorage();
        emit("refresh:storage", state);
    }
    if (options.dashboard) {
        refreshDashboard();
        emit("refresh:dashboard", state);
    }
    if (options.charts) {
        refreshCharts();
        emit("refresh:charts", state);
    }
    if (options.theme) {
        refreshTheme();
        emit("refresh:theme", state);
    }
    if (options.ui) {
        refreshUI();
        emit("refresh:ui", state);
    }

    // Always emit a general event
    emit(`refresh:${mode}`, state);
    emit("refresh:all", { mode, state });
}
import { on } from "../core/events.js";

on("refresh:charts", (state) => {
    updateCharts(state);
});
import { on } from "../../core/events.js";

on("refresh:budget", (state) => {
    renderBudgetUI(state.budgets);
});
