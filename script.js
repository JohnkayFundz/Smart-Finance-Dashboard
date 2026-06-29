const spent = getCategoryExpenses(budget.category);

const percentage = Math.min((spent / budget.amount) * 100, 100);

const remaining = budget.amount - spent;

let status = "good";

if (percentage >= 100) {
    status = "danger";
} else if (percentage >= 80) {
    status = "warning";
}
