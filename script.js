function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}saveBudgets();
refreshDashboard();budgetModal.classList.add("show");budgetModal.classList.remove("show");// State
let budgets = JSON.parse(localStorage.getItem("budgets")) || [];
let editingBudgetId = null;

// Storage
function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}

// Helpers
function getCategoryExpenses(category) {
    // ...
}

// Dashboard
function refreshDashboard() {
    renderTransactions();
    renderBudgets();
    calculateMetrics();
    updateMetrics();
    refreshCharts();
}
