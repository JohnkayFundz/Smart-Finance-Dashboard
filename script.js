export const CSS = Object.freeze({
    EDIT_BUDGET: "edit-budget-btn",
    DELETE_BUDGET: "delete-budget-btn",
    EDIT_TRANSACTION: "edit-transaction-btn",
    DELETE_TRANSACTION: "delete-transaction-btn"
});export function createId() {
    return crypto.randomUUID();
}

export const currency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
});

export function createButton(text, className, id) {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = className;
    button.dataset.id = id;
    return button;
}

export function isPositiveNumber(value) {
    return Number(value) > 0;
}export function renderBudgets() {
    elements.budgetList.replaceChildren();

    budgets.forEach(budget => {
        elements.budgetList.append(createBudgetItem(budget));
    });
}budgetList.replaceChildren();/**
 * Creates a new budget list item.
 * @param {Object} budget
 * @returns {HTMLLIElement}
 */
function createBudgetItem(budget) {
    ...
}const budgets = [];

export function getBudgets() {
    return budgets;
}export function loadBudgets() {
    try {
        return JSON.parse(localStorage.getItem("budgets")) ?? [];
    } catch {
        return [];
    }
}User Action
      │
      ▼
budget.js / transaction.js
      │
      ▼
storage.js
      │
      ▼
refreshDashboard()
      │
      ▼
UI + Charts + Metricsjs/
│
├── app.js              // Application bootstrap
├── constants.js        // IDs, CSS classes, enums
├── helpers.js          // Utility functions
├── storage.js          // localStorage access
├── budget.js           // Budget state and actions
├── transaction.js      // Transaction state and actions
├── dashboard.js        // Totals and metrics
├── charts.js           // Chart rendering
├── ui.js               // DOM rendering
├── modal.js            // Modal handling
└── validation.js       // Input validation
