import React from 'react';

const SKILLS = [
  { name: 'JavaScript', exp: '6+ yrs' },
  { name: 'TypeScript', exp: '3 yrs' },
  { name: 'Python', exp: 'In progress' },
  { name: 'Ruby', exp: '2 yrs' },
  { name: 'SQL', exp: '3 yrs' },
  { name: 'React', exp: '5 yrs' },
  { name: 'Redux', exp: '4 yrs' },
  { name: 'Node.js', exp: '4 yrs' },
  { name: 'HTML', exp: '7 yrs' },
  { name: 'CSS/SCSS', exp: '7 yrs' },
  { name: 'Git/GitHub', exp: '7 yrs' },
  { name: 'AWS', exp: '1 yr' },
  { name: 'NPM', exp: '6 yrs' },
  { name: 'Postman', exp: '5 yrs' },
  { name: 'Jest', exp: '5 yrs' },
  { name: 'Mocha', exp: '3 yrs' },
  { name: 'Chai', exp: '3 yrs' },
  { name: 'Playwright', exp: '3 yrs' },
  { name: 'Selenium', exp: '3 yrs' },
  { name: 'Cucumber', exp: '3 yrs' },
  { name: 'Capybara', exp: '2 yrs' },
  { name: 'CI/CD (Jenkins, CircleCI)', exp: '4 yrs' },
  { name: 'Jira', exp: '5 yrs' },
  { name: 'Rally', exp: '2 yrs' },
  { name: 'Agile', exp: '6+ yrs' },
  { name: 'TDD', exp: '5 yrs' },
  { name: 'Pair Programming', exp: '4 yrs' },
  { name: 'Code Reviews', exp: '6 yrs' },
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
