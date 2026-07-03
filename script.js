export function registerModal(modal) {
    const content = modal.querySelector(".modal-content");
    const closeButton = modal.querySelector(".close-btn");

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });

    content?.addEventListener("click", event => {
        event.stopPropagation();
    });

    closeButton?.addEventListener("click", () => {
        closeModal(modal);
    });

    document.addEventListener("keydown", event => {
        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {
            closeModal(modal);
        }
    });
}openModal(budgetModal);
openModal(transactionModal);
openModal(settingsModal);document.addEventListener("click", event => {

    const trigger = event.target.closest("[data-open-modal]");

    if (!trigger) {
        return;
    }

    const modal = document.getElementById(
        trigger.dataset.openModal
    );

    if (modal) {
        openModal(modal);
    }

});document
    .querySelectorAll(".modal")
    .forEach(registerModal);
    .forEach(registerModal);import {
    registerAllModals,
    initModalTriggers
} from "../shared/modal/modal.js";

registerAllModals();
initModalTriggers();
