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
              <p className="muted" style={{marginTop: 6}}>Front End Engineering — completed program; 2,100+ hours and 30+ projects.</p>
              <div className="tags" style={{marginTop: 8}}>
                <span className="pill success">Completed</span>
                <span className="pill">Mentor</span>
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
                <span className="pill">In Progress</span>
              </div>
              <p className="muted" style={{marginTop: 12}}>
                GPA {utaustin.gpa} to date; focused on Python, machine learning, statistics, and data visualization.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
