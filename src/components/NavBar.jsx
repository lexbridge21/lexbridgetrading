import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import "../CSS/COMPONENTS_CSS/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-img">
            <img
              src={scrolling ? "/lex-logo.png" : "/lex-logo1.png"}
              alt="Logo"
            />
          </div>
          <div id="google_translate_element"></div>
        </div>

        {/* Static Links (Only Visible on Large Screens) */}
        <ul className="nav-static-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/faq">Help</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon (Always Visible on Small Screens) */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <BiMenuAltRight />
        </div>

        {/* Side Drawer (Slides in from Right) */}
        <div className={`side-drawer ${menuOpen ? "open" : ""}`}>
          {/* Close Icon */}
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            <RxCross2 />
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/faq">Faq</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
