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

- Static hosting works well (Netlify, Vercel, GitHub Pages).
- Build the site: `npm run build`, then deploy the `dist/` folder.

## Notes

- No backend required; pure static site.
- Accessible markup, keyboard focus styles, and reduced‑motion friendly.
