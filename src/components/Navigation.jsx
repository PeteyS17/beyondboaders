import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/navigation.css";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-bar">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          Beyond Borders
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/destinations" onClick={() => setOpen(false)}>
            Destinations
          </NavLink>
          <NavLink to="/activities" onClick={() => setOpen(false)}>
            Activities
          </NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
