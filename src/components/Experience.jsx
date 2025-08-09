import React from 'react';
import { experience } from '../data/experience.js';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">Experience</h2>
        <div style={{display:'flex', flexDirection:'column', gap: 16}}>
          {experience.map((item) => (
            <article key={item.company + item.role} className={`card${item.highlight ? ' highlight' : ''}`}>
              <div className="body">
                <div style={{display:'flex', justifyContent:'space-between', gap: 12, flexWrap:'wrap'}}>
                  <div>
                    <h3 style={{margin:'0 0 4px'}}>{item.role}</h3>
                    <div className="muted">{item.company}{item.location ? ` — ${item.location}` : ''}</div>
                  </div>
                  <div className="muted">{item.start} — {item.end}</div>
                </div>
                <ul style={{margin:'12px 0 0 18px'}}>
                  {item.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
