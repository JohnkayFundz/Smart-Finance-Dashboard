const transactionForm = document.getElementById("transactionForm");
const transactionList = document.getElementById("transactionList");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expense");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const STORAGE_KEY = "transactions";
localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
function createTransaction(description, amount, type) {
    return {
        id: crypto.randomUUID(),
        description,
        amount,
        type
    };
}const transaction = createTransaction(
    description,
    amount,
    type
);function refreshApp() {
    saveTransactions();
    renderTransactions();
    updateDashboard();
}refreshApp();if (
    description === "" ||
    Number.isNaN(amount) ||
    amount <= 0
) {
    alert("Please enter valid data.");
    return;
}
