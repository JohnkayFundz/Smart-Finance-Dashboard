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
function renderTransactions() {
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";

  transactions.forEach(transaction => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.description}</td>
      <td>${transaction.category}</td>
      <td>$${transaction.amount.toFixed(2)}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
    transactionList.appendChild(row);

    row.querySelector(".delete-btn").addEventListener("click", () => {
      transactions = transactions.filter(t => t.id !== transaction.id);
      saveTransactions();
      renderTransactions();
      calculateMetrics();
      updateMetrics();
      refreshCharts();
    });
  });
}
function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}
function init() {
  renderTransactions();
  calculateMetrics();
  updateMetrics();
  refreshCharts();
}

init();
