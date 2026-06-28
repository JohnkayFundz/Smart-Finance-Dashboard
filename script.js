let income = 0;
let expenses = 0;
let balance = 0;
transactions.push(newTransaction);
saveTransactions();
if (!description.trim()) {
  alert("Description is required.");
  return;
}

if (amount <= 0) {
  alert("Amount must be greater than zero.");
  return;
}

if (!type) {
  alert("Please choose Income or Expense.");
  return;
}renderTransactions();
calculateMetrics();
updateMetrics();
refreshCharts();function init() {
  renderTransactions();
  calculateMetrics();
  updateMetrics();
  refreshCharts();
}

init();
