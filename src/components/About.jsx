import React from 'react';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">About</h2>
        <p className="muted" style={{maxWidth: 800}}>
          I’m a software engineer with a focus on front‑end and full‑stack development, and a solid foundation in quality engineering. I enjoy building interfaces that feel great to use and pairing them with reliable, well‑tested back ends.
        </p>
        <p className="muted" style={{maxWidth: 800}}>
          I like simplifying complex problems into clean, maintainable solutions that move the business forward. I work best in collaborative, Agile teams where iteration, thoughtful code review, and test‑driven development lead to predictable delivery and high‑quality software.
        </p>
      </div>
    </section>
  );
}
