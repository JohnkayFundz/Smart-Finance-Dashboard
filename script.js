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
}modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeBudgetModal();
    }
});document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        modal.classList.contains("show")
    ) {
        closeBudgetModal();
    }
});content.addEventListener("click", event => {
    event.stopPropagation();
});openBudgetModal();
emitEvent(EVENTS.MODAL_OPENED, { id: "budget" });

closeBudgetModal();
emitEvent(EVENTS.MODAL_CLOSED, { id: "budget" });
