t.category === category
t.category?.toLowerCase() === category.toLowerCase()
t.type?.toLowerCase() === "expense"
t.type?.toLowerCase() === TRANSACTION_TYPES.EXPENSE
try {
    budgets = JSON.parse(localStorage.getItem("budgets")) || [];
} catch (error) {
    budgets = [];
}
renderTransactions?.();
renderBudgets?.();
calculateMetrics?.();
updateMetrics?.();
refreshCharts?.();
