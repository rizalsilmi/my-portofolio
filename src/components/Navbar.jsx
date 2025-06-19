import React from "react";
import './Navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        {/* <div className="logo">My Portofolio</div> */}
        <ul className="nav-links">
            <li><a href="#about">Home</a></li>
            <li><a href="#about">Services</a></li>
            <li><a href="#projects">Experiences</a></li>
            <li><a href="#contact">Skills</a></li>
            <li><a href="#contact">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>  
    );
}

export default Navbar;