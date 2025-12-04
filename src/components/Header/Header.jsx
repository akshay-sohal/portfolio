import { useState } from "react";
import "./Header.css";
import closeIcon from "../../assets/images/close-icn.svg";
import menuIcon from "../../assets/images/menu-icon.svg";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const closeMenu = () => setMenuActive(false);

  return (
    <header className="header">
      <div className="site-container">
        <div className="header-bar">
          <a href="#" className="header-logo">
            <h3 className="site-title-h3">Karan Patel</h3>
          </a>

          <nav className={`nav-bar ${menuActive ? "active" : ""}`}>
            <img
              src={closeIcon}
              className="cross-icn"
              alt="close icon"
              onClick={closeMenu}
            />

            <ul className="menu">
              <li><a href="#" className="text-black" onClick={closeMenu}>Home</a></li>
              <li><a href="#about-sec" className="text-black" onClick={closeMenu}>About Me</a></li>
              <li><a href="#skill-sec" className="text-black" onClick={closeMenu}>Skills</a></li>
              <li><a href="#journey-sec" className="text-white" onClick={closeMenu}>Journey</a></li>
              <li><a href="#project-sec" className="text-white" onClick={closeMenu}>Projects</a></li>
              <li><a href="#testimonial-sec" className="text-white" onClick={closeMenu}>Testimonials</a></li>
            </ul>

            <a href="#contact-sec" className="cta-btn" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <img
            src={menuIcon}
            className="menu-icn"
            alt="menu icon"
            onClick={() => setMenuActive(true)}
          />
        </div>
      </div>
    </header>
  );
}
