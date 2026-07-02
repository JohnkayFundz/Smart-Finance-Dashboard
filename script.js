refresh("transaction");
refresh("budget");
refresh("theme");
refresh("settings");
refresh("full");const REFRESH = {
    full: {
        storage: true,
        dashboard: true,
        charts: true,
        theme: true,
        ui: true
    },

    transaction: {
        storage: true,
        dashboard: true,
        charts: true,
        ui: true
    },

    budget: {
        storage: true,
        dashboard: true,
        charts: true,
        ui: true
    },

    theme: {
        storage: true,
        theme: true,
        ui: true
    },

    settings: {
        storage: true,
        theme: true,
        ui: true
    }
};

export function refresh(mode = "full") {
    const options = REFRESH[mode];

    if (options.storage) refreshStorage();
    if (options.dashboard) refreshDashboard();
    if (options.charts) refreshCharts();
    if (options.theme) refreshTheme();
    if (options.ui) refreshUI();
}addTransaction(transaction);

refresh("transaction");shared/
│
├── ui/
│   ├── dashboard.js
│   ├── sidebar.js
│   ├── navbar.js
│   ├── tables.js
│   ├── cards.js
│   └── index.js
│
├── modal.js
├── form.js
├── formatter.js
└── validation.jsrefreshUI();renderDashboard();
renderSidebar();
renderTables();
renderCards();src/
│
├── main.js
├── app.js
│
├── core/
│   ├── state.js
│   ├── constants.js
│   ├── config.js
│   ├── helpers.js
│   └── events.js
│
├── services/
│   ├── storage.js
│   ├── dashboard.js
│   ├── charts.js
│   ├── reports.js
│   ├── theme.js
│   ├── export.js
│   └── import.js
│
├── shared/
│   ├── ui/
│   │   ├── dashboard.js
│   │   ├── tables.js
│   │   ├── cards.js
│   │   ├── sidebar.js
│   │   └── index.js
│   │
│   ├── modal.js
│   ├── form.js
│   ├── formatter.js
│   └── validation.js
│
├── features/
│   ├── transactions/
│   ├── budgets/
│   ├── goals/
│   ├── categories/
│   └── settings/
│
└── assets/
