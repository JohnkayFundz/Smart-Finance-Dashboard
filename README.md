## 🌐 Live Demo

Try the application online:

👉 **https://your-demo-url.com**

> **Coming Soon:** The application will be deployed to GitHub Pages, Netlify, or Vercel.

---

## ⚡ Quick Start

Clone the repository:

```bash
git clone https://github.com/JohnkayFundz/Smart-Finance-Dashboard.git

cd Smart-Finance-Dashboard
```

Then either:

* Open `index.html` in your browser, or
* Launch the project using the **VS Code Live Server** extension.

---

## 🏛 Architecture

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
├── core/              # State management, helpers, constants
├── features/          # Budgets, dashboard, transactions
├── services/          # Storage services
├── shared/
│   ├── components/    # Reusable UI components
│   ├── modal/         # Modal system
│   ├── utils/         # Shared utilities
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

![Dashboard](assets/screenshots/dashboard.png)

### 💳 Budget Management

![Budgets](assets/screenshots/budgets.png)

### 💸 Transaction History

![Transactions](assets/screenshots/transactions.png)
