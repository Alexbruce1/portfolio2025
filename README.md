# Developer Portfolio

A clean, fast, responsive portfolio built with React 18 and Vite. It includes Hero, Projects, Experience, Education, About, Skills, and Contact sections with a light/dark theme toggle.

## Quick start

```
npm install
npm run dev
```

- Dev server: http://localhost:5173
- Build: `npm run build`
- Preview build: `npm run preview`

## Features

- Responsive layout with polished cards, grid, and sticky header
- Light/dark theme with local preference and system fallback
- Accessible navigation, focus styles, and reduced-motion support
- Company labels on projects; profile photo support (`public/profile.jpg`)

## Customize

- Update copy and links in:
  - `src/components/Hero.jsx`
  - `src/components/Contact.jsx`
  - `src/components/Footer.jsx`
  - `src/components/Education.jsx`
- Add/edit projects in `src/data/projects.js` (supports optional `company`).
- Add a headshot at `public/profile.jpg` (square, ~800×800 recommended).
- Global styles in `src/index.css`; theme variables in `src/theme.css`.

## Deploy

- GitHub Pages is preconfigured via Actions on pushes to `main`.
- Project Pages URL: `https://alexbruce1.github.io/portfolio2025/`
- Local static hosting also works (Netlify, Vercel, GitHub Pages).
- Manual: `npm run build`, deploy the `dist/` folder.

## Notes

- No backend required; pure static site.
- Accessible markup, keyboard focus styles, and reduced‑motion friendly.
