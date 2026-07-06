function isFocusable(element) {
    const style = getComputedStyle(element);

    return (
        !element.disabled &&
        !element.hidden &&
        !element.hasAttribute("inert") &&
        element.getAttribute("aria-hidden") !== "true" &&
        style.display !== "none" &&
        style.visibility !== "hidden"
    );
}
