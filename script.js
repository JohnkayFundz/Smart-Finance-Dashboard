const previousFocus = new WeakMap();

export function openModal(modal) {
    const content = modal.querySelector(".modal-content");

    previousFocus.set(modal, document.activeElement);

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    content?.focus();

    emitEvent(EVENTS.MODAL_OPENED, { id: modal.id });
}

export function closeModal(modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    previousFocus.get(modal)?.focus();
    previousFocus.delete(modal);

    emitEvent(EVENTS.MODAL_CLOSED, { id: modal.id });
}

export function registerModal(modal) {
    const content = modal.querySelector(".modal-content");

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });

    content?.addEventListener("click", event => {
        event.stopPropagation();
    });
}

// One global Escape handler
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        const openModalEl = document.querySelector(".modal.show");
        if (openModalEl) {
            closeModal(openModalEl);
        }
    }
});
import { openModal, closeModal, registerModal } from "../shared/modal/modal.js";

const budgetModal = document.getElementById("budgetModal");
registerModal(budgetModal);

const transactionModal = document.getElementById("transactionModal");
registerModal(transactionModal);

// Example: open on button click
document.getElementById("openBudgetBtn").addEventListener("click", () => {
    openModal(budgetModal);
});
