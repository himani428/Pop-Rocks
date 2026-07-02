import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "../styles/navbar.css";

const NAV_LINKS = [
  { label: "About", hash: "about" },
  { label: "Classes", hash: "classes" },
  { label: "Trainers", hash: "trainers" },
  { label: "Services", hash: "services" },
  { label: "Pricing", hash: "pricing" },
  { label: "Contact", hash: "contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (hash) => (e) => {
    setOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            {user ? (
              <>
                <Link to="/dashboard" className="topbar-link">Hi, {user.name.split(" ")[0]}</Link>
                <span className="topbar-sep">·</span>
                <button className="topbar-link topbar-btn" onClick={handleLogout}>Log out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="topbar-link">Log in</Link>
                <span className="topbar-sep">·</span>
                <Link to="/register" className="topbar-link">Sign up</Link>
              </>
            )}
          </div>
          <div className="topbar-right">
            <a href="https://www.instagram.com/poprocks_dance_academy/" target="_blank" rel="noreferrer" className="topbar-link">
              @poprocks_dance_academy
            </a>
          </div>
        </div>
      </div>

      <nav className="mainnav">
        <div className="container mainnav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">PR</span>
            <span className="brand-name">Pop Rocks<br /><em>Dance Academy</em></span>
          </Link>

          <div className={`nav-links ${open ? "is-open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a key={link.hash} href={`/#${link.hash}`} className="nav-link" onClick={goToSection(link.hash)}>
                {link.label}
              </a>
            ))}
            <div className="nav-links-mobile-auth">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
                  <button className="topbar-btn" onClick={handleLogout}>Log out</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)}>Log in</Link>
                  <Link to="/register" onClick={() => setOpen(false)}>Sign up</Link>
                </>
              )}
            </div>
          </div>

          <a href="/#classes" className="btn btn-primary nav-cta" onClick={goToSection("classes")}>
            Book a Class
          </a>

          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
