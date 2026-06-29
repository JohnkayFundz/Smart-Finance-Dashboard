const rawPercentage = budget.amount > 0
    ? (spent / budget.amount) * 100
    : 0;

const percentage = Math.min(rawPercentage, 100);let status = "good";

if (rawPercentage >= 100) {
    status = "danger";
} else if (rawPercentage >= 80) {
    status = "warning";
}const remaining = budget.amount - spent;

const remainingText =
    remaining < 0
        ? `- $${Math.abs(remaining).toFixed(2)}`
        : `$${remaining.toFixed(2)}`;function getCategoryExpenses(category) {
    return transactions
        .filter(t =>
            t.type?.toLowerCase() === "expense" &&
            t.category === category
        )
        .reduce((total, t) => total + t.amount, 0);
}🍔 Food Budget
Food

Spent        $180.00
Budget       $300.00
Remaining    $120.00

████████░░ 60%

[✏ Edit]   [🗑 Delete]
