let editingBudgetId = null;item.querySelector(".edit-budget").addEventListener("click", () => {

    editingBudgetId = budget.id;

    budgetName.value = budget.name;
    budgetAmount.value = budget.amount;
    budgetCategory.value = budget.category;

    budgetModal.classList.add("show");
});budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = budgetName.value.trim();
    const amount = Number(budgetAmount.value);
    const category = budgetCategory.value;

    if (!name || amount <= 0 || !category) {
        alert("Please fill all fields correctly.");
        return;
    }

    if (editingBudgetId) {

        const budget = budgets.find(b => b.id === editingBudgetId);

        budget.name = name;
        budget.amount = amount;
        budget.category = category;

        editingBudgetId = null;

    } else {

        budgets.push({
            id: Date.now(),
            name,
            amount,
            category
        });

    }

    localStorage.setItem("budgets", JSON.stringify(budgets));

    budgetForm.reset();
    budgetModal.classList.remove("show");

    renderBudgets();
});budgets = budgets.filter(b => b.id !== budget.id);

saveBudgets();
renderBudgets();
