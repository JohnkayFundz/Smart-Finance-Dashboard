list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-budget")) {
    const id = e.target.dataset.id;
    if (confirm("Delete this budget?")) {
      budgets = budgets.filter(b => b.id != id);
      localStorage.setItem("budgets", JSON.stringify(budgets));
      renderBudgets();
    }
  }

  if (e.target.classList.contains("edit-budget")) {
    const id = e.target.dataset.id;
    const budget = budgets.find(b => b.id == id);

    document.getElementById("budgetName").value = budget.name;
    document.getElementById("budgetAmount").value = budget.amount;
    document.getElementById("budgetCategory").value = budget.category;

    budgetModal.style.display = "block";

    budgetForm.onsubmit = (e) => {
      e.preventDefault();
      budget.name = document.getElementById("budgetName").value;
      budget.amount = parseFloat(document.getElementById("budgetAmount").value);
      budget.category = document.getElementById("budgetCategory").value;

      localStorage.setItem("budgets", JSON.stringify(budgets));
      renderBudgets();
      budgetForm.reset();
      budgetModal.style.display = "none";
      budgetForm.onsubmit = defaultBudgetSubmit;
    };
  }
});
