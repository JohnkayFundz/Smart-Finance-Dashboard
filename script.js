const STORAGE_KEYS = {
    BUDGETS: "budgets",
    TRANSACTIONS: "transactions"
};

function loadData() {
    try {
        budgets = JSON.parse(localStorage.getItem(STORAGE_KEYS.BUDGETS)) || [];
        transactions = JSON.parse(localStorage.getItem(STORAGE_KEYS.TRANSACTIONS)) || [];
    } catch (error) {
        console.error("Failed to load data:", error);
        budgets = [];
        transactions = [];
    }
}

function saveTransactions() {
    localStorage.setItem(
        STORAGE_KEYS.TRANSACTIONS,
        JSON.stringify(transactions)
    );
}

function saveBudgets() {
    localStorage.setItem(
        STORAGE_KEYS.BUDGETS,
        JSON.stringify(budgets)
    );
}function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function saveTransactions() {
    saveData(STORAGE_KEYS.TRANSACTIONS, transactions);
}

function saveBudgets() {
    saveData(STORAGE_KEYS.BUDGETS, budgets);
}
