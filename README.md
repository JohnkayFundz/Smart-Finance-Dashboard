## 🌐 Live Demo

Experience the Smart Finance Dashboard without installing anything.

🚀 **Live Demo:** *Coming Soon*

> The application will be deployed to **GitHub Pages**, **Netlify**, or **Vercel**.

---

## ⚡ Quick Start

Clone the repository:

```bash
git clone https://github.com/JohnkayFundz/Smart-Finance-Dashboard.git

cd Smart-Finance-Dashboard
```

Launch the application by either:

* Opening `index.html` directly in your browser, or
* Running the project with the **VS Code Live Server** extension.

---

## 🏛 Architecture

The Smart Finance Dashboard is built using a modular architecture that promotes scalability, maintainability, and separation of concerns. Business logic, reusable UI components, shared utilities, and data persistence are organized into independent modules.

```text
Browser
   │
   ▼
main.js
   │
   ▼
app.js
   │
 ┌───────────────┬───────────────┬───────────────┐
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
├── services/          # Local storage and data services
├── shared/
│   ├── components/    # Reusable UI components
│   ├── modal/         # Modal system
│   ├── utils/         # Shared helper functions
│   └── validators/    # Form validation
└── main.js            # Application entry point
```

---

## 📊 Repository Statistics

![GitHub Stars](https://img.shields.io/github/stars/JohnkayFundz/Smart-Finance-Dashboard?style=for-the-badge)
![GitHub Forks](https://img.shields.io/github/forks/JohnkayFundz/Smart-Finance-Dashboard?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/JohnkayFundz/Smart-Finance-Dashboard?style=for-the-badge)

---

## 📸 Screenshots

### 🏠 Dashboard Overview

A real-time overview of your budgets, income, expenses, and remaining balance.

```md
![Dashboard](assets/screenshots/dashboard.png)
```

### 💳 Budget Management

Create, edit, and manage budgets with automatic remaining balance calculations.

```md
![Budgets](assets/screenshots/budgets.png)
```

### 💸 Transaction Management

Track income and expenses with a clean, organized transaction history.

```md
![Transactions](assets/screenshots/transactions.png)
```
