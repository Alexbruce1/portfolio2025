import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">Highlights</h2>
        <p className="muted" style={{marginTop: -6, marginBottom: 16}}>A selection of project highlights.</p>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
