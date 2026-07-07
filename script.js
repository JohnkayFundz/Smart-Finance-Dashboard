export function showToast(...) {}export function showSuccessToast(message) {
    ...
}import { showToast } from "../shared/toast/toast.js";let toastContainer =
    document.querySelector(".toast-container");

if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
}toast.classList.remove("visible");

setTimeout(() => toast.remove(), 500);function removeToast(toast) {
    toast.classList.remove("visible");

    setTimeout(() => {
        toast.remove();
    }, 500);
}setTimeout(() => {
    removeToast(toast);
}, duration);button.addEventListener("click", () => {
    removeToast(toast);
});const titleElement = document.createElement("strong");
titleElement.textContent = title;

const messageElement = document.createElement("p");
messageElement.textContent = message;if (!message) {
    throw new Error("Toast message is required.");
}const TOAST_ANIMATION_DURATION = 500;toast.setAttribute("role", "status");
toast.setAttribute("aria-live", "polite");
