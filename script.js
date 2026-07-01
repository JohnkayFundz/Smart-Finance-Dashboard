User Action
      │
      ▼
budget.js / transaction.js
      │
      ▼
Update state
      │
      ├──────────────┐
      ▼              ▼
storage.js     dashboard.js
      │              │
      ▼              ▼
Save Data     Calculate Metrics
      │              │
      └──────┬───────┘
             ▼
          ui.js
             │
             ▼
 Render Lists + Chartsjs/
├── app.js
├── core/
├── features/
├── ui/
├── validation/
└── services/export const state = {
    budgets: [],
    transactions: [],
    filters: {
        category: "all",
        type: "all",
        search: "",
        dateRange: null
    },
    ui: {
        editingBudgetId: null,
        editingTransactionId: null,
        darkMode: false
    }
};export function validateBudget(budget) {
    return {
        valid: true,
        errors: {}
    };
}

export function validateTransaction(transaction) {
    return {
        valid: true,
        errors: {}
    };
}budgetList.addEventListener("click", ...)const button = event.target.closest("button");
if (!button) return;

// Handle edit/delete based on class or data attributes
