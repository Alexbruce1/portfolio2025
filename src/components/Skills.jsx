import React from 'react';

const SKILLS = [
  'JavaScript', 'TypeScript', 'Python', 'Ruby', 'SQL', 'React', 'Redux', 'Node.js', 'HTML', 'CSS/SCSS',
  'Git/GitHub', 'AWS', 'NPM', 'Postman', 'Jest', 'Mocha', 'Chai', 'Playwright', 'Selenium', 'Cucumber', 'Capybara',
  'CI/CD (Jenkins, CircleCI)', 'Jira', 'Rally',
  'Agile', 'TDD', 'Pair Programming', 'Code Reviews'
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">Skills</h2>
        <div className="skills">
          {SKILLS.map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
