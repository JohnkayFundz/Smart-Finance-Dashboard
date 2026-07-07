export function showToast({
    type = "info",
    title = "",
    message,
    duration = 4000,
    closable = true
} = {}) {
    // ...
}showToast({
    type: "success",
    message: "Budget added successfully."
});

showToast({
    type: "success",
    message: "Transaction updated."
});

showToast({
    type: "warning",
    message: "Budget limit exceeded."
});

showToast({
    type: "error",
    message: "Unable to save changes."
});

showToast({
    type: "info",
    message: "Data exported successfully."
});
