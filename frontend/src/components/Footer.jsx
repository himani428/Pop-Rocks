import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <span className="brand-mark">PR</span>
          <div>
            <h3>Pop Rocks Dance Academy</h3>
            <p>Train hip hop. Perform anywhere.</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <a href="/#about">About</a>
          <a href="/#classes">Classes</a>
          <a href="/#trainers">Trainers</a>
          <a href="/#services">Services</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#gallery">Gallery</a>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <a href="/#contact">Contact & bookings</a>
          <a href="https://www.instagram.com/poprocks_dance_academy/" target="_blank" rel="noreferrer">
            Instagram — @poprocks_dance_academy
          </a>
          <a href="mailto:muskanwadhwani1324@gmail.com">muskanwadhwani1324@gmail.com</a>
          <a href="tel:+918432341664">+91 84323 41664</a>
        </div>

        <div className="footer-col">
          <h4>Account</h4>
          <a href="/register">Create an account</a>
          <a href="/login">Log in</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Pop Rocks Dance Academy. All rights reserved.</p>
        <p>Made with rhythm, sweat and a little bit of glitter.</p>
      </div>
    </footer>
  );
}