const id = Number(deleteBtn.dataset.id);const id = Number(editBtn.dataset.id);const id = Number(editBtn.dataset.id);if (!budget) return;editingBudgetId = id;

budgetName.value = budget.name;
budgetAmount.value = budget.amount;
budgetCategory.value = budget.category;

budgetModal.style.display = "block";localStorage.setItem("budgets", JSON.stringify(budgets));function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}saveBudgets();
renderBudgets();budgetModal.classList.add("show");budgetModal.classList.remove("show");list.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-budget");
    const editBtn = e.target.closest(".edit-budget");

    // Handle actions...
});
