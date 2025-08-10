import React from 'react';

const SKILLS = [
  { name: 'JavaScript', since: 2018 },
  { name: 'TypeScript', since: 2024 },
  { name: 'Python', exp: '2025 coursework' },
  { name: 'Pandas', exp: '2025 coursework' },
  { name: 'NumPy', exp: '2025 coursework' },
  { name: 'scikit-learn', exp: '2025 coursework' },
  { name: 'Ruby', since: 2019 },
  { name: 'SQL', since: 2024 },
  { name: 'React', since: 2018 },
  { name: 'Redux', since: 2018 },
  { name: 'Node.js', since: 2018 },
  { name: 'HTML', since: 2018 },
  { name: 'CSS/SCSS', since: 2018 },
  { name: 'Git/GitHub', since: 2018 },
  { name: 'AWS', since: 2024 },
  { name: 'NPM', since: 2018 },
  { name: 'Postman', since: 2019 },
  { name: 'Jest', since: 2018 },
  { name: 'Mocha', since: 2018 },
  { name: 'Chai', since: 2018 },
  { name: 'Playwright', since: 2021 },
  { name: 'Selenium', since: 2019 },
  { name: 'Cucumber', since: 2019 },
  { name: 'Capybara', since: 2019 },
  { name: 'A/B Testing', exp: '2025 coursework' },
  { name: 'Hypothesis Testing', exp: '2025 coursework' },
  { name: 'Data Visualization', exp: '2025 coursework' },
  { name: 'CI/CD (Jenkins, CircleCI)', since: 2018 },
  { name: 'Jira', since: 2022 },
  { name: 'Rally', since: 2019 },
  { name: 'Agile', since: 2019 },
  { name: 'TDD', since: 2018 },
  { name: 'Pair Programming', since: 2018 },
  { name: 'Code Reviews', since: 2018 },
];

const GROUPS = [
  { label: 'Frontend', names: ['HTML','CSS/SCSS','JavaScript','TypeScript','React','Redux'] },
  { label: 'Backend & Platform', names: ['Node.js','SQL','Ruby','AWS','Git/GitHub','NPM'] },
  { label: 'Testing & QA', names: ['Jest','Mocha','Chai','Playwright','Selenium','Cucumber','Capybara','Postman','CI/CD (Jenkins, CircleCI)'] },
  { label: 'Data & ML', names: ['Python','Pandas','NumPy','scikit-learn','A/B Testing','Hypothesis Testing','Data Visualization'] },
  { label: 'Practices & Collaboration', names: ['Agile','TDD','Pair Programming','Code Reviews','Jira','Rally'] },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">Skills</h2>
        <div className="skills-groups">
          {GROUPS.map((group) => {
            const items = SKILLS.filter((s) => group.names.includes(s.name)).slice().sort((a, b) => {
              const weight = (item) => {
                if (item.exp && String(item.exp).toLowerCase().includes('coursework')) return 0.4;
                if (!item.since) return 0;
                const nowY = new Date().getFullYear();
                const y = typeof item.since === 'string' ? parseInt(item.since.slice(0,4), 10) : item.since;
                return Math.max(0, nowY - y);
              };
              return weight(b) - weight(a);
            });
            return (
              <div key={group.label} className="skills-group">
                <h3 className="skills-group-title">{group.label}</h3>
                <div className="skills">
                  {items.map((s) => {
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
