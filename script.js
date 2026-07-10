DOM Elements
↓
Constants
↓
Application State
↓
Initialization
↓
Factory Function
↓
Business Logic
↓
Refresh
↓
Storagefunction createTransaction(description, amount, type) {
    return {
        id: crypto.randomUUID(),
        description,
        amount,
        type
    };
}function refreshApp() {
    saveTransactions();
    renderTransactions();
    updateDashboard();
}function initialize() {
    loadTransactions();
    renderTransactions();
    updateDashboard();

    transactionForm.addEventListener(
        "submit",
        handleTransactionSubmit
    );
}

document.addEventListener("DOMContentLoaded", initialize);function initialize() {
    loadTransactions();
    loadTheme();
    initializeCharts();
    registerModals();
    initializeFilters();
    initializeSearch();
}function saveTransactions() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(transactions)
        );
    } catch (error) {
        console.error("Failed to save transactions:", error);
        showToast("Unable to save your data.", "error");
    }
}function loadTransactions() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        transactions = saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error("Failed to load transactions:", error);
        transactions = [];
    }
}transactionList.addEventListener("click", (event) => {
    const button = event.target.closest(".delete-btn");

    if (!button) return;

    deleteTransaction(button.dataset.id);
});const button = document.createElement("button");

button.className = "delete-btn";
button.dataset.id = transaction.id;
button.textContent = "Delete";
