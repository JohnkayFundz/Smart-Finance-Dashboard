let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
transactions.forEach(transaction => {
  addTransaction(
    transaction.id,
    transaction.date,
    transaction.description,
    transaction.category,
    transaction.amount,
    transaction.type
  );
});
function createTransaction(date, description, category, amount, type) {
  const newTransaction = {
    id: Date.now(),
    date,
    description,
    category,
    amount,
    type
  };
  transactions.push(newTransaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  addTransaction(
    newTransaction.id,
    newTransaction.date,
    newTransaction.description,
    newTransaction.category,
    newTransaction.amount,
    newTransaction.type
  );

  calculateMetrics();
  updateMetrics();
  refreshCharts();
}
createTransaction("2026-06-27", "Groceries", "Food", 50, "expense");
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
calculateMetrics();
updateMetrics();
refreshCharts();
