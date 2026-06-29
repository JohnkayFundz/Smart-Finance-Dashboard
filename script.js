const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);

const totalSpent = transactions
    .filter(t => t.type?.toLowerCase() === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

const remaining = totalBudget - totalSpent;

budgetSection.innerHTML = `
<h2>Budgets</h2>

<div class="budget-summary">

    <div class="summary-card total-budget">
        <h3>Total Budget</h3>
        <span>$${totalBudget.toFixed(2)}</span>
    </div>

    <div class="summary-card total-spent">
        <h3>Total Spent</h3>
        <span>$${totalSpent.toFixed(2)}</span>
    </div>

    <div class="summary-card remaining">
        <h3>Remaining</h3>
        <span>$${remaining.toFixed(2)}</span>
    </div>

</div>
`;
const list = document.createElement("div");
list.className = "budget-list";

budgets.forEach(budget => {
    // Create each budget card here...
    list.appendChild(item);
});

budgetSection.appendChild(list);Budgets
──────────────────────────────

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Total Budget │ │ Total Spent  │ │ Remaining    │
│   $1500      │ │    $980      │ │    $520      │
└──────────────┘ └──────────────┘ └──────────────┘

┌───────────────────────────────┐
│ 🍔 Food Budget         60%     │
│ Spent:      $180             │
│ Remaining:  $120             │
│ ████████░░                 │
│ [Edit]      [Delete]         │
└───────────────────────────────┘

┌───────────────────────────────┐
│ 🚗 Transport Budget     90%    │
│ Spent:      $180             │
│ Remaining:  $20              │
│ █████████░                 │
│ [Edit]      [Delete]         │
└───────────────────────────────┘
