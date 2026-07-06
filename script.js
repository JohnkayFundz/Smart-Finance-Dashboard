const focusableElements = modal.querySelectorAll(
    `
    button,
    input,
    select,
    textarea,
    a[href],
    [tabindex]:not([tabindex="-1"])
    `
);const focusable = [...focusableElements].filter(element => {
    const style = getComputedStyle(element);

    return (
        !element.disabled &&
        !element.hidden &&
        !element.hasAttribute("inert") &&
        element.getAttribute("aria-hidden") !== "true" &&
        style.display !== "none" &&
        style.visibility !== "hidden"
    );
});
