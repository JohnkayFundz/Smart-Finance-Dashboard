import { openModal, closeModal, registerModal } from "../shared/modal/modal.js";

const budgetModal = document.getElementById("budgetModal");
registerModal(budgetModal);

const transactionModal = document.getElementById("transactionModal");
registerModal(transactionModal);

// Example: open on button click
document.getElementById("openBudgetBtn").addEventListener("click", () => {
    openModal(budgetModal);
});

document.getElementById("closeBudgetBtn").addEventListener("click", () => {
    closeModal(budgetModal);
});

document.getElementById("openTransactionBtn").addEventListener("click", () => {
    openModal(transactionModal);
});
