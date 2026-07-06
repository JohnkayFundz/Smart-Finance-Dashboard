let triggersInitialized = false;

export function initModalTriggers() {
    if (triggersInitialized) return;
    triggersInitialized = true;

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
    });
}
