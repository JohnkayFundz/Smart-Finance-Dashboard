const STORAGE_KEYS = {
    BUDGETS: "budgets",
    TRANSACTIONS: "transactions"
};

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function loadData() {
    try {
        budgets = loadStorage(STORAGE_KEYS.BUDGETS);
        transactions = loadStorage(STORAGE_KEYS.TRANSACTIONS);
    } catch (error) {
        console.error("Failed to load data:", error);
        budgets = [];
        transactions = [];
    }
}

function saveTransactions() {
    saveData(STORAGE_KEYS.TRANSACTIONS, transactions);
}

function saveBudgets() {
    saveData(STORAGE_KEYS.BUDGETS, budgets);
}function loadData() {
    budgets = loadStorage(STORAGE_KEYS.BUDGETS);
    transactions = loadStorage(STORAGE_KEYS.TRANSACTIONS);
}
