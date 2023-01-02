import React from "react";
import "./Navbar.css";
import { logo, menu, close, logoWhite } from "../../assets/images/export_file";
import { navLinks } from "../../constants/index.js";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
// Header not fixed

  // const selectHeader = document.querySelector('#nav');
  // if (selectHeader) {
  //   let headerOffset = selectHeader.offsetTop;
  //   let nextElement = selectHeader.nextElementSibling;

  //   const headerFixed = () => {
  //     if ((headerOffset - window.scrollY) <= 0) {
  //       selectHeader.classList.add('sticked');
  //       if (nextElement) nextElement.classList.add('sticked-header-offset');
  //     } else {
  //       selectHeader.classList.remove('sticked');
  //       if (nextElement) nextElement.classList.remove('sticked-header-offset');
  //     }
  //   }
  //   window.addEventListener('load', headerFixed);
  //   document.addEventListener('scroll', headerFixed);
  // }

  return (
    <nav id = "nav" className="w-full flex py-5 justify-between items-center navbar">
      <div className="sn:flex justify-end items-center flex-1">
        <img src={logo} alt="paithrika Home" className="w-[124px] h-[32px] " />
        <ul className="list-none sn:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium uppercase cursor-pointer text-[18px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-8"
              } text-black`}
            >
              <a className ="navTitle" href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}
        </ul>
      </div>


      {/* for mobile view */}

      {/* <img src={logoWhite} alt="" className="w-[124px] h-[32px] "/> */}
      <div className="sn:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="hamburger"
          className="w-[28px] h-[28px] object-contain cursor-pointer z-30"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* for gradient : bg-gradient-to-r from-redGrad1 to-redGrad2 */}
        {/* <div className="bgImageTran"></div> */}

        <div
          className={`${toggle ? "flex" : "hidden"} 
          p-6 bg-teritery absolute top-0 right-0 mx-0 my-0 w-full h-full`}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium uppercase cursor-pointer text-[24px]
                ${index === navLinks.length - 1 ? "mb-40" : "mb-6"} text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </nav>

  );
}

export default Navbar;
