src/
│
├── main.js
├── app.js
│
├── core/
│   ├── state.js
│   ├── constants.js
│   ├── helpers.js
│   ├── config.js
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
│   ├── ui.js
│   ├── modal.js
│   ├── table.js
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
└── assets/app.refresh()
│
├── services.storage.save(state)
├── services.dashboard.calculate(state)
├── services.charts.render(state)
├── services.theme.apply(state)
└── shared.ui.render(state)app.refresh({
  storage: true,
  dashboard: true,
  charts: false,
  theme: false,
  ui: true
});export function refresh(options = {}) {
    if (options.storage) refreshStorage();
    if (options.dashboard) refreshDashboard();
    if (options.charts) refreshCharts();
    if (options.theme) refreshTheme();
    if (options.ui) refreshUI();
}
