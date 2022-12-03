import React from "react";
import "./Navbar.css";

function Navbar() {
  return (

    <div className="Navbar">
      <img
        className="logo"
        src="../../assets/images/logo.svg"
        alt="PAIThrika"
      />

{/* Used clasName = "active" for routing pages */}

      <ul>
        <li className="active">
            <a className = "noUseClass" href="Home">Home</a>
        </li>
        <li>
            <a href="About">About</a>
        </li>
        <li>
            <a href="Projects">Projects</a>
        </li>
        <li>
            <a href="Gallery">Gallery</a>
        </li>
        <li>
            <a href="Contact">Contact</a>
        </li>
      </ul>

    </div>
  );
}

export default Navbar;
