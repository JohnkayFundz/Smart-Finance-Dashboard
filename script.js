const TOAST_ANIMATION_DURATION = 500;

let toastContainer = document.querySelector(".toast-container");

if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
}function removeToast(toast) {
    toast.classList.remove("visible");

    setTimeout(() => {
        toast.remove();
    }, TOAST_ANIMATION_DURATION);
}export function showToast(...) { ... }

export function showSuccessToast(message) {
    showToast({
        type: "success",
        title: "Success",
        message,
        duration: 5000,
        closable: true
    });
}if (!message) {
    throw new Error("Toast message is required.");
}const titleElement = document.createElement("strong");
titleElement.textContent = title;

const messageElement = document.createElement("p");
messageElement.textContent = message;const titleElement = document.createElement("strong");
titleElement.textContent = title;

const messageElement = document.createElement("p");
messageElement.textContent = message;toast.setAttribute("role", "status");
toast.setAttribute("aria-live", "polite");setTimeout(() => {
    removeToast(toast);
}, duration);button.addEventListener("click", () => {
    removeToast(toast);
});import { showToast } from "../shared/toast/toast.js";showToast({
    type: "success",
    message: "Budget created successfully."
});
