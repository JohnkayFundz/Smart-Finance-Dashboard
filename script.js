storage.save(key, value);
storage.load(key);
storage.remove(key);
storage.clear();
const confirmed = await confirmDialog({
  title: "Delete Budget",
  message: "This action cannot be undone."
});
toggleTheme();
setTheme("dark");
setTheme("light");
setTheme("dark");
storage.save("theme", "dark");
Food ███████
Rent ██████████
Bills ████
Jan ███
Feb █████
Mar ███████
function bar(label, value, max = 10) {
  return `${label} ${"█".repeat(value)}`
}

console.log(bar("Food", 7));
console.log(bar("Rent", 10));
console.log(bar("Bills", 4));
