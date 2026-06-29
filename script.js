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
// Modal
// ===========================

function openBudgetModal(budget = null) {

    budgetForm.reset();

    editingBudgetId = null;

    if (budget) {
        editingBudgetId = budget.id;

        budgetName.value = budget.name;
        budgetAmount.value = budget.amount;
        budgetCategory.value = budget.category;
    }

    budgetModal.classList.add("show");
}

function closeBudgetModal() {

    editingBudgetId = null;

    budgetForm.reset();

    budgetModal.classList.remove("show");
}const budget = {
    id: Date.now(),
    name,
    amount,
    category,
    createdAt: new Date().toISOString(),
    updatedAt: null
};

budgets.push(budget);

saveBudgets();
closeBudgetModal();
refreshDashboard();const budget = budgets.find(b => b.id === editingBudgetId);

if (budget) {

    budget.name = name;
    budget.amount = amount;
    budget.category = category;
    budget.updatedAt = new Date().toISOString();

}

saveBudgets();
closeBudgetModal();
refreshDashboard();budgets = budgets.filter(b => b.id !== id);

saveBudgets();

refreshDashboard();function refreshDashboard() {

    renderTransactions();
    renderBudgets();

    calculateMetrics();
    updateMetrics();

    refreshCharts();

}
