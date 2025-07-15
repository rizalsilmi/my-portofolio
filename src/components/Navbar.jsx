import React from "react";
import './Navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        {/* <div className="logo">My Portofolio</div> */}
        <ul className="nav-links">
            <li><a href="#about">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#experience">Experiences</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>  
    );
}

export default Navbar;