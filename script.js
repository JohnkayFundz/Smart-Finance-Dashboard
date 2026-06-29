function closeBudgetModal() {
    editingBudgetId = null;
    budgetForm.reset();
    budgetModal.classList.remove("show");
}function refreshDashboard() {
    renderTransactions();
    renderBudgets();
    calculateMetrics();
    updateMetrics();
    refreshCharts();
}budgetForm.reset();

budgetName.value = budget.name;
budgetAmount.value = budget.amount;
budgetCategory.value = budget.category;budgets.push({
    id: Date.now(),
    name,
    amount,
    category,
    createdAt: new Date().toISOString()
});budget.js
│
├── saveBudgets()
├── getCategoryExpenses()
├── renderBudgets()
├── refreshDashboard()
│
├── budgetForm submit
├── list click (Edit/Delete)
│
├── openBudgetModal()
├── closeBudgetModal()
│
└── editingBudgetId
