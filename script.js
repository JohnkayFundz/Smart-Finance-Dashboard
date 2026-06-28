document.getElementById("toggleDarkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
updateMetrics(); // initialize values

// Update chart after metrics change
function refreshCharts() {
  incomeChart.data.datasets[0].data = [income, expenses];
  incomeChart.update();
}
expenses += 50;
balance = income - expenses;
updateMetrics();
refreshCharts();
function addTransaction(date, description, category, amount) {
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML += `
    <tr>
      <td>${date}</td>
      <td>${description}</td>
      <td>${category}</td>
      <td>$${amount.toFixed(2)}</td>
      <td><button>Delete</button></td>
    </tr>
  `;
  expenses += amount;
  balance = income - expenses;
  updateMetrics();
  refreshCharts();
}
addTransaction("2026-06-27", "Groceries", "Food", 50);
// Save preference
document.getElementById("toggleDarkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
