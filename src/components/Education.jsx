import React from 'react';
import { utaustin } from '../data/utaustin.js';

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

          <article className="card highlight" aria-labelledby="edu-utaustin">
            <div className="body">
              <h3 id="edu-utaustin">The University of Texas at Austin</h3>
              <p className="muted" style={{marginTop: 6}}>
                {utaustin.program} ({utaustin.duration})
              </p>
              <div className="tags" style={{marginTop: 8}}>
                <span className="pill company">Featured</span>
                <span className="pill">In Progress</span>
              </div>
              <div className="tags" style={{marginTop: 10}}>
                <span className="pill">Python</span>
                <span className="pill">Machine Learning</span>
                <span className="pill">Statistics</span>
                <span className="pill">Data Visualization</span>
              </div>
              <div className="stats" style={{display:'flex', gap:8, flexWrap:'wrap', marginTop: 12}}>
                <span className="pill">GPA <span className="meta">{utaustin.gpa}</span></span>
                <span className="pill">Credits <span className="meta">{utaustin.creditsEarned}</span></span>
                <span className="pill success">Complete <span className="meta">{utaustin.coursesComplete}</span></span>
                <span className="pill warn">In Progress <span className="meta">{utaustin.coursesInProgress}</span></span>
              </div>
              <h4 style={{margin:'16px 0 10px', fontSize:16}}>Coursework</h4>
              <div className="grid" style={{gridTemplateColumns:'repeat(2, minmax(0, 1fr))'}}>
                {utaustin.courses.map((c) => (
                  <article key={c.title} className={`card${c.status === 'In Progress' ? ' highlight' : ''}`} aria-label={`${c.title} — ${c.status}`}>
                    <div className="body">
                      <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', gap:10}}>
                        <h3 style={{margin:'0 0 6px', fontSize:16}}>{c.title}</h3>
                        <span className={`pill ${c.status === 'Complete' ? 'success' : 'warn'}`}>{c.status}</span>
                      </div>
                      <div className="muted" style={{display:'flex', gap:12, flexWrap:'wrap'}}>
                        {c.grade ? <span>Grade: {c.grade}</span> : null}
                        <span>Score: {c.score}</span>
                        <span>Credits: {c.credits}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
