import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use project pages base when building for GitHub Pages
const isCI = process.env.CI === 'true';
const repoBase = '/portfolio2025/';

export default defineConfig({
  plugins: [react()],
  base: isCI ? repoBase : '/',
});
