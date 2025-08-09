import React from 'react';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title">
      <div className="container">
        <h2 id="education-title" className="section-title">Education</h2>
        <p className="muted" style={{marginTop: -6, marginBottom: 16}}>
          I’m committed to lifelong learning and continuously sharpening my skills through formal programs and self‑directed study.
        </p>

        <div className="grid">
          <article className="card" aria-labelledby="edu-turing">
            <div className="body">
              <h3 id="edu-turing">Turing School of Software & Design</h3>
              <p className="muted" style={{marginTop: 6}}>Software Development — Focus on modern frontend and full‑stack practices.</p>
              <div className="tags" style={{marginTop: 10}}>
                <span className="pill">JavaScript</span>
                <span className="pill">React</span>
                <span className="pill">Testing</span>
                <span className="pill">Agile</span>
              </div>
            </div>
          </article>

          <article className="card" aria-labelledby="edu-utaustin">
            <div className="body">
              <h3 id="edu-utaustin">The University of Texas at Austin</h3>
              <p className="muted" style={{marginTop: 6}}>Graduate Certificate — Data Science and Business Analytics (Apr 2025 – Dec 2025)</p>
              <div className="tags" style={{marginTop: 10}}>
                <span className="pill">Python</span>
                <span className="pill">Machine Learning</span>
                <span className="pill">Statistics</span>
                <span className="pill">Data Visualization</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
