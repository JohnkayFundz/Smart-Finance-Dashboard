const modal = document.getElementById("budgetModal");
const content = modal.querySelector(".modal-content");

let previousFocus = null;

export function openBudgetModal() {
    previousFocus = document.activeElement;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    content.focus();
}

export function closeBudgetModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    previousFocus?.focus();
}

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeBudgetModal();
    }
});

content.addEventListener("click", event => {
    event.stopPropagation();
});

document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        modal.classList.contains("show")
    ) {
        closeBudgetModal();
    }
});import { openBudgetModal } from "./modal.js";
import { emitEvent } from "../core/events.js";
import { EVENTS } from "../core/eventNames.js";

function handleAddBudget() {
    openBudgetModal();

    emitEvent(EVENTS.MODAL_OPENED, {
        id: "budget"
    });
}import { closeBudgetModal } from "./modal.js";

function handleCloseBudget() {
    closeBudgetModal();

    emitEvent(EVENTS.MODAL_CLOSED, {
        id: "budget"
    });
}export function openModal(modal) { ... }

export function closeModal(modal) { ... }openModal(budgetModal);
openModal(transactionModal);
openModal(settingsModal);
openModal(importModal);
