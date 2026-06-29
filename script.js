let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
const newBudget = {
    id: Date.now(),
    name: budgetName.value,
    amount: Number(budgetAmount.value),
    category: budgetCategory.value
};
if (!budgetName.value.trim() || Number(budgetAmount.value) <= 0) {
    alert("Please enter a valid budget name and amount.");
    return;
}
const TRANSACTION_TYPES = {
    INCOME: "income",
    EXPENSE: "expense"
};

let budgets = [];
let transactions = [];

try {
    budgets = JSON.parse(localStorage.getItem("budgets")) || [];
    transactions = JSON.parse(localStorage.getItem("transactions")) || [];
} catch {
    budgets = [];
    transactions = [];
}

function getCategoryExpenses(category) {
    return transactions
        .filter(t =>
            t.type?.toLowerCase() === TRANSACTION_TYPES.EXPENSE &&
            t.category?.toLowerCase() === category.toLowerCase()
        )
        .reduce((sum, t) => sum + Number(t.amount || 0), 0);
}

function refreshDashboard() {
    renderTransactions?.();
    renderBudgets?.();
    calculateMetrics?.();
    updateMetrics?.();
    refreshCharts?.();
}

// Initial load
refreshDashboard();
