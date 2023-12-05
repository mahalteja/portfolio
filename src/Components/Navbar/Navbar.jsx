import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <h1>Portfolio</h1>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={-200} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="" spy={true} smooth={true} offset={50} duration={500}>
            Experince
          </Link>
        </li>
        <li>
          <Link to="" spy={true} smooth={true} offset={50} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="" spy={true} smooth={true} offset={50} duration={500}>
            Education
          </Link>
        </li>
        <button
          onClick={() =>
            (window.location.href = "https://github.com/mahalteja")
          }
        >
          Github Profile
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
