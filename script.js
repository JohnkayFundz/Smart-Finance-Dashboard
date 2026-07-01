User Action
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
      ├────────► storage.save()
      ├────────► dashboard.calculate()
      ├────────► chartService.update()
      └────────► ui.render()js/
│
├── app.js
│
├── core/
│   ├── state.js
│   ├── storage.js
│   ├── constants.js
│   └── helpers.js
│
├── features/
│   ├── budgets/
│   │   ├── budget.js
│   │   ├── budget-ui.js
│   │   └── budget-validation.js
│   │
│   ├── transactions/
│   │   ├── transaction.js
│   │   ├── transaction-ui.js
│   │   └── transaction-validation.js
│   │
│   └── dashboard/
│       └── dashboard.js
│
├── services/
│   ├── chartService.js
│   ├── exportService.js
│   └── reportService.js
│
└── shared/
    ├── modal.js
    └── ui.jsexport const STORAGE_KEYS = Object.freeze({
    BUDGETS: "budgets",
    TRANSACTIONS: "transactions",
    THEME: "theme"
});

export const TRANSACTION_TYPES = Object.freeze({
    INCOME: "income",
    EXPENSE: "expense"
});

export const CSS = Object.freeze({
    EDIT_BUDGET: "edit-budget-btn",
    DELETE_BUDGET: "delete-budget-btn",
    EDIT_TRANSACTION: "edit-transaction-btn",
    DELETE_TRANSACTION: "delete-transaction-btn"
});import { STORAGE_KEYS } from "./constants.js";

export function load(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? [];
    } catch {
        return [];
    }
}

export function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}import { load } from "./storage.js";
import { STORAGE_KEYS } from "./constants.js";

const budgets = load(STORAGE_KEYS.BUDGETS);export function validateBudget(budget) {
    const errors = {};

    if (!budget.name?.trim()) {
        errors.name = "Budget name is required.";
    }

    if (Number(budget.amount) <= 0) {
        errors.amount = "Budget amount must be greater than zero.";
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
}const button = event.target.closest("button");

if (!button) return;import { save } from "./core/storage.js";
import { STORAGE_KEYS } from "./core/constants.js";
import { renderUI } from "./shared/ui.js";
import { updateDashboard } from "./features/dashboard/dashboard.js";
import { getBudgets } from "./features/budgets/budget.js";
import { getTransactions } from "./features/transactions/transaction.js";

export function refresh() {
    save(STORAGE_KEYS.BUDGETS, getBudgets());
    save(STORAGE_KEYS.TRANSACTIONS, getTransactions());

    updateDashboard();
    renderUI();
}export function addBudget(budget) {
    budgets.push(budget);
}

export function updateBudget(updatedBudget) {
    // update state
}

export function deleteBudget(id) {
    // remove budget
}

export function getBudgets() {
    return budgets;
}import { addBudget } from "./budget.js";
import { validateBudget } from "./budget-validation.js";
import { refresh } from "../../app.js";

function submitBudget() {
    const budget = getBudgetFormData();

    const result = validateBudget(budget);

    if (!result.valid) {
        showErrors(result.errors);
        return;
    }

    addBudget(budget);

    refresh();
}import { load } from "./storage.js";
import { STORAGE_KEYS } from "./constants.js";

export const state = {
    budgets: load(STORAGE_KEYS.BUDGETS),
    transactions: load(STORAGE_KEYS.TRANSACTIONS)
};
