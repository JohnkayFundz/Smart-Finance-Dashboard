// ===========================
// State
// ===========================

let budgets = JSON.parse(localStorage.getItem("budgets")) || [];
let editingBudgetId = null;

// ===========================
// Storage
// ===========================

function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}

// ===========================
// Helpers
// ===========================

function getCategoryExpenses(category) {
    return transactions
        .filter(t =>
            t.type?.toLowerCase() === "expense" &&
            t.category === category
        )
        .reduce((sum, t) => sum + t.amount, 0);
}

// ===========================
// Dashboard
// ===========================

function refreshDashboard() {
    renderTransactions();
    renderBudgets();
    calculateMetrics();
    updateMetrics();
    refreshCharts();
}

// ===========================
// Modal
// ===========================

function openBudgetModal() {
    budgetModal.classList.add("show");
}

function closeBudgetModal() {
    editingBudgetId = null;
    budgetForm.reset();
    budgetModal.classList.remove("show");
}const newBudget = {
    id: Date.now(),
    name,
    amount,
    category,
    createdAt: new Date().toISOString(),
    updatedAt: null
};

budgets.push(newBudget);

saveBudgets();
closeBudgetModal();
refreshDashboard();budget.name = name;
budget.amount = amount;
budget.category = category;
budget.updatedAt = new Date().toISOString();

saveBudgets();
closeBudgetModal();
refreshDashboard();budgets = budgets.filter(b => b.id !== id);

saveBudgets();
refreshDashboard();saveBudgets();
refreshDashboard();

budgetModal.classList.add("show");
budgetModal.classList.remove("show");expense-tracker/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── dashboard.css
│   ├── budget.css
│   ├── modal.css
│   └── darkmode.css
│
├── js/
│   ├── app.js            // Start the app
│   ├── storage.js        // LocalStorage helpers
│   ├── transactions.js   // Transactions
│   ├── budgets.js        // Budget logic
│   ├── dashboard.js      // Metrics & summary
│   ├── charts.js         // Charts
│   ├── ui.js             // Modals & UI helpers
│   └── utils.js          // Shared helper functions
│
├── assets/
│   ├── icons/
│   └── images/
│
└── README.md
