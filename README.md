## 🌐 Live Demo

Experience the application without any installation.

👉 **Live Demo:** https://your-demo-url.com

> *Coming soon. The application will be deployed to GitHub Pages, Netlify, or Vercel.*

---

## ⚡ Quick Start

Clone the repository and run the project locally.

```bash
git clone https://github.com/JohnkayFundz/Smart-Finance-Dashboard.git

cd Smart-Finance-Dashboard
```

Then either:

* Open `index.html` in your browser, or
* Launch the project using the **VS Code Live Server** extension.

---

## 🏛 Architecture

The Smart Finance Dashboard follows a modular architecture that separates application logic into focused, maintainable modules. Features, services, shared utilities, and core state management work together to keep the codebase scalable and easy to extend.

```text
Browser
   │
   ▼
main.js
   │
   ▼
app.js
   │
 ┌───────────────┬───────────────┐
 ▼               ▼               ▼
Features      Services        Shared
 │               │               │
 └───────────────┼───────────────┘
                 ▼
              Core State
                 │
                 ▼
           Local Storage
```

---

## 📂 Project Structure

```text
src/
├── app/               # Application bootstrap
├── core/              # State management, constants, helpers
├── features/          # Budgets, dashboard, transactions
├── services/          # Data persistence and storage
├── shared/
│   ├── components/    # Reusable UI components
│   ├── modal/         # Modal system
│   ├── utils/         # Shared utilities
│   └── validators/    # Form validation
└── main.js            # Application entry point
```

---

## 📸 Screenshots

### Dashboard Overview

*Main dashboard displaying total budget, income, expenses, and remaining balance.*

```md
![Dashboard](assets/screenshots/dashboard.png)
```

### Budget Management

*Create, edit, and manage budgets with real-time calculations.*

```md
![Budgets](assets/screenshots/budgets.png)
```

### Transaction History

*Track income and expenses with an organized transaction list.*

```md
![Transactions](assets/screenshots/transactions.png)
```

---

## 📊 Repository Statistics

![GitHub Stars](https://img.shields.io/github/stars/JohnkayFundz/Smart-Finance-Dashboard?style=for-the-badge)

![GitHub Forks](https://img.shields.io/github/forks/JohnkayFundz/Smart-Finance-Dashboard?style=for-the-badge)

![Last Commit](https://img.shields.io/github/last-commit/JohnkayFundz/Smart-Finance-Dashboard?style=for-the-badge)
