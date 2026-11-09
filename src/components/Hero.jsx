export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="intro">Hello, I’m</p>
      <h1>Omini Frank</h1>
      <h2>Full-Stack Web Developer</h2>

      <p className="hero-text">
        I build responsive web applications using React, Next.js, Node.js,
        Express.js, and modern CSS.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">View Projects</a>
        <a
          href="https://github.com/Ubifranklin"
          className="btn outline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

