const timeoutId = duration > 0
    ? setTimeout(() => removeToast(toast), duration)
    : null;button.addEventListener("click", () => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    removeToast(toast);
});function removeToast(toast) {
    if (!toast.isConnected) return;

    toast.classList.remove("visible");

    setTimeout(() => {
        toast.remove();
    }, TOAST_ANIMATION_DURATION);
}button.textContent = "×";throw new Error(`Unknown toast type: ${type}`);
