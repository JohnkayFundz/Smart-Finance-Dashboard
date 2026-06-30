function addBudget(budget) {
    if (!budget.name?.trim() || Number(budget.amount) <= 0) {
        alert("Please enter a valid budget name and amount.");
        return;
    }
    budget.id = Date.now();
    budgets.push(budget);
    saveBudgets();
    refreshDashboard();
}

function editBudget(updatedBudget) {
    const index = budgets.findIndex(b => b.id === updatedBudget.id);
    if (index !== -1) {
        budgets[index] = updatedBudget;
        saveBudgets();
        refreshDashboard();
    }
}

function deleteBudget(id) {
    budgets = budgets.filter(b => b.id !== id);
    saveBudgets();
    refreshDashboard();
}
function addTransaction(transaction) {
    if (!transaction.type || !transaction.category || Number(transaction.amount) <= 0) {
        alert("Please enter valid transaction details.");
        return;
    }
    transaction.id = Date.now();
    transactions.push(transaction);
    saveTransactions();
    refreshDashboard();
}

function editTransaction(updatedTransaction) {
    const index = transactions.findIndex(t => t.id === updatedTransaction.id);
    if (index !== -1) {
        transactions[index] = updatedTransaction;
        saveTransactions();
        refreshDashboard();
    }
}

function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveTransactions();
    refreshDashboard();
}
function renderBudgets() {
    const budgetList = document.getElementById("budgetList");
    budgetList.innerHTML = "";

    budgets.forEach(budget => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${budget.name}</strong> - ${budget.category} : $${budget.amount}
            <button class="edit-budget-btn" data-id="${budget.id}">Edit</button>
            <button class="delete-budget-btn" data-id="${budget.id}">Delete</button>
        `;
        budgetList.appendChild(li);
    });

    attachBudgetHandlers();
}

function renderTransactions() {
    const transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = "";

    transactions.forEach(transaction => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${transaction.type}</strong> - ${transaction.category} : $${transaction.amount}
            <button class="edit-transaction-btn" data-id="${transaction.id}">Edit</button>
            <button class="delete-transaction-btn" data-id="${transaction.id}">Delete</button>
        `;
        transactionList.appendChild(li);
    });

    attachTransactionHandlers();
}
function calculateMetrics() {
    const totalIncome = transactions
        .filter(t => t.type === TRANSACTION_TYPES.INCOME)
        .reduce((sum, t) => sum + Number(t.amount || 0), 0);

    const totalExpenses = transactions
        .filter(t => t.type === TRANSACTION_TYPES.EXPENSE)
        .reduce((sum, t) => sum + Number(t.amount || 0), 0);

    const remainingBudget = budgets.reduce((sum, b) => {
        const spent = getCategoryExpenses(b.category);
        return sum + (b.amount - spent);
    }, 0);

    document.getElementById("metrics").innerHTML = `
        <p>Total Income: $${totalIncome}</p>
        <p>Total Expenses: $${totalExpenses}</p>
        <p>Remaining Budget: $${remainingBudget}</p>
    `;
}
