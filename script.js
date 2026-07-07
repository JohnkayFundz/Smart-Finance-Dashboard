// toast.js
const toastContainer = document.createElement("div");
toastContainer.className = "toast-container";
document.body.appendChild(toastContainer);

function showToast({ type = "info", title = "", message = "", duration = 4000, closable = false }) {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <strong>${title}</strong>
    <p>${message}</p>
    ${closable ? '<button class="toast-close">&times;</button>' : ""}
  `;

  toastContainer.appendChild(toast);

  // Fade in
  setTimeout(() => toast.classList.add("visible"), 100);

  // Auto-remove
  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 500);
  }, duration);

  // Manual close
  if (closable) {
    toast.querySelector(".toast-close").addEventListener("click", () => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 500);
    });
  }
}

function showSuccessToast(message) {
  showToast({
    type: "success",
    title: "Success",
    message,
    duration: 5000,
    closable: true
  });
}
showSuccessToast("Budget created successfully.");
showToast({ type: "error", title: "Error", message: "Something went wrong!", duration: 4000 });
showToast({ type: "info", title: "Reminder", message: "Don't forget to save changes.", duration: 3000 });
