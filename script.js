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
}
if (transactions.length === 0) {
  transactionList.innerHTML = `
    <tr>
      <td colspan="5">No transactions yet.</td>
    </tr>
  `;
  return;
}
if (confirm("Delete this transaction?")) {
  transactions = transactions.filter(t => t.id !== transaction.id);
  saveTransactions();
  renderTransactions();
  calculateMetrics();
  updateMetrics();
  refreshCharts();
}
function refreshDashboard() {
  renderTransactions();
  calculateMetrics();
  updateMetrics();
  refreshCharts();
}
function init() {
  refreshDashboard();
}
init();
