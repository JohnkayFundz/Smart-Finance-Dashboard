let budgets = JSON.parse(localStorage.getItem("budgets")) || [];
let editingBudgetId = null;
function saveBudgets() {
  localStorage.setItem("budgets", JSON.stringify(budgets));
}
function getCategoryExpenses(category) {
  return transactions
    .filter(t => t.type?.toLowerCase() === "expense" && t.category === category)
    .reduce((sum, t) => sum + t.amount, 0);
}
function refreshDashboard() {
  renderTransactions();
  renderBudgets();
  calculateMetrics();
  updateMetrics();
  refreshCharts();
}
function saveBudgets() {
  localStorage.setItem("budgets", JSON.stringify(budgets));
  refreshDashboard();
}
#budgetModal {
  display: none;
  opacity: 0;
  transition: opacity .3s ease;
}
#budgetModal.show {
  display: block;
  opacity: 1;
}
