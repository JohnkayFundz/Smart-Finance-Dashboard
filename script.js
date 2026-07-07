const validTypes = ["success", "error", "warning", "info"];

if (!validTypes.includes(type)) {
    throw new Error(`Unknown toast type: ${type}`);
}function removeToast(toast) {
    if (!toast.isConnected) return;

    toast.classList.remove("visible");

    setTimeout(() => {
        toast.remove();
    }, TOAST_ANIMATION_DURATION);
}const timeoutId =
    duration > 0
        ? setTimeout(() => removeToast(toast), duration)
        : null;button.addEventListener("click", () => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    removeToast(toast);
});button.textContent = "×";function removeToast(toast) {
    if (!toast.isConnected || toast.dataset.removing) {
        return;
    }

    toast.dataset.removing = "true";

    toast.classList.remove("visible");

    setTimeout(() => {
        toast.remove();
    }, TOAST_ANIMATION_DURATION);
}
