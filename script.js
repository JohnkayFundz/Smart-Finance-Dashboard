function getFocusableElements(modal) {
    return [
        ...modal.querySelectorAll(
            `
            a[href],
            button:not([disabled]),
            textarea:not([disabled]),
            input:not([disabled]),
            select:not([disabled]),
            [tabindex]:not([tabindex="-1"])
            `
        )
    ].filter(element => {
        return element.offsetParent !== null;
    });
}document.addEventListener("keydown", (event) => {
    if (!activeModal) return;

    if (event.key === "Escape") {
        closeModal(activeModal);
        return;
    }

    if (event.key !== "Tab") return;

    const focusable = getFocusableElements(activeModal);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey) {
        if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }
    } else {
        if (document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});const focusable = getFocusableElements(modal);
focusable[0]?.focus();lastFocusedElement?.focus();
