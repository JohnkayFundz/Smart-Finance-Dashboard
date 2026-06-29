function renderBudgets() {
  const budgetSection = document.getElementById("budgets");
  budgetSection.innerHTML = "<h2>Budgets</h2>";

  if (budgets.length === 0) {
    budgetSection.innerHTML += "<p>No budgets yet.</p>";
    return;
  }

  const list = document.createElement("ul");
  budgets.forEach(budget => {
    const item = document.createElement("li");
    item.innerHTML = `
      ${budget.name} (${budget.category}): $${budget.amount.toFixed(2)}
      <button class="edit-budget">Edit</button>
      <button class="delete-budget">Delete</button>
    `;
    list.appendChild(item);

    // Delete handler
    item.querySelector(".delete-budget").addEventListener("click", () => {
      if (confirm("Delete this budget?")) {
        budgets = budgets.filter(b => b.id !== budget.id);
        localStorage.setItem("budgets", JSON.stringify(budgets));
        renderBudgets();
      }
    });

    // Edit handler
    item.querySelector(".edit-budget").addEventListener("click", () => {
      document.getElementById("budgetName").value = budget.name;
      document.getElementById("budgetAmount").value = budget.amount;
      document.getElementById("budgetCategory").value = budget.category;

      // Open modal
      budgetModal.style.display = "block";

      // Replace submit handler temporarily
      budgetForm.onsubmit = (e) => {
        e.preventDefault();
        budget.name = document.getElementById("budgetName").value;
        budget.amount = parseFloat(document.getElementById("budgetAmount").value);
        budget.category = document.getElementById("budgetCategory").value;

        localStorage.setItem("budgets", JSON.stringify(budgets));
        renderBudgets();
        budgetForm.reset();
        budgetModal.style.display = "none";

        // Restore default submit handler
        budgetForm.onsubmit = defaultBudgetSubmit;
      };
    });
  });
  budgetSection.appendChild(list);
}
function defaultBudgetSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("budgetName").value;
  const amount = parseFloat(document.getElementById("budgetAmount").value);
  const category = document.getElementById("budgetCategory").value;

  if (!name.trim() || amount <= 0 || !category.trim()) {
    alert("Please fill all fields correctly.");
    return;
  }

  const newBudget = {
    id: Date.now(),
    name,
    amount,
    category
  };

  budgets.push(newBudget);
  localStorage.setItem("budgets", JSON.stringify(budgets));
  renderBudgets();
  budgetForm.reset();
  budgetModal.style.display = "none";
}

budgetForm.onsubmit = defaultBudgetSubmit;
