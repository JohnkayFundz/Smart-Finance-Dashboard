export function openBudgetModal() {
    previousFocus = document.activeElement;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    content.focus();

    emitEvent(EVENTS.MODAL_OPENED, { id: "budget" });
}

export function closeBudgetModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    previousFocus?.focus();

    emitEvent(EVENTS.MODAL_CLOSED, { id: "budget" });
}
