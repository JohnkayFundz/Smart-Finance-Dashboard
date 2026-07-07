function bar(label, value, max = 10) {
    const safeValue = Math.max(0, Math.min(value, max));

    return `${label.padEnd(10)} ${"█".repeat(safeValue)}`;
}

console.log(bar("Food", 7));
console.log(bar("Rent", 10));
console.log(bar("Bills", 4));Food       ███████
Rent       ██████████
Bills      ████storage.save(key, value);
storage.load(key);
storage.remove(key);
storage.clear();const confirmed = await confirmDialog({
    title: "Delete Budget",
    message: "This action cannot be undone."
});toggleTheme();

setTheme("dark");

setTheme("light");

storage.save("theme", "dark");setTheme("dark");function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    storage.save("theme", theme);
}
