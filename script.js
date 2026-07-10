function renderTransactions() {
    transactionList.innerHTML = "";

    transactions.forEach(transaction => {
        const li = document.createElement("li");
        li.classList.add("transaction-item", transaction.type);

        const icon = transaction.type === "income" ? "💰" : "📉";

        li.innerHTML = `
            <span class="description">${icon} ${transaction.description}</span>
            <span class="amount">${formatCurrency(transaction.amount)}</span>
            <span class="type">${transaction.type.toUpperCase()}</span>
        `;

        const button = document.createElement("button");
        button.className = "delete-btn";
        button.dataset.id = transaction.id;
        button.textContent = "Delete";

        li.appendChild(button);
        transactionList.appendChild(li);
    });
}

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

function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    refreshApp();
}

function showToast(message, type = "success") {
    const toastElement = document.getElementById("toast");
    toastElement.textContent = message;
    toastElement.className = `toast ${type} show`;

    setTimeout(() => {
        toastElement.className = `toast ${type}`;
    }, 3000);
}

function formatCurrency(value) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN"
    }).format(value);
}
