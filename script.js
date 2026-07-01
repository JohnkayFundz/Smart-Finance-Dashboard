import { load } from "./storage.js";
import { STORAGE_KEYS } from "./constants.js";

export const state = {
    budgets: load(STORAGE_KEYS.BUDGETS),
    transactions: load(STORAGE_KEYS.TRANSACTIONS)
};import { load } from "./storage.js";
import { STORAGE_KEYS } from "./constants.js";

export const state = {
    budgets: load(STORAGE_KEYS.BUDGETS),
    transactions: load(STORAGE_KEYS.TRANSACTIONS)
};import { state } from "../../core/state.js";

export function addTransaction(transaction) {
    state.transactions.push(transaction);
}

export function getTransactions() {
    return state.transactions;
}import { state } from "./core/state.js";
import { save } from "./core/storage.js";
import { STORAGE_KEYS } from "./core/constants.js";
import { updateDashboard } from "./features/dashboard/dashboard.js";
import { updateCharts } from "./services/chartService.js";
import { renderUI } from "./shared/ui.js";

export function refresh() {
    save(STORAGE_KEYS.BUDGETS, state.budgets);
    save(STORAGE_KEYS.TRANSACTIONS, state.transactions);

    updateDashboard();
    updateCharts();
    renderUI();
}User Action
      │
      ▼
budget-ui.js
      │
      ▼
budget.js
      │
      ▼
state.js
      │
      ▼
app.refresh()
      │
      ├──► storage.save()
      ├──► dashboard.calculate()
      ├──► chartService.update()
      └──► ui.render()
