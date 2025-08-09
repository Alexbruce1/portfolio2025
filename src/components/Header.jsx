import React from 'react';

export default function Header({ onToggleTheme, theme }) {
  return (
    <header className="site-header" role="banner">
      <div className="container nav">
        <a href="#home" className="brand" aria-label="Home, dev portfolio brand">dev<span className="dot">.</span>portfolio</a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#projects" className="hide-sm">Projects</a>
          <a href="#experience" className="hide-sm">Experience</a>
          <a href="#education" className="hide-sm">Education</a>
          <a href="#certifications" className="hide-sm">Certifications</a>
          <a href="#about" className="hide-sm">About</a>
          <a href="#skills" className="hide-sm">Skills</a>
          <a href="#contact">Contact</a>
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
