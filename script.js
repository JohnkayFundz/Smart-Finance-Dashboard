// ---------- DOM Elements ----------
const transactionForm = document.getElementById("transactionForm");
const transactionList = document.getElementById("transactionList");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expense");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");

const STORAGE_KEY = "transactions";

// ---------- Application State ----------
let transactions = [];

// ---------- Initialize ----------
document.addEventListener("DOMContentLoaded", () => {
    loadTransactions();
    renderTransactions();
    updateDashboard();

    transactionForm.addEventListener("submit", handleTransactionSubmit);
});

// ---------- Transaction Factory ----------
function createTransaction(description, amount, type) {
    return {
        id: crypto.randomUUID(),
        description,
        amount,
        type
    };
}

// ---------- Add Transaction ----------
function handleTransactionSubmit(event) {
    event.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const type = typeInput.value;

    if (description === "" || Number.isNaN(amount) || amount <= 0) {
        showToast("⚠️ Please enter valid data.", "error");
        return;
    }

    const transaction = createTransaction(description, amount, type);
    transactions.push(transaction);

    refreshApp();
    transactionForm.reset();
    showToast("✅ Transaction added successfully!", "success");
}

// ---------- Refresh ----------
function refreshApp() {
    saveTransactions();
    renderTransactions();
    updateDashboard();
}

// ---------- Storage ----------
function saveTransactions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

function loadTransactions() {
    const saved = localStorage.getItem(STORAGE_KEY);
    transactions = saved ? JSON.parse(saved) : [];
}
