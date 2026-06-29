function getCategoryExpenses(category) {
    return transactions
        .filter(t =>
            t.type?.toLowerCase() === "expense" &&
            t.category === category
        )
        .reduce((sum, t) => sum + t.amount, 0);
}<strong class="${remaining < 0 ? "danger-text" : ""}">
    ${remainingText}
</strong>const totalBudget = budgets.reduce(
    (sum, b) => sum + b.amount,
    0
);

const totalSpent = transactions
    .filter(t => t.type?.toLowerCase() === "expense")
    .reduce((sum, t) => sum + t.amount, 0);budgetSection.innerHTML = `
<h2>Budgets</h2>

<div class="budget-summary">

    <div class="summary-card">
        <h3>Total Budget</h3>
        <span>$${totalBudget.toFixed(2)}</span>
    </div>

    <div class="summary-card">
        <h3>Total Spent</h3>
        <span>$${totalSpent.toFixed(2)}</span>
    </div>

    <div class="summary-card">
        <h3>Remaining</h3>
        <span>$${(totalBudget - totalSpent).toFixed(2)}</span>
    </div>

</div>
`;
