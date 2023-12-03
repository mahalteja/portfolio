import React, {useState} from "react";
import "./Navbar.css"
const Navbar = () => {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <nav className="navbar">
      <h1>Portfolio</h1>
      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
      }} >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul  className={menuOpen ? "open" : ""}>
        <li>About</li>
        <li>Skills</li>
        <li>Experince</li>
        <li>Projects</li>
        <li>Education</li>
        <button>Github Profile</button>
      </ul>
    </nav>
  );
};

export default Navbar;
