const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Next.js",
  "Node.js", "Express.js", "MongoDB", "REST APIs",
  "Git", "GitHub", "Postman", "pnpm"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills-grid">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

