const STORAGE_KEYS = {
    BUDGETS: "budgets",
    TRANSACTIONS: "transactions"
};

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
        console.error(`Failed to load "${key}" from localStorage:`, error);
        return [];
    }
}

function loadData() {
    budgets = loadStorage(STORAGE_KEYS.BUDGETS);
    transactions = loadStorage(STORAGE_KEYS.TRANSACTIONS);
}

function saveTransactions() {
    saveData(STORAGE_KEYS.TRANSACTIONS, transactions);
}

function saveBudgets() {
    saveData(STORAGE_KEYS.BUDGETS, budgets);
}
