import { load } from "./storage.js";
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
}export function updateTransaction(updatedTransaction) {
    const index = state.transactions.findIndex(
        transaction => transaction.id === updatedTransaction.id
    );

    if (index !== -1) {
        state.transactions[index] = updatedTransaction;
    }
}

export function deleteTransaction(id) {
    state.transactions = state.transactions.filter(
        transaction => transaction.id !== id
    );
}export function refresh() {
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
      └──► ui.render()// budget.js
export function addBudget(budget) {
    state.budgets.push(budget);
}

export function updateBudget(updatedBudget) {
    // mutate state
}

export function deleteBudget(id) {
    // mutate state
}// transaction.js
export function addTransaction(transaction) {
    state.transactions.push(transaction);
}

export function updateTransaction(transaction) {
    // mutate state
}

export function deleteTransaction(id) {
    // mutate state
}
