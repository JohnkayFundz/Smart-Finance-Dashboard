function renderTransactions() {
    transactionList.innerHTML = "";

    const fragment = document.createDocumentFragment();

    transactions.forEach(transaction => {

        const li = document.createElement("li");

        const description = document.createElement("span");
        description.textContent = transaction.description;

        const amount = document.createElement("span");
        amount.textContent = formatCurrency(transaction.amount);

        const button = document.createElement("button");
        button.className = "delete-btn";
        button.dataset.id = transaction.id;
        button.textContent = "Delete";

        li.append(description, amount, button);

        fragment.appendChild(li);
    });

    transactionList.appendChild(fragment);
}
