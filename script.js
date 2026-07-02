// services/dashboard.js

import { emit } from "../core/events.js";

export function refreshDashboard() {
    calculateDashboard(state);

    emit("dashboard:updated", state.dashboard);
}// services/charts.js

import { emit } from "../core/events.js";

export function refreshCharts() {
    renderCharts(state);

    emit("charts:updated");
}export function refresh(mode = "full") {
    const options = REFRESH[mode] ?? REFRESH.full;

    if (options.storage) refreshStorage();
    if (options.dashboard) refreshDashboard();
    if (options.charts) refreshCharts();
    if (options.theme) refreshTheme();
    if (options.ui) refreshUI();
}storage:saved
dashboard:updated
charts:rendered
theme:changed
ui:rendered

transaction:added
transaction:updated
transaction:deleted

budget:created
budget:updated

goal:completedconst listeners = {};

export function on(event, handler) {
    (listeners[event] ??= new Set()).add(handler);
}

export function off(event, handler) {
    listeners[event]?.delete(handler);
}

export function once(event, handler) {
    function wrapper(payload) {
        off(event, wrapper);
        handler(payload);
    }

    on(event, wrapper);
}

export function emit(event, payload) {
    listeners[event]?.forEach(handler => handler(payload));
}Export finished
Theme changed
Data imported
Storage saved
