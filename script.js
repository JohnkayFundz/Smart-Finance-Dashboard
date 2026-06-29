function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}let editingBudgetId = null;list.addEventListener("click", (e) => {

    const deleteBtn = e.target.closest(".delete-budget");
    const editBtn = e.target.closest(".edit-budget");

    // Delete
    if (deleteBtn) {

        const id = Number(deleteBtn.dataset.id);

        if (confirm("Delete this budget?")) {

            budgets = budgets.filter(b => b.id !== id);

            saveBudgets();
            renderBudgets();
        }

        return;
    }

    // Edit
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

});budgetForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = budgetName.value.trim();
    const amount = Number(budgetAmount.value);
    const category = budgetCategory.value;

    if (!name || amount <= 0 || !category) {
        alert("Please fill all fields.");
        return;
    }

    if (editingBudgetId !== null) {

        const budget = budgets.find(b => b.id === editingBudgetId);

        if (budget) {
            budget.name = name;
            budget.amount = amount;
            budget.category = category;
        }

        editingBudgetId = null;

    } else {

        budgets.push({
            id: Date.now(),
            name,
            amount,
            category
        });

    }

    saveBudgets();

    budgetForm.reset();

    budgetModal.classList.remove("show");

    renderBudgets();

});
