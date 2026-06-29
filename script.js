// ===========================
// State
// ===========================

let budgets = JSON.parse(localStorage.getItem("budgets")) || [];
let editingBudgetId = null;

// ===========================
// Storage
// ===========================

function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}

// ===========================
// Helpers
// ===========================

function getCategoryExpenses(category) {
    return transactions
        .filter(t =>
            t.type?.toLowerCase() === "expense" &&
            t.category === category
        )
        .reduce((sum, t) => sum + t.amount, 0);
}

// ===========================
// Dashboard
// ===========================

function refreshDashboard() {
    renderTransactions();
    renderBudgets();
    calculateMetrics();
    updateMetrics();
    refreshCharts();
}saveBudgets();
refreshDashboard();

budgetModal.classList.add("show");
budgetModal.classList.remove("show");budgets.push(newBudget);

saveBudgets();
closeBudgetModal();
refreshDashboard();budget.name = name;
budget.amount = amount;
budget.category = category;
budget.updatedAt = new Date().toISOString();

saveBudgets();
closeBudgetModal();
refreshDashboard();budgetModal.classList.add("show");budgetModal.classList.remove("show");js/
│
├── app.js
├── storage.js
├── transactions.js
├── budgets.js
├── dashboard.js
├── charts.js
├── ui.js
└── utils.js
