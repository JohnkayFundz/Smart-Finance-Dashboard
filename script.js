let budgets = JSON.parse(localStorage.getItem("budgets")) || [];
let editingBudgetId = null;

function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}

function closeBudgetModal() {
    editingBudgetId = null;
    budgetForm.reset();
    budgetModal.classList.remove("show");
}

function openBudgetModal(budget = null) {

    budgetForm.reset();

    if (budget) {
        editingBudgetId = budget.id;

        budgetName.value = budget.name;
        budgetAmount.value = budget.amount;
        budgetCategory.value = budget.category;
    }

    budgetModal.classList.add("show");
}function refreshDashboard() {

    renderTransactions();

    renderBudgets();

    calculateMetrics();

    updateMetrics();

    refreshCharts();

}saveBudgets();

closeBudgetModal();

refreshDashboard();function saveTransactions() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

function saveBudgets() {
    localStorage.setItem(
        "budgets",
        JSON.stringify(budgets)
    );
}function getCategoryExpenses(category) {

    return transactions
        .filter(t =>
            t.type?.toLowerCase() === "expense" &&
            t.category === category
        )
        .reduce((sum, t) => sum + t.amount, 0);

}const budget = {
    id: Date.now(),
    name,
    amount,
    category,
    createdAt: new Date().toISOString(),
    updatedAt: null
};
};
