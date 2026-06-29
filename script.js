const id = Number(deleteBtn.dataset.id);
function saveBudgets() {
  localStorage.setItem("budgets", JSON.stringify(budgets));
}
let editingBudgetId = null;

list.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-budget");
  const editBtn = e.target.closest(".edit-budget");

  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.id);
    if (confirm("Delete this budget?")) {
      budgets = budgets.filter(b => b.id !== id);
      saveBudgets();
      renderBudgets();
    }
  }

  if (editBtn) {
    const id = Number(editBtn.dataset.id);
    const budget = budgets.find(b => b.id === id);
    if (!budget) return;

    editingBudgetId = id;

    budgetName.value = budget.name;
    budgetAmount.value = budget.amount;
    budgetCategory.value = budget.category;

    budgetModal.classList.add("show");
  }
});
budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (editingBudgetId) {
    // Update existing budget
    const budget = budgets.find(b => b.id === editingBudgetId);
    budget.name = budgetName.value;
    budget.amount = parseFloat(budgetAmount.value);
    budget.category = budgetCategory.value;
    editingBudgetId = null;
  } else {
    // Add new budget
    const newBudget = {
      id: Date.now(),
      name: budgetName.value,
      amount: parseFloat(budgetAmount.value),
      category: budgetCategory.value
    };
    budgets.push(newBudget);
  }

  saveBudgets();
  renderBudgets();
  budgetForm.reset();
  budgetModal.classList.remove("show");
});
