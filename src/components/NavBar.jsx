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

  // Function to close menu on link click (for mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <div className="logo-img">
              <img
                src={scrolling ? "/lex-logo.png" : "/lex-logo1.png"}
                alt="Logo"
              />
            </div>
          </Link>
          <div id="google_translate_element"></div>
        </div>

        {/* Static Links (Visible on large screens) */}
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

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <BiMenuAltRight />
        </div>

        {/* Side Drawer */}
        <div className={`side-drawer ${menuOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            <RxCross2 />
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={handleLinkClick}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={handleLinkClick}>
                Signup
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={handleLinkClick}>
                Faq
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
