const TRANSACTION_TYPES = {
    INCOME: "income",
    EXPENSE: "expense"
};

let budgets = [];

try {
    budgets = JSON.parse(localStorage.getItem("budgets")) || [];
} catch (error) {
    budgets = [];
}

function getCategoryExpenses(category) {
    return (transactions || [])
        .filter(t =>
            t.type?.toLowerCase() === TRANSACTION_TYPES.EXPENSE &&
            t.category?.toLowerCase() === category.toLowerCase()
        )
        .reduce((sum, t) => sum + Number(t.amount || 0), 0);
}

function refreshDashboard() {
    renderTransactions();
    renderBudgets();
    calculateMetrics();
    updateMetrics();
    refreshCharts();
}

// Initialize when the page is ready
document.addEventListener("DOMContentLoaded", () => {
    refreshDashboard();
});refreshDashboard();
