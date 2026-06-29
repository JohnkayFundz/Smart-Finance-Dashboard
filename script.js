const TRANSACTION_TYPES = {
    INCOME: "income",
    EXPENSE: "expense"
};

let budgets = [];
let transactions = [];

function loadData() {
    try {
        budgets = JSON.parse(localStorage.getItem("budgets")) || [];
        transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    } catch (error) {
        console.error("Failed to load data:", error);
        budgets = [];
        transactions = [];
    }
}

function saveData() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function getCategoryExpenses(category = "") {
    return transactions
        .filter(t =>
            t.type?.toLowerCase() === TRANSACTION_TYPES.EXPENSE &&
            t.category?.toLowerCase() === category.toLowerCase()
        )
        .reduce((sum, t) => sum + Number(t.amount || 0), 0);
}

function refreshDashboard() {
    loadData();
    renderTransactions?.();
    renderBudgets?.();
    calculateMetrics?.();
    updateMetrics?.();
    refreshCharts?.();
}

document.addEventListener("DOMContentLoaded", refreshDashboard);
