const TOAST_ANIMATION_DURATION = 500; 
const validTypes = ["success", "error", "warning", "info"];

function showToast({ type = "info", title = "", message = "", duration = 4000, closable = false }) {
  if (!validTypes.includes(type)) {
    throw new Error(`Unknown toast type: ${type}`);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <strong>${title}</strong>
    <p>${message}</p>
  `;

  if (closable) {
    const button = document.createElement("button");
    button.textContent = "×";
    button.className = "toast-close";
    toast.appendChild(button);

    button.addEventListener("click", () => {
      if (toast.dataset.timeoutId) {
        clearTimeout(toast.dataset.timeoutId);
      }
      removeToast(toast);
    });
  }

  document.querySelector(".toast-container")?.appendChild(toast);

  setTimeout(() => toast.classList.add("visible"), 50);

  if (duration > 0) {
    const timeoutId = setTimeout(() => removeToast(toast), duration);
    toast.dataset.timeoutId = timeoutId;
  }
}

function removeToast(toast) {
  if (!toast.isConnected || toast.dataset.removing) return;

  toast.dataset.removing = "true";
  toast.classList.remove("visible");

  setTimeout(() => {
    toast.remove();
  }, TOAST_ANIMATION_DURATION);
}
