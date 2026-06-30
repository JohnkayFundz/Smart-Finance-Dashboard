id: Date.now()const createId = () => crypto.randomUUID();budget.id = createId();transaction.id = createId();const newBudget = {
    ...budget,
    id: createId()
};

budgets.push(newBudget);const strong = document.createElement("strong");
strong.textContent = budget.name;metricsElement.innerHTML = ...const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});currency.format(totalIncome)currency: "NGN"if (
    !updatedBudget.name?.trim() ||
    Number(updatedBudget.amount) <= 0
) {
    alert("Invalid budget.");
    return;
}function updateBudgets() {
    saveBudgets();
    refreshDashboard();
}

function updateTransactions() {
    saveTransactions();
    refreshDashboard();
}budgets.push(newBudget);
updateBudgets();const DOM_IDS = {
    METRICS: "metrics",
    BUDGET_LIST: "budgetList",
    TRANSACTION_LIST: "transactionList"
};document.getElementById(DOM_IDS.METRICS);js/
│
├── storage.js
├── helpers.js
├── budget.js
├── transaction.js
├── dashboard.js
├── charts.js
├── ui.js
└── app.js
