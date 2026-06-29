function getCategoryExpenses(category) {
    return (transactions || [])
        .filter(t =>
            t.type?.toLowerCase() === "expense" &&
            t.category === category
        )
        .reduce((sum, t) => sum + Number(t.amount || 0), 0);
}function refreshDashboard() {
    renderTransactions?.();
    renderBudgets?.();
    calculateMetrics?.();
    updateMetrics?.();
    refreshCharts?.();
}t.category?.toLowerCase() === category.toLowerCase()let budgets = [];

try {
    budgets = JSON.parse(localStorage.getItem("budgets")) || [];
} catch (error) {
    budgets = [];
}function openBudgetModal(budget = null) {

    budgetForm.reset();
    editingBudgetId = null;

    if (budget) {
        editingBudgetId = budget.id;

        budgetName.value = budget.name;
        budgetAmount.value = budget.amount;
        budgetCategory.value = budget.category;

        modalTitle.textContent = "Edit Budget";
        saveBudgetBtn.textContent = "Update Budget";
    } else {
        modalTitle.textContent = "Add Budget";
        saveBudgetBtn.textContent = "Save Budget";
    }

    budgetModal.classList.add("show");
}budgetModal.addEventListener("click", (e) => {
    if (e.target === budgetModal) {
        closeBudgetModal();
    }
});document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && budgetModal.classList.contains("show")) {
        closeBudgetModal();
    }
});function getBudgetById(id) {
    return budgets.find(budget => budget.id === id);
}t.type?.toLowerCase() === TRANSACTION_TYPES.EXPENSE
