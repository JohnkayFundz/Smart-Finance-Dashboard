let activeModal = null;
let lastFocusedElement = null;

export function openModal(modal) {
    if (!modal) return;

    lastFocusedElement = document.activeElement;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    activeModal = modal;

    const firstFocusable = modal.querySelector(
        'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
    );

    firstFocusable?.focus();
}

export function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    lastFocusedElement?.focus();

    activeModal = null;
}

export function registerModal(modal) {
    if (!modal) return;

    modal
        .querySelectorAll("[data-close-modal]")
        .forEach(element => {
            element.addEventListener("click", () => {
                closeModal(modal);
            });
        });
}

export function registerAllModals() {
    document
        .querySelectorAll(".modal")
        .forEach(registerModal);
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && activeModal) {
        closeModal(activeModal);
    }
});import {
    registerAllModals,
    openModal
} from "./shared/modal/modal.js";

registerAllModals();

const budgetModal = document.getElementById("budgetModal");

document
    .getElementById("openBudgetModal")
    .addEventListener("click", () => {
        openModal(budgetModal);
    });const openBudgetButton = document.getElementById("openBudgetModal");

if (openBudgetButton && budgetModal) {
    openBudgetButton.addEventListener("click", () => {
        openModal(budgetModal);
    });
}
