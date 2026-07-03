                     Browser
                        │
                        ▼
                     main.js
                        │
                        ▼
                  app.initialize()
                        │
                        ▼
                  User Interaction
                        │
                        ▼
                     Features
                        │
                        ▼
                Update Core State
                        │
                        ▼
                   app.refresh()
                        │
        ┌───────────────┼────────────────────────────┐
        ▼               ▼              ▼            ▼
 Storage Service   Dashboard      Charts        Theme
        │            Service       Service      Service
        │               │              │            │
        ▼               ▼              ▼            ▼
 storage:saved   dashboard:updated  charts:rendered theme:changed
        │               │              │            │
        └───────────────┴──────────────┴────────────┘
                        │
                        ▼
              Optional Event Listeners
        ┌───────────────┼──────────────────────────┐
        ▼               ▼              ▼           ▼
     Logger        Analytics     Notifications   DevTools
