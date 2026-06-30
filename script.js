document.addEventListener("DOMContentLoaded", () => {
    loadData();
    refreshDashboard();
});

export function refreshDashboard() {
    renderTransactions();
    renderBudgets();
    calculateMetrics();
    updateMetrics();
    refreshCharts();
}const li = document.createElement("li");

const strong = document.createElement("strong");
strong.textContent = budget.name;

const text = document.createTextNode(
    ` - ${budget.category} : ${currency.format(budget.amount)} `
);

const editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.dataset.id = budget.id;
editBtn.className = "edit-budget-btn";

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.dataset.id = budget.id;
deleteBtn.className = "delete-budget-btn";

li.append(strong, text, editBtn, deleteBtn);export const currency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
});currency.format(budget.amount)budgetList.addEventListener("click", e => {
    const button = e.target.closest("button");

    if (!button) return;

    const id = button.dataset.id;

    if (button.classList.contains("edit-budget-btn")) {
        ...
    }

    if (button.classList.contains("delete-budget-btn")) {
        ...
    }
});import { budgets, deleteBudget } from "./budget.js";

import {
    transactions,
    deleteTransaction
} from "./transaction.js";export function initializeUI() {
    const budgetList = document.getElementById(DOM_IDS.BUDGET_LIST);

    budgetList.addEventListener("click", handleBudgetClick);

    const transactionList =
        document.getElementById(DOM_IDS.TRANSACTION_LIST);

    transactionList.addEventListener(
        "click",
        handleTransactionClick
    );
}loadData();

initializeUI();

refreshDashboard();export const elements = {
    budgetList:
        document.getElementById(DOM_IDS.BUDGET_LIST),

    transactionList:
        document.getElementById(DOM_IDS.TRANSACTION_LIST),

    metrics:
        document.getElementById(DOM_IDS.METRICS)
};
