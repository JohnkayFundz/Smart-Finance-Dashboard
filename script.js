if (t.type.toLowerCase() === "expense" && t.category === category)
const remaining = budget.amount - spent;
const remainingText = remaining < 0 ? `- $${Math.abs(remaining).toFixed(2)}` : `$${remaining.toFixed(2)}`;
.progress-fill.good { background: #27ae60; }   /* green */
.progress-fill.warning { background: #f39c12; } /* orange */
.progress-fill.danger { background: #e74c3c; }  /* red */
const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
const totalSpent = transactions.filter(t => t.type.toLowerCase() === "expense")
                               .reduce((sum, t) => sum + t.amount, 0);
budgetSection.innerHTML = `
  <h2>Budgets</h2>
  <p>Total Budget: $${totalBudget.toFixed(2)} | Total Spent: $${totalSpent.toFixed(2)}</p>
`;
