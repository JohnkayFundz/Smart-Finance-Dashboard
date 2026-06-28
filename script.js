const toggleDarkModeBtn = document.getElementById("toggleDarkModeBtn");

toggleDarkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}const row = document.createElement("tr");

row.innerHTML = `
  <td>${date}</td>
  <td>${description}</td>
  <td>${category}</td>
  <td>$${amount.toFixed(2)}</td>
  <td><button class="delete-btn">Delete</button></td>
`;

transactionList.appendChild(row);transactions.push({
  id: Date.now(),
  date,
  description,
  category,
  amount
});localStorage.setItem(
  "transactions",
  JSON.stringify(transactions)
);transactions.forEach(transaction => {
  addTransaction(
    transaction.date,
    transaction.description,
    transaction.category,
    transaction.amount
  );
});function calculateMetrics() {
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
}row.querySelector(".delete-btn").addEventListener("click", () => {
  row.remove();

  transactions = transactions.filter(t => t.id !== transaction.id);

  calculateMetrics();
  updateMetrics();
  refreshCharts();

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
});
