showToast({
    type: "success",
    title: "Success",
    message: "Budget added successfully."
});const confirmed = await confirmDialog({
    title: "Delete Budget",
    message: "Are you sure you want to delete this budget?"
});

if (confirmed) {
    // Delete the budget
}toggleTheme();
setTheme("dark");
setTheme("light");storage.save("budgets", budgets);
storage.load("budgets");
storage.remove("budgets");
