// Toggle dark mode when a button is clicked
document.getElementById("toggleDarkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
let income = 0;
let expenses = 0;
let savings = 0;
let balance = 0;

function updateMetrics() {
  document.getElementById("income").textContent = `$${income.toFixed(2)}`;
  document.getElementById("expenses").textContent = `$${expenses.toFixed(2)}`;
  document.getElementById("savings").textContent = `$${savings.toFixed(2)}`;
  document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
}
document.getElementById("addTransactionBtn").addEventListener("click", () => {
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML += `
    <tr>
      <td>2026-06-27</td>
      <td>Groceries</td>
      <td>Food</td>
      <td>$50.00</td>
      <td><button>Delete</button></td>
    </tr>
  `;
  expenses += 50;
  balance = income - expenses;
  updateMetrics();
});
const expenseCtx = document.getElementById("expenseChart").getContext("2d");
new Chart(expenseCtx, {
  type: "doughnut",
  data: {
    labels: ["Food", "Transport", "Bills"],
    datasets: [{
      data: [50, 20, 30],
      backgroundColor: ["#e74c3c", "#3498db", "#2ecc71"]
    }]
  }
});

const incomeCtx = document.getElementById("incomeChart").getContext("2d");
new Chart(incomeCtx, {
  type: "bar",
  data: {
    labels: ["Income", "Expenses"],
    datasets: [{
      label: "Amount",
      data: [income, expenses],
      backgroundColor: ["#27ae60", "#c0392b"]
    }]
  }
});
document.getElementById("toggleDarkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
