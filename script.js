const spent = getCategoryExpenses(budget.category);

const percentage = Math.min((spent / budget.amount) * 100, 100);

const remaining = budget.amount - spent;

let status = "good";

if (percentage >= 100) {
    status = "danger";
} else if (percentage >= 80) {
    status = "warning";
}
item.innerHTML = `
<div class="budget-card">

    <div class="budget-header">
        <div>
            <h3>${budget.name}</h3>
            <small>${budget.category}</small>
        </div>

        <span class="budget-status ${status}">
            ${percentage.toFixed(0)}%
        </span>
    </div>

    <div class="budget-info">
        <span>Spent</span>
        <strong>$${spent.toFixed(2)}</strong>
    </div>

    <div class="budget-info">
        <span>Remaining</span>
        <strong>$${remaining.toFixed(2)}</strong>
    </div>

    <div class="progress">
        <div class="progress-fill ${status}"
             style="width:${percentage}%">
        </div>
    </div>

    <div class="budget-actions">
        <button class="edit-budget">✏ Edit</button>
        <button class="delete-budget">🗑 Delete</button>
    </div>

</div>
`;function getCategoryExpenses(category) {
    return transactions
        .filter(t => t.type === "Expense" && t.category === category)
        .reduce((total, t) => total + t.amount, 0);
}
