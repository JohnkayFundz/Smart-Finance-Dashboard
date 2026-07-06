export function openModal(modal) {
    if (!modal) return;

    lastFocusedElement = document.activeElement;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    activeModal = modal;

    const focusable = getFocusableElements(modal);
    focusable[0]?.focus();
}function getFocusableElements(modal) {
    return [...modal.querySelectorAll(`
        a[href],
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled]),
        [tabindex]:not([tabindex="-1"])
    `)].filter(element => {
        return !element.hasAttribute("disabled") &&
               element.getAttribute("aria-hidden") !== "true";
    });
}const focusable = getFocusableElements(modal);

if (focusable.length > 0) {
    focusable[0].focus();
} else {
    modal.querySelector(".modal-content")?.focus();
}lastFocusedElement?.focus();const current = document.activeElement;

if (event.shiftKey) {
    if (current === first) {
        event.preventDefault();
        last.focus();
    }
} else {
    if (current === last) {
        event.preventDefault();
        first.focus();
    }
}const current = document.activeElement;

if (event.shiftKey) {
    if (current === first) {
        event.preventDefault();
        last.focus();
    }
} else {
    if (current === last) {
        event.preventDefault();
        first.focus();
    }
}
