import React from 'react';

const SKILLS = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Python' },
  { name: 'Ruby' },
  { name: 'SQL' },
  { name: 'React' },
  { name: 'Redux' },
  { name: 'Node.js' },
  { name: 'HTML' },
  { name: 'CSS/SCSS' },
  { name: 'Git/GitHub' },
  { name: 'AWS' },
  { name: 'NPM' },
  { name: 'Postman' },
  { name: 'Jest' },
  { name: 'Mocha' },
  { name: 'Chai' },
  { name: 'Playwright' },
  { name: 'Selenium' },
  { name: 'Cucumber' },
  { name: 'Capybara' },
  { name: 'CI/CD (Jenkins, CircleCI)' },
  { name: 'Jira' },
  { name: 'Rally' },
  { name: 'Agile' },
  { name: 'TDD' },
  { name: 'Pair Programming' },
  { name: 'Code Reviews' },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">Skills</h2>
        <div className="skills">
          {SKILLS.map((s) => (
            <span key={s.name} className="pill">
              {s.name}
              {s.exp ? <span className="meta">• {s.exp}</span> : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
