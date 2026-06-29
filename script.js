function renderBudgetSummary() {
  const summarySection = document.getElementById("budgetSummary");
  summarySection.innerHTML = "";

  const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
  const totalSpent = transactions
    .filter(t => t.type.toLowerCase() === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const remaining = totalBudget - totalSpent;

  const summaries = [
    { title: "Total Budget", value: `$${totalBudget.toFixed(2)}` },
    { title: "Total Spent", value: `$${totalSpent.toFixed(2)}` },
    { title: "Remaining", value: `$${remaining.toFixed(2)}` }
  ];

  summaries.forEach(s => {
    const card = document.createElement("div");
    card.className = "summary-card";
    card.innerHTML = `<h3>${s.title}</h3><span>${s.value}</span>`;
    summarySection.appendChild(card);
  });
}
