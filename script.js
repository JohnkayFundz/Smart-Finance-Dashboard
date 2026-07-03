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

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            closeModal(modal);
        }
    });
}
import { openModal, closeModal, registerModal } from "../shared/modal/modal.js";

const budgetModal = document.getElementById("budgetModal");
registerModal(budgetModal);

// Open when needed
openModal(budgetModal);

// Close when needed
closeModal(budgetModal);

const transactionModal = document.getElementById("transactionModal");
registerModal(transactionModal);
