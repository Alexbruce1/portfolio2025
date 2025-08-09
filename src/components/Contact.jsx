import React from 'react';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">Contact</h2>
        <p className="muted" style={{marginBottom: 16}}>Let’s build something great together.</p>
        <div className="contact-links" role="group" aria-label="Contact methods">
          <a className="btn primary" href="mailto:abruce18@turing.edu" aria-label="Email Alex">Email Me</a>
          <a className="btn" href="https://github.com/Alexbruce1" target="_blank" rel="noopener noreferrer" aria-label="Alex Bruce on GitHub">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/alexbbruce/" target="_blank" rel="noopener noreferrer" aria-label="Alex Bruce on LinkedIn">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
