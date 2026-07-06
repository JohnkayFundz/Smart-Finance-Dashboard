import {
    registerAllModals,
    initModalTriggers
} from "./shared/modal/modal.js";

document.addEventListener("DOMContentLoaded", () => {
    registerAllModals();
    initModalTriggers();
});
