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

function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}

function getCategoryExpenses(category = "") {
    return transactions
        .filter(transaction =>
            transaction.type?.toLowerCase() === TRANSACTION_TYPES.EXPENSE &&
            transaction.category?.toLowerCase() === category.toLowerCase()
        )
        .reduce((total, transaction) => total + Number(transaction.amount || 0), 0);
}

function refreshDashboard() {
    loadData();

    if (typeof renderTransactions === "function") renderTransactions();
    if (typeof renderBudgets === "function") renderBudgets();
    if (typeof calculateMetrics === "function") calculateMetrics();
    if (typeof updateMetrics === "function") updateMetrics();
    if (typeof refreshCharts === "function") refreshCharts();
}

document.addEventListener("DOMContentLoaded", () => {
    refreshDashboard();
});
