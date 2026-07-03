const previousFocus = new WeakMap();

export function openModal(modal) {
    const content = modal.querySelector(".modal-content");

    previousFocus.set(modal, document.activeElement);

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    content?.focus();
}

export function closeModal(modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    previousFocus.get(modal)?.focus();
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
        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {
            closeModal(modal);
        }
    });
}import {
    openModal,
    closeModal,
    registerModal
} from "../shared/modal/modal.js";

const budgetModal = document.getElementById("budgetModal");

registerModal(budgetModal);openModal(budgetModal);

emitEvent(EVENTS.MODAL_OPENED, {
    id: "budget"
});closeModal(budgetModal);

emitEvent(EVENTS.MODAL_CLOSED, {
    id: "budget"
});const transactionModal =
    document.getElementById("transactionModal");

registerModal(transactionModal);

openModal(transactionModal);registerModal(modal);

openModal(modal);

closeModal(modal);
