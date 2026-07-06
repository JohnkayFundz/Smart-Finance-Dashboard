document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-modal]");

    if (!trigger) return;

    const modalId = trigger.dataset.openModal;
    const modal = document.getElementById(modalId);

    if (!modal) {
        console.warn(`Modal "${modalId}" not found.`);
        return;
    }

    openModal(modal);
});export function initModalTriggers() {
    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-open-modal]");

        if (!trigger) return;

        const modal = document.getElementById(trigger.dataset.openModal);

        if (modal) {
            openModal(modal);
        }
    });
}import {
    registerAllModals,
    initModalTriggers
} from "./shared/modal/modal.js";

registerAllModals();
initModalTriggers();
