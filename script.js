const TRANSACTION_TYPES = { ... };

let budgets = [];
let transactions = [];

function loadData() { ... }

function saveTransactions() { ... }

function saveBudgets() { ... }

function getCategoryExpenses(category = "") { ... }

function refreshDashboard() { ... }

document.addEventListener("DOMContentLoaded", () => {
    refreshDashboard();
});budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newBudget = {
        id: Date.now(),
        category,
        amount
    };

    budgets.push(newBudget);

    saveBudgets();
    refreshDashboard();
});
