const TOAST_ANIMATION_DURATION = 500;

let toastContainer = document.querySelector(".toast-container");

if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
}

function removeToast(toast) {
    toast.classList.remove("visible");

    setTimeout(() => {
        toast.remove();
    }, TOAST_ANIMATION_DURATION);
}

export function showToast({
    type = "info",
    title = "",
    message,
    duration = 4000,
    closable = true
} = {}) {
    if (!message) {
        throw new Error("Toast message is required.");
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");

    if (title) {
        const titleElement = document.createElement("strong");
        titleElement.className = "toast-title";
        titleElement.textContent = title;
        toast.appendChild(titleElement);
    }

    const messageElement = document.createElement("p");
    messageElement.className = "toast-message";
    messageElement.textContent = message;
    toast.appendChild(messageElement);

    if (closable) {
        const button = document.createElement("button");
        button.className = "toast-close";
        button.type = "button";
        button.setAttribute("aria-label", "Close notification");
        button.innerHTML = "&times;";

        button.addEventListener("click", () => {
            removeToast(toast);
        });

        toast.appendChild(button);
    }

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("visible");
    });

    if (duration > 0) {
        setTimeout(() => {
            removeToast(toast);
        }, duration);
    }

    return toast;
}

export function showSuccessToast(message) {
    return showToast({
        type: "success",
        title: "Success",
        message,
        duration: 5000,
        closable: true
    });
}

export function showErrorToast(message) {
    return showToast({
        type: "error",
        title: "Error",
        message
    });
}

export function showWarningToast(message) {
    return showToast({
        type: "warning",
        title: "Warning",
        message
    });
}

export function showInfoToast(message) {
    return showToast({
        type: "info",
        title: "Info",
        message
    });
}
