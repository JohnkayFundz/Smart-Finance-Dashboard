┌──────────────────────────────────────────────────────────────┐
│                         Browser                              │
└──────────────────────────────────────────────────────────────┘
                           │
                           ▼
                        main.js
                           │
                           ▼
                         app.js
                  (initialize / refresh)
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
     Features            Core             Services
        │                  │                  │
        └──────────────┬───┴──────────────┬───┘
                       ▼                  ▼
                 Shared Components     Storage✔ Features → Core
✔ Features → Services
✔ Features → Shared

✔ App → Features
✔ App → Core
✔ App → Services

✖ Core → Features
✖ Services → Features
✖ Shared → Features
✖ Features → Features (prefer keeping them independent)Application Startup
────────────────────────────────

Browser
    │
    ▼
main.js
    │
    ▼
initialize()
    │
    ├── Load persisted state
    ├── Apply theme
    ├── Calculate dashboard
    ├── Render charts
    └── Render UI


Application Runtime
────────────────────────────────

User Action
    │
    ▼
Feature UI
    │
    ▼
Feature Logic
    │
    ▼
Update state
    │
    ▼
app.refresh()
    │
    ├── Persist state
    ├── Update dashboard
    ├── Update charts
    ├── Apply theme
    └── Render UI
