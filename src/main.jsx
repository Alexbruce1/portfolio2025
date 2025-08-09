import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './theme.css';
import './index.css';

const THEME_KEY = 'portfolio:theme';
(() => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved === 'light' || saved === 'dark' ? saved : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initial);
  } catch (_) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
