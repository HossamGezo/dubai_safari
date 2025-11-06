# Bubai Safari Project 🐪

<div style="text-align: center;">
  <a href="assets/images/screenshot.jpg" target="_blank">
    <img src="assets/images/screenshot.jpg" alt="Dubai Safari Project Screenshot" width="800"/>
  </a>
</div>

A web application for booking safari trips, built with React, TypeScript, and Vite. This project is a learning exercise to practice modern web development, professional Git workflows, and code quality best practices.

***

### 🔗 Live Demo

**[https://dubaisafari.netlify.app/](https://dubaisafari.netlify.app/)**

***

## ✨ Features

*   **Code Quality & Refactoring:**
    *   Implemented absolute import paths (`@/components`, etc.) for better readability and maintainability.
    *   Standardized CSS naming conventions and component structure.
*   **Authentication:**
    *   **Login & Register Pages:** User-friendly forms with client-side validation using React Hook Form and Zod.
    *   **Reusable Auth Layout:** A consistent layout for all authentication-related pages.
*   **Core Functionality:**
    *   **Tours Section & Details Page:** Displays a paginated and filterable list of tours, each linking to a dedicated details page.
*   **Static & Utility Pages:**
    *   **About Us Page:** A responsive page providing information about the company.
    *   **Error Page:** A custom 404 page for handling invalid routes.
*   **Home Page Sections:**
    *   **Hero, Services, Banner & Newsletter Sections** (with validation).
*   **Layout:**
    *   **Header & Footer:** Fully responsive and reusable components.

## 🛠️ Tech Stack & Setup

*   **Framework:** React with TypeScript & Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM
*   **Form Handling:** React Hook Form & Zod for validation
*   **Icons:** React Icons

## 🚀 How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/HossamGezo/dubai_safari.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```