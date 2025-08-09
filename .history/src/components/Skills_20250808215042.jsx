import React from 'react';

const SKILLS = [
  { name: 'JavaScript', since: 2019 },
  { name: 'TypeScript', since: 2022 },
  { name: 'Python', exp: '2025 coursework' },
  { name: 'Pandas', exp: '2025 coursework' },
  { name: 'NumPy', exp: '2025 coursework' },
  { name: 'scikit-learn', exp: '2025 coursework' },
  { name: 'Ruby', since: 2023 },
  { name: 'SQL', since: 2022 },
  { name: 'React', since: 2020 },
  { name: 'Redux', since: 2021 },
  { name: 'Node.js', since: 2021 },
  { name: 'HTML', since: 2018 },
  { name: 'CSS/SCSS', since: 2018 },
  { name: 'Git/GitHub', since: 2018 },
  { name: 'AWS', since: 2024 },
  { name: 'NPM', since: 2019 },
  { name: 'Postman', since: 2020 },
  { name: 'Jest', since: 2020 },
  { name: 'Mocha', since: 2022 },
  { name: 'Chai', since: 2022 },
  { name: 'Playwright', since: 2022 },
  { name: 'Selenium', since: 2022 },
  { name: 'Cucumber', since: 2022 },
  { name: 'Capybara', since: 2023 },
  { name: 'A/B Testing', exp: '2025 coursework' },
  { name: 'Hypothesis Testing', exp: '2025 coursework' },
  { name: 'Data Visualization', exp: '2025 coursework' },
  { name: 'CI/CD (Jenkins, CircleCI)', since: 2021 },
  { name: 'Jira', since: 2020 },
  { name: 'Rally', since: 2023 },
  { name: 'Agile', since: 2019 },
  { name: 'TDD', since: 2020 },
  { name: 'Pair Programming', since: 2021 },
  { name: 'Code Reviews', since: 2019 },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">Skills</h2>
        <div className="skills">
          {SKILLS.slice().sort((a, b) => {
            const weight = (item) => {
              if (item.exp && String(item.exp).toLowerCase().includes('coursework')) return 0.4;
              if (!item.since) return 0;
              const nowY = new Date().getFullYear();
              const y = typeof item.since === 'string' ? parseInt(item.since.slice(0,4), 10) : item.since;
              return Math.max(0, nowY - y);
            };
            return weight(b) - weight(a);
          }).map((s) => {
            let label = s.exp || '';
            if (!label && s.since) {
              const nowY = new Date().getFullYear();
              const y = typeof s.since === 'string' ? parseInt(s.since.slice(0,4), 10) : s.since;
              const years = Math.max(0, nowY - y);
              label = years === 0 ? 'less than 1 yr' : years === 1 ? '1 yr' : `${years} yrs`;
            }
            return (
              <span key={s.name} className="pill">
                {s.name}
                {label ? <span className="meta">• {label}</span> : null}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
