import {
    registerAllModals,
    initModalTriggers
} from "./shared/modal/modal.js";

function initApp() {
    registerAllModals();
    initModalTriggers();

    // Future initializers
    // initTheme();
    // initDropdowns();
    // initToasts();
    // initCharts();
}

document.addEventListener("DOMContentLoaded", initApp);
