# 🌵 Dubai Desert Safari - Professional Booking Platform

<div align="center">

[![Live Demo](https://img.shields.io/badge/DEMO-VIEW_LIVE-brightgreen?style=for-the-badge&logo=netlify)](https://dubaisafari.netlify.app/)

![Netlify Status](https://api.netlify.com/api/v1/badges/513eec13-ddd1-4e84-bb6e-021ec19fe0a4/deploy-status?style=flat)
![React](https://img.shields.io/badge/React-19-20232A?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite)

</div>

---

### 🔗 Quick Links

- **🚀 Live Website:** [https://dubaisafari.netlify.app/](https://dubaisafari.netlify.app/)
- **💻 GitHub Repository:** [https://github.com/HossamGezo/dubai_safari](https://github.com/HossamGezo/dubai_safari)

---

<div align="center">
  <img src="assets/dubai-ui.png" alt="Dubai Safari UI" width="900" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"/>
</div>

---

## 🛠️ Tech Stack & Tools

| Core Architecture                                                                                       | Form Handling                                                                                            | Styling & UI                                                                                             | Performance                                                                                                 |
| :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React_19-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) | ![HookForm](https://img.shields.io/badge/Hook_Form-EC5990?style=flat&logo=reacthookform&logoColor=white) | ![Tailwind](https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | ![Lazy](https://img.shields.io/badge/Lazy_Loading-563D7C?style=flat)                                        |
| ![TS](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)        | ![Zod](https://img.shields.io/badge/Zod_Validation-3E67B1?style=flat&logo=zod&logoColor=white)           | ![Icons](https://img.shields.io/badge/React_Icons-eb5757?style=flat&logo=react)                          | ![Memo](https://img.shields.io/badge/useMemo-Optimized-449444?style=flat)                                   |
| ![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat&logo=vite&logoColor=white)                | ![Netlify](https://img.shields.io/badge/Netlify_Deploy-00C7B7?style=flat&logo=netlify&logoColor=white)   | ![Layout](https://img.shields.io/badge/Flexbox_Grid-E34F26?style=flat)                                   | ![ModernJS](https://img.shields.io/badge/ESNext_toSorted-F7DF1E?style=flat&logo=javascript&logoColor=black) |

---

## ✨ Key Features & Refactoring Highlights

### 🏗️ Advanced Frontend Architecture

- **Professional Refactoring:** Standardized naming conventions and implemented absolute import paths (`@/`).
- **Atomic Component Design:** Developed highly reusable "Common" components (`Button`, `InputField`, `PasswordField`, `SelectBox`) for maximum scalability.
- **Custom `cn` Utility:** Intelligent Tailwind class merging using `tailwind-merge` and `clsx`.

### ⚡ Performance & UX Optimization

- **Route-Based Code Splitting:** Implemented `React.lazy` and `Suspense` with a custom centered loader.
- **Smart Layout Strategy:** Flexbox-based wrapper with `flex-grow` logic to ensure a "Sticky Footer".
- **Data-Driven UI:** Dynamic tour rendering with advanced filtering and custom-built pagination logic.

### 🔐 Robust Form Management

- **Type-Safe Validation:** Full Zod schema integration for Login, Registration, and Password Reset workflows.
- **Password Security UI:** Custom `PasswordField` component with visibility toggles and real-time validation feedback.
- **Accessibility (A11y):** ARIA labels, semantic HTML tags, and keyboard-friendly interactive elements.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── common/      # Reusable UI Atoms (Button, InputField, SelectBox, etc.)
│   └── layout/      # Shared components (Header, Footer, Navbar, AuthLayout)
├── data/            # Centralized Mock Data (Tours, Currencies, Languages)
├── layouts/         # High-level page wrappers (MainLayout)
├── pages/
│   ├── home/        # Landing page with Filtering & Pagination logic
│   ├── forms/       # Auth modules (Login, Register, ResetPassword)
│   ├── tour-details/# Dynamic tour views
│   └── about/       # App metadata
├── routes/          # Centralized React Router configuration
├── types/           # Domain-driven TypeScript definitions
├── utils/           # Shared logic (Currency formatting, Pagination/Filter helpers)
└── main.tsx         # Entry point
```

---

## 🚀 Getting Started

1. **Clone & Install:**
   ```bash
   git clone https://github.com/HossamGezo/dubai_safari.git
   npm install
   ```
2. **Run Development:**
   ```bash
   npm run dev
   ```
3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Hossam Gouda**

- **GitHub:** [@HossamGezo](https://github.com/HossamGezo)
- **LinkedIn:** [Hossam Gouda](https://linkedin.com/in/your-profile)

---

_This project was carefully developed to showcase strong expertise in modern React practices and Clean Code principles.._
