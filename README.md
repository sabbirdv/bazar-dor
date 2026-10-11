# 🛒 Bazar Dor (বাজার দর)

**Bazar Dor** is a modern, responsive web application designed to keep track of daily market prices for essential products across various markets and districts in Bangladesh. Built with Next.js and Tailwind CSS, it provides real-time price updates, market breakdowns, and secure user authentication.

---

## 🚀 Live Demo & Repository

- **Live Site**: [https://bazardor-green.vercel.app/](https://bazardor-green.vercel.app/)
- **GitHub Repository**: [https://github.com/sabbirdv/bazar-dor](https://github.com/sabbirdv/bazar-dor)

---

## ✨ Key Features

1. **Live Price Marquee & Market Updates**:
   - Dynamic price ticker showcasing immediate market price changes (▲ price increases and  ▼ drops) formatted with native digits.

2. **District & Bazar-wise Price Breakdown**:
   - Detailed product view pages (`/product/[slug]`) offering high, low, and average prices grouped by regional markets and districts.

3. **Secure Authentication with BetterAuth**:
   - Full authentication support for Email/Password as well as **Google** and **GitHub** social logins. Includes profile updating and feedback toasts.

4. **Protected Routes & Smooth Toast Feedback**:
   - Restricts unauthenticated access to sensitive pages (like Product Details and My Profile). Triggers interactive toast alerts on login, signup, logout, and redirects using **React Hot Toast**.

5. **Smart Category Filtering & Sorting**:
   - Instant category filtering and numeric price sorting (`Low to High`, `High to Low`, and `Default`) with full support for Bengali numerals.

6. **Responsive UI & Dynamic Loaders**:
   - Beautiful, fully responsive design powered by **DaisyUI** and **Hero UI** with smooth skeleton loading states for clean UX across mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript / React (`.tsx`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) + Hero UI
- **Authentication**: [BetterAuth](https://www.better-auth.com/) (Email/Password, Google, GitHub)
- **Icons & UI Extras**: [React Icons](https://react-icons.github.io/react-icons/), [React Hot Toast](https://react-hot-toast.com/)

---

## 📦 Getting Started Locally
To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/sabbirdv/bazar-dor.git](https://github.com/sabbirdv/bazar-dor.git)
   cd bazar-dor