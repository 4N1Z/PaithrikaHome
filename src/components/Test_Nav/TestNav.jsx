import React from "react";
import "./TestNav.css";
import { navLinks } from "../../constants/index.js";
import { logo } from "../../assets/images/export_file";

function TestNav() {
  document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;

      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeader.classList.add("sticked");
          if (nextElement) nextElement.classList.add("sticked-header-offset");
        } else {
          selectHeader.classList.remove("sticked");
          if (nextElement)
            nextElement.classList.remove("sticked-header-offset");
        }
      };
      window.addEventListener("load", headerFixed);
      document.addEventListener("scroll", headerFixed);
    }
  });

  return (
    <div>
      <header id="header" class="header d-flex align-items-center">
        <div class="container-menu container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="home.html" class="logo d-flex align-items-center">
            <img src={logo} alt="" />
          </a>
          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#playlists">Playlists</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              {/* <!-- <img class="mobile-navbar-logo" src="assets/img/nav-bg.webp" alt=""> --> */}
              {/* <span><a class="credit-link" href="https://syronyx.com" target="_blank"><img src="assets/img/credit-logo.webp" alt=""/></a></span> */}
            </ul>
          </nav>
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </div>
  );
}

export default TestNav;
