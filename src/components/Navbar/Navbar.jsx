import React from "react";
import "./Navbar.css";
import { logo, menu, close } from "../../assets/images/export_file";
import { navLinks } from "../../constants/index.js";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-5 justify-between items-center navbar">

      <div className="sn:flex justify-end items-center flex-1">
      <img src={logo} alt="paithrika Home" className="w-[124px] h-[32px] "  />
      <ul className="list-none sn:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold uppercase cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8" } text-black`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

      </ul>
      </div>

      {/* for mobile view */}
      <div className="sn:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="hamburger"
          className="w-[28px] h-[28px] object-contain cursor-pointer z-10"
          onClick={() => setToggle((prev) => !prev)}/>

        <div style={{backgroundImage : `${logo}` }}
          className={`${toggle ? "flex" : "hidden"} 
          p-6 bg-gradient-to-r from-redGrad1 to-redGrad2 absolute top-0 right-0 mx-0 my-0 w-full h-full`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium uppercase cursor-pointer text-[28px]
                ${index === navLinks.length - 1 ? "mb-0" : "mb-10 mt-0"} text-white`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
