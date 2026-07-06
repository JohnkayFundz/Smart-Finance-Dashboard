function getFocusableElements(modal) {
    return [...modal.querySelectorAll(`
        a[href],
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled]),
        [tabindex]:not([tabindex="-1"])
    `)].filter(element => {
        return !element.hasAttribute("disabled") &&
               element.getAttribute("aria-hidden") !== "true";
    });
}export function openModal(modal) {
    if (!modal) return;

    lastFocusedElement = document.activeElement;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    activeModal = modal;

    const focusable = getFocusableElements(modal);

    if (focusable.length > 0) {
        focusable[0].focus();
    } else {
        modal.querySelector(".modal-content")?.focus();
    }
}export function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    activeModal = null;

    lastFocusedElement?.focus();
}document.addEventListener("keydown", (event) => {
    if (!activeModal) return;

    if (event.key === "Escape") {
        closeModal(activeModal);
        return;
    }

    if (event.key !== "Tab") return;

    const focusable = getFocusableElements(activeModal);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const current = document.activeElement;

    if (event.shiftKey) {
        if (current === first) {
            event.preventDefault();
            last.focus();
        }
    } else {
        if (current === last) {
            event.preventDefault();
            first.focus();
        }
    }
});
