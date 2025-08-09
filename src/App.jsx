import React, { useEffect, useMemo, useState } from 'react';
import { Header, Hero, Projects, About, Skills, Experience, Education, Contact, Footer } from './components/index.js';

const THEME_KEY = 'portfolio:theme';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main id="main-content" role="main">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer year={year} />
    </>
  );
}
