function getFocusableElements(modal) {
    return [...modal.querySelectorAll(`
        a[href],
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled]),
        [tabindex]:not([tabindex="-1"])
    `)].filter(element => {
        return (
            !element.hasAttribute("disabled") &&
            element.getAttribute("aria-hidden") !== "true" &&
            element.offsetParent !== null
        );
    });
}
