export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Let’s Work Together</h2>
      <p>Open to frontend, backend, and full-stack web development opportunities.</p>

      <div className="footer-links">
        <a href="mailto:ominifrank@gmail.com">Email</a>
        <a href="https://github.com/Ubifranklin" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/frank-omini-home-profile" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Frank Omini. All rights reserved.
      </p>
    </footer>
  );
}
