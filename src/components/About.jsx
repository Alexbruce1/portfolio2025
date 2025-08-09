import React from 'react';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">About</h2>
        <p className="muted" style={{maxWidth: 800}}>
          I’m a software developer with a foundation in frontend and full‑stack development, a strong background
          in QA and test automation, and a growing skill set in data science and machine learning. I thrive in Agile teams
          where collaboration and iteration lead to meaningful, user‑focused solutions.
        </p>
        <p className="muted" style={{maxWidth: 800}}>
          Outside of work, you’ll usually find me on an overlanding trip, tinkering with cars, chasing lap times at the track,
          taking photos, or spending time with my wife and dogs.
        </p>
      </div>
    </section>
  );
}
