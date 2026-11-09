const certifications = [
  {
    name: "Add certification name",
    issuer: "Add issuer",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>

      <ul className="cert-list">
        {certifications.map((cert) => (
          <li key={cert.name}>
            <strong>{cert.name}</strong> — {cert.issuer}
            <a href={cert.link} target="_blank" rel="noreferrer">
              View credential
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
