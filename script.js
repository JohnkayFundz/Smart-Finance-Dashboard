export function load(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);

        return data ? JSON.parse(data) : defaultValue;
    } catch {
        return defaultValue;
    }
}export const state = {
    budgets: load(STORAGE_KEYS.BUDGETS, []),
    transactions: load(STORAGE_KEYS.TRANSACTIONS, []),
    theme: load(STORAGE_KEYS.THEME, "light")
};export function loadArray(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? [];
    } catch {
        return [];
    }
}

export function loadValue(key, defaultValue) {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
}state.theme = "dark";

save(STORAGE_KEYS.THEME, state.theme);User Action
      │
      ▼
budget-ui.js
      │
      ▼
budget.js
      │
      ▼
state.js
      │
      ▼
app.refresh()
      │
      ├──► storage.save()
      ├──► dashboard.calculate()
      ├──► chartService.update()
      └──► ui.render()
