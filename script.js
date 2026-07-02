src/
│
├── main.js
├── app.js
│
├── core/
│   ├── state.js
│   ├── constants.js
│   ├── helpers.js
│   └── config.js
│
├── events/
│   ├── bus.js
│   └── names.js
│
├── services/
├── shared/
├── features/
└── assets/import { emit } from "../events/bus.js";
import { EVENTS } from "../events/names.js";on()
off()
once()
emit()
clear()export function refresh(mode = "full") {
    const options = REFRESH[mode] ?? REFRESH.full;

    if (options.storage) refreshStorage();
    if (options.dashboard) refreshDashboard();
    if (options.charts) refreshCharts();
    if (options.theme) refreshTheme();
    if (options.ui) refreshUI();
}const pipeline = [
    ["storage", refreshStorage],
    ["dashboard", refreshDashboard],
    ["charts", refreshCharts],
    ["theme", refreshTheme],
    ["ui", refreshUI]
];

export function refresh(mode = "full") {
    const options = REFRESH[mode] ?? REFRESH.full;

    for (const [key, task] of pipeline) {
        if (options[key]) {
            task();
        }
    }
}                     Browser
                        │
                        ▼
                     main.js
                        │
                        ▼
                     app.js
              (Application Lifecycle)
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
    Features         Services         Shared
        │               │                │
        └───────────────┼────────────────┘
                        ▼
                      Core
                 (Application State)

             ───────────────────────

                  Event Bus Layer
              (Notifications Only)

             Logger • Analytics •
             Notifications • DevTools
