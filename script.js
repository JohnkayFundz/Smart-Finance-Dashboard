function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}saveBudgets();

closeBudgetModal();

refreshDashboard();saveBudgets();
closeBudgetModal();
refreshDashboard();const budget = {
    id: Date.now(),
    name,
    amount,
    category,
    createdAt: new Date().toISOString(),
    updatedAt: null
};budget.name = name;
budget.amount = amount;
budget.category = category;
budget.updatedAt = new Date().toISOString();budgets.js
│
├── let budgets = ...
├── let editingBudgetId = null
│
├── saveBudgets()
├── getCategoryExpenses()
├── openBudgetModal()
├── closeBudgetModal()
├── renderBudgets()
│
├── budgetForm submit
├── budget list click handler
│
└── helper functions
