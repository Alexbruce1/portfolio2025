import React, { useEffect, useState } from 'react';

export default function Header({ onToggleTheme, theme }) {
  const [active, setActive] = useState('projects');

  useEffect(() => {
    const ids = ['projects','skills','experience','education','certifications','about','contact'];
    const getActive = () => {
      const y = 80;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - y <= 0) current = id;
      }
      setActive(current);
    };
    getActive();
    window.addEventListener('scroll', getActive, { passive: true });
    window.addEventListener('resize', getActive);
    return () => {
      window.removeEventListener('scroll', getActive);
      window.removeEventListener('resize', getActive);
    };
  }, []);
  return (
    <header className="site-header" role="banner">
      <div className="container nav">
        <a href="#home" className="brand" aria-label="Home, dev portfolio brand">dev<span className="dot">.</span>portfolio</a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#projects" className={`hide-sm${active==='projects'?' active':''}`} aria-current={active==='projects'?'page':undefined}>Highlights</a>
          <a href="#skills" className={`hide-sm${active==='skills'?' active':''}`} aria-current={active==='skills'?'page':undefined}>Skills</a>
          <a href="#experience" className={`hide-sm${active==='experience'?' active':''}`} aria-current={active==='experience'?'page':undefined}>Experience</a>
          <a href="#education" className={`hide-sm${active==='education'?' active':''}`} aria-current={active==='education'?'page':undefined}>Education</a>
          <a href="#certifications" className={`hide-sm${active==='certifications'?' active':''}`} aria-current={active==='certifications'?'page':undefined}>Certifications</a>
          <a href="#about" className={`hide-sm${active==='about'?' active':''}`} aria-current={active==='about'?'page':undefined}>About</a>
          <a href="#contact" className={active==='contact'?'active':''} aria-current={active==='contact'?'page':undefined}>Contact</a>
          <button
            className="btn"
            onClick={onToggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
            <span className="sr-only">Toggle color theme</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
