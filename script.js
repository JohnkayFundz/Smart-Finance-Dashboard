                     Browser
                        │
                        ▼
                     main.js
                        │
                        ▼
                     app.js
             (initialize / refresh)
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
    Features         Services         Shared
        │               │                ▲
        └───────────────┼────────────────┘
                        ▼
                      Core
               (state, storage,
             constants, helpers)✓ app.js → Features
✓ app.js → Services
✓ app.js → Core
✓ app.js → Shared

✓ Features → Core
✓ Features → Services
✓ Features → Shared

✓ Services → Core
✓ Shared → Core (only if necessary)

✗ Core → Features
✗ Core → Services
✗ Services → Features
✗ Shared → Features
✗ Feature ↔ Feature (avoid direct dependencies)Application Startup
────────────────────────────────────

Browser
    │
    ▼
main.js
    │
    ▼
app.initialize()
    │
    ├── Load persisted state
    ├── Apply theme
    ├── Calculate dashboard
    ├── Render charts
    └── Render UI

────────────────────────────────────

Application Runtime

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
