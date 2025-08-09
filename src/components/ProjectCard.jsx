import React from 'react';

export default function ProjectCard({ project }) {
  const { title, description, tags, links, company, highlight } = project;
  const titleId = `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <article className={`card${highlight ? ' highlight' : ''}`} aria-labelledby={titleId}>
      <div className="body">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap: 8, flexWrap:'wrap'}}>
          <h3 id={titleId} style={{margin: 0}}>{title}</h3>
          {company && (
            <span className="pill company" aria-label={`Company: ${company}`}>{company}</span>
          )}
        </div>
        <p>{description}</p>
        <div className="tags">
          {tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
          {links.demo && <a className="btn" href={links.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo for ${title}`}>Live Demo ↗</a>}
          {links.github && <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code on GitHub`}>Source Code</a>}
        </div>
      </div>
    </article>
  );
}
