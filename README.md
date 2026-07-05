## 🌐 Live Demo

Try the application online:

👉 **https://your-demo-url.com**

> No installation required.## 🏛 Architecture

The application follows a modular architecture that separates business logic, shared utilities, UI rendering, and data persistence.

```text
Browser
   │
   ▼
main.js
   │
   ▼
app.js
   │
 ┌─┴─────────────┐
 ▼              ▼
Features     Services
 │              │
 └──────┬───────┘
        ▼
     Core State
        │
        ▼
   Local Storage
```src/
├── app/           # Application bootstrap
├── core/          # State management, helpers, constants
├── features/      # Budgets, dashboard, transactions
├── services/      # Storage services
├── shared/        # Components, modals, validators, utilities
└── main.js        # Application entry point![Stars](https://img.shields.io/github/stars/JohnkayFundz/Smart-Finance-Dashboard)
![Forks](https://img.shields.io/github/forks/JohnkayFundz/Smart-Finance-Dashboard)
![Last Commit](https://img.shields.io/github/last-commit/JohnkayFundz/Smart-Finance-Dashboard)## 📸 Screenshots

### Dashboard Overview

### Budget Management

### Transaction History## ⚡ Quick Start

```bash
git clone https://github.com/JohnkayFundz/Smart-Finance-Dashboard.git

cd Smart-Finance-Dashboard

# Open index.html
```

Or launch the project with the VS Code Live Server extension.
