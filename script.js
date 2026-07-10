function initialize() {
    loadTransactions();
    renderTransactions();
    updateDashboard();

    transactionForm.addEventListener(
        "submit",
        handleTransactionSubmit
    );

    transactionList.addEventListener(
        "click",
        handleTransactionClick
    );
}

document.addEventListener("DOMContentLoaded", initialize);function createTransaction(description, amount, type) {
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
}

function loadTransactions() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        transactions = saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error("Failed to load transactions:", error);
        transactions = [];
    }
}
