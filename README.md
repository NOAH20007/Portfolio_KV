# Khorn Vuthy — Software Engineering Portfolio (React + Vite)

A modern, responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**.

## Project Structure

- [index.html](file:///c:/D/Portfolio/index.html) — App shell, Google Fonts (`Inter`), and Font Awesome 6 icons
- [tailwind.config.js](file:///c:/D/Portfolio/tailwind.config.js) — Custom `brand` color palette and class-based dark mode configuration
- [src/index.css](file:///c:/D/Portfolio/src/index.css) — Tailwind directives, floating animations, and print styles for the Standard CV sheet
- [src/data/portfolioData.js](file:///c:/D/Portfolio/src/data/portfolioData.js) — Centralized data for profile info, skills, experience/projects, and education
- [src/App.jsx](file:///c:/D/Portfolio/src/App.jsx) — Root component managing dark/light theme, active scroll spy, toast notifications, clipboard copy, and CV modal state
- `src/components/` — Modular section and UI components (`Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Education`, `Contact`, `Footer`, `CvModal`, `ToastContainer`)

## Profile Photo

Place your `image_f4a8f7.jpg` image inside the `public/` folder (`public/image_f4a8f7.jpg`) so Vite serves it at `/image_f4a8f7.jpg`. Automatic fallback avatars are built in if the image is not yet added.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
