const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");const description = descriptionInput.value.trim();
const amount = Number(amountInput.value);
const type = typeInput.value;button.dataset.id = transaction.id;transactionList.addEventListener("click", (event) => {

    if (!event.target.matches(".delete-btn")) return;

    deleteTransaction(event.target.dataset.id);

});function createTransaction(description, amount, type) {
    return {
        id: crypto.randomUUID(),
        description,
        amount,
        type
    };
}const transaction = createTransaction(description, amount, type);function saveTransactions() {

    try {

        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );

    } catch (error) {

        console.error("Unable to save transactions:", error);

    }

}const STORAGE_KEY = "transactions";localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));function refreshApp() {
    saveTransactions();
    renderTransactions();
    updateDashboard();
}transactions.push(transaction);

refreshApp();transactions = transactions.filter(...);

refreshApp();if (
    description === "" ||
    Number.isNaN(amount) ||
    amount <= 0
) {
    alert("Please enter valid data.");
    return;
}function calculateTotals() {
    // return income, expense, balance
}function updateDashboard() {
    const totals = calculateTotals();

    balanceElement.textContent = formatCurrency(totals.balance);
    incomeElement.textContent = formatCurrency(totals.income);
    expenseElement.textContent = formatCurrency(totals.expense);
}
