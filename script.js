// app.js

import { loadData } from "./storage.js";
import { renderBudgets, renderTransactions } from "./ui.js";
import { calculateMetrics, updateMetrics } from "./dashboard.js";
import { refreshCharts } from "./charts.js";

function refreshDashboard() {
    loadData();
    renderTransactions();
    renderBudgets();
    calculateMetrics();
    updateMetrics();
    refreshCharts();
}

document.addEventListener("DOMContentLoaded", () => {
    refreshDashboard();
});
import { budgets, transactions, deleteBudget, deleteTransaction } from "./budget.js";
import { openBudgetModal } from "./budget.js";
import { openTransactionModal } from "./transaction.js";
import { DOM_IDS } from "./helpers.js";

export function renderBudgets() {
    const budgetList = document.getElementById(DOM_IDS.BUDGET_LIST);
    budgetList.innerHTML = "";

    budgets.forEach(budget => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${budget.name}</strong> - ${budget.category} : $${budget.amount}
            <button class="edit-budget-btn" data-id="${budget.id}">Edit</button>
            <button class="delete-budget-btn" data-id="${budget.id}">Delete</button>
        `;
        budgetList.appendChild(li);
    });

    attachBudgetHandlers();
}

export function renderTransactions() {
    const transactionList = document.getElementById(DOM_IDS.TRANSACTION_LIST);
    transactionList.innerHTML = "";

    transactions.forEach(transaction => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${transaction.type}</strong> - ${transaction.category} : $${transaction.amount}
            <button class="edit-transaction-btn" data-id="${transaction.id}">Edit</button>
            <button class="delete-transaction-btn" data-id="${transaction.id}">Delete</button>
        `;
        transactionList.appendChild(li);
    });

    attachTransactionHandlers();
}

function attachBudgetHandlers() {
    document.querySelectorAll(".edit-budget-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const budget = budgets.find(b => b.id === id);
            if (budget) openBudgetModal(budget);
        });
    });

    document.querySelectorAll(".delete-budget-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            deleteBudget(btn.dataset.id);
        });
    });
}

function attachTransactionHandlers() {
    document.querySelectorAll(".edit-transaction-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const transaction = transactions.find(t => t.id === id);
            if (transaction) openTransactionModal(transaction);
        });
    });

    document.querySelectorAll(".delete-transaction-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            deleteTransaction(btn.dataset.id);
        });
    });
}
