import React from 'react';

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certs-title">
      <div className="container">
        <h2 id="certs-title" className="section-title">Certifications</h2>
        <div className="grid">
          <article className="card" aria-labelledby="cert-aws-intro">
            <div className="body">
              <h3 id="cert-aws-intro">Introduction to IT and AWS Cloud</h3>
              <p className="muted" style={{marginTop: 6}}>Amazon Web Services — Issued Aug 2024</p>
              <div className="tags" style={{marginTop: 10}}>
                <span className="pill">Cloud</span>
                <span className="pill">AWS</span>
                <span className="pill">IT Foundations</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

