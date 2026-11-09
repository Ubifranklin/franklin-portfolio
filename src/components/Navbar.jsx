export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">Franklin<span>.</span></a>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact" className="cta">Contact</a>
      </nav>
    </header>
  );
}
