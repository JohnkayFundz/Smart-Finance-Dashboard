const budgetModal = document.getElementById("budgetModal");
const closeBudgetModal = document.getElementById("closeBudgetModal");
const addBudgetBtn = document.getElementById("addBudgetBtn");
const budgetForm = document.getElementById("budgetForm");

let budgets = JSON.parse(localStorage.getItem("budgets")) || [];

// Open modal
addBudgetBtn.addEventListener("click", () => {
  budgetModal.style.display = "block";
});

// Close modal
closeBudgetModal.addEventListener("click", () => {
  budgetModal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === budgetModal) budgetModal.style.display = "none";
});

// Handle form submission
budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("budgetName").value;
  const amount = parseFloat(document.getElementById("budgetAmount").value);
  const category = document.getElementById("budgetCategory").value;

  if (!name.trim()) {
    alert("Budget name is required.");
    return;
  }
  if (amount <= 0) {
    alert("Amount must be greater than zero.");
    return;
  }
  if (!category.trim()) {
    alert("Category is required.");
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
});

// Render budgets
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
    item.textContent = `${budget.name} (${budget.category}): $${budget.amount.toFixed(2)}`;
    list.appendChild(item);
  });
  budgetSection.appendChild(list);
}

// Initialize budgets on page load
renderBudgets();
