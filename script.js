const toggleDarkModeBtn = document.getElementById("toggleDarkModeBtn");

toggleDarkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
function addTransaction(id, date, description, category, amount) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${date}</td>
    <td>${description}</td>
    <td>${category}</td>
    <td>$${amount.toFixed(2)}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;
  document.getElementById("transactionList").appendChild(row);

  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
    transactions = transactions.filter(t => t.id !== id);
    calculateMetrics();
    updateMetrics();
    refreshCharts();
    localStorage.setItem("transactions", JSON.stringify(transactions));
  });
}
transactions.push({
  id: Date.now(),
  date,
  description,
  category,
  amount,
  type: "expense" // or "income"
});
calculateMetrics();
updateMetrics();
refreshCharts();
