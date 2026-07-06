const style = window.getComputedStyle(element);

return (
    !element.hasAttribute("disabled") &&
    element.getAttribute("aria-hidden") !== "true" &&
    style.display !== "none" &&
    style.visibility !== "hidden"
);
