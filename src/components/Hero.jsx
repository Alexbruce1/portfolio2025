import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="home-title">
      <div className="container hero-grid">
        <div>
          <span className="pill" aria-label="Status: Available for work in Denver, Colorado">Available for work • Denver, CO</span>
          <h1 id="home-title">Alex Bruce</h1>
          <p className="subtitle">Software Developer — Frontend, Full‑Stack, and QA Automation</p>
          <p className="muted" style={{marginBottom: 18}}>
            I’m a software developer with a foundation in frontend and full‑stack development, a strong background in QA and test automation,
            and a growing skill set in data science and machine learning. I thrive in Agile teams where collaboration and iteration lead to
            meaningful, user‑focused solutions.
          </p>
          <div className="ctas">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href="/resume.pdf" download>Download Résumé</a>
          </div>
        </div>
        <div>
          <figure className="profile" aria-label="Profile photo">
            <img src="/profile.jpg" alt="Headshot of Alex Bruce" loading="lazy" decoding="async" />
          </figure>
          <div className="card" aria-label="Quick facts">
            <div className="body">
              <h3>Quick facts</h3>
              <ul className="muted" style={{margin: '8px 0 0 18px'}}>
                <li>Agile, TDD, and code reviews</li>
                <li>QA automation: Jest, Playwright, Selenium</li>
                <li>Data science & ML (in progress)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
