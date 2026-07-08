// ===============================
// Smart Finance Dashboard
// Main Application Script
// ===============================

// ---------- DOM Elements ----------
const transactionForm = document.getElementById("transactionForm");
const transactionList = document.getElementById("transactionList");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expense");

// ---------- Application State ----------
let transactions = [];

// ---------- Initialize App ----------
document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    loadTransactions();
    renderTransactions();
    updateDashboard();

    transactionForm.addEventListener("submit", handleTransactionSubmit);
}

// ---------- Add Transaction ----------
function handleTransactionSubmit(event) {
    event.preventDefault();

    const description = document.getElementById("description").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (!description || amount <= 0) {
        alert("Please enter valid data.");
        return;
    }

    const transaction = {
        id: crypto.randomUUID(),
        description,
        amount,
        type
    };

    transactions.push(transaction);

    saveTransactions();

    renderTransactions();

    updateDashboard();

    transactionForm.reset();
}

// ---------- Render Transactions ----------
function renderTransactions() {

    transactionList.innerHTML = "";

    transactions.forEach(transaction => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${transaction.description}</span>
            <span>${formatCurrency(transaction.amount)}</span>
            <button onclick="deleteTransaction('${transaction.id}')">
                Delete
            </button>
        `;

        transactionList.appendChild(li);

    });

}

// ---------- Delete ----------
function deleteTransaction(id) {

    transactions = transactions.filter(item => item.id !== id);

    saveTransactions();

    renderTransactions();

    updateDashboard();

}

// ---------- Dashboard ----------
function updateDashboard() {

    const income = transactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    balanceElement.textContent = formatCurrency(income - expense);

    incomeElement.textContent = formatCurrency(income);

    expenseElement.textContent = formatCurrency(expense);

}

// ---------- Storage ----------
function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}

function loadTransactions() {

    const saved = localStorage.getItem("transactions");

    transactions = saved ? JSON.parse(saved) : [];

}

// ---------- Utilities ----------
function formatCurrency(value) {

    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN"
    }).format(value);

}
