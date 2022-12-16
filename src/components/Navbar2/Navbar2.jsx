import React from "react";
import "./Navbar2.css";
import { navLinks } from "../../constants/index.js";
import { logo, menu, close } from "../../assets/images/export_file";

function Navbar2() {
  return (
    <nav className="navWrapper">
      <div className="navContainer">
        <img src={logo} alt="Paithrika Homes" />

        <ul className="navList">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className="titleName">
              <a href={`#${nav.id}`}> {nav.title}</a>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar2;
