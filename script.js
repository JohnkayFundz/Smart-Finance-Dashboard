function showToast({ type = "info", title = "", message = "", duration = 4000, closable = false }) {
  if (!validTypes.includes(type)) {
    throw new Error(`Unknown toast type: ${type}`);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <strong>${title}</strong>
      <p>${message}</p>
    </div>
    <div class="toast-progress"></div>
  `;

  if (closable) {
    const button = document.createElement("button");
    button.textContent = "×";
    button.className = "toast-close";
    toast.appendChild(button);

    button.addEventListener("click", () => {
      if (toast.dataset.timeoutId) clearTimeout(toast.dataset.timeoutId);
      removeToast(toast);
    });
  }

  document.querySelector(".toast-container")?.appendChild(toast);

  setTimeout(() => toast.classList.add("visible"), 50);

  if (duration > 0) {
    const progressBar = toast.querySelector(".toast-progress");
    progressBar.style.transition = `width ${duration}ms linear`;
    progressBar.style.width = "100%";

    // Trigger shrink
    setTimeout(() => {
      progressBar.style.width = "0%";
    }, 50);

    const timeoutId = setTimeout(() => removeToast(toast), duration);
    toast.dataset.timeoutId = timeoutId;
  }
}
