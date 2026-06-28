let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
function addTransaction(id, date, description, category, amount, type) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${date}</td>
    <td>${description}</td>
    <td>${category}</td>
    <td>$${amount.toFixed(2)}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;
  document.getElementById("transactionList").appendChild(row);

  // Delete handler
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
    transactions = transactions.filter(t => t.id !== id);
    calculateMetrics();
    updateMetrics();
    refreshCharts();
    localStorage.setItem("transactions", JSON.stringify(transactions));
  });
}
function calculateMetrics() {
  income = 0;
  expenses = 0;

  transactions.forEach(transaction => {
    if (transaction.type === "income") {
      income += transaction.amount;
    } else {
      expenses += transaction.amount;
    }
  });

  balance = income - expenses;
}
transactions.push({
  id: Date.now(),
  date: "2026-06-27",
  description: "Groceries",
  category: "Food",
  amount: 50,
  type: "expense"
});
localStorage.setItem("transactions", JSON.stringify(transactions));
addTransaction(transactions[transactions.length - 1].id, "2026-06-27", "Groceries", "Food", 50, "expense");
transactions.forEach(transaction => {
  addTransaction(transaction.id, transaction.date, transaction.description, transaction.category, transaction.amount, transaction.type);
});
calculateMetrics();
updateMetrics();
refreshCharts();
