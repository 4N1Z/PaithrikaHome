import React from "react";
import "./App.css";
import "./index.css";
import { upArrow } from "./assets/images/export_file";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import styles from "./style.js";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
// import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Season from "./components/Season/Season";
import Gallery from "./components/Gallery/Gallery";
import OneStop from "./components/OneStop/OneStop";
import Testimon from "./components/Testimon/Testimon";

// import TestNav from "./components/Test_Nav/TestNav";
// const pure = new PureCounter();


function App() {

  
  document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // preloader- NOT WORKING !
    
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

     /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 10,
        behavior: "smooth",
      })
    );
  }
  });

 

  return (
    <div className="App">

      {/* Preloader added not woring ! */}
      {/* <div id="preloader"></div> */}
    
      {/* <div className="bg-primary w-full overflow-hidden"></div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          
      <Navbar />
        </div>
      </div> */}

      <Navbar />
      {/* <Season /> */}
      <Home />
      <About />
      <OneStop />
      <Projects />
      <Gallery />
      <Testimon/>
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer /> */}

              {/*        Bottom -top Arrow         */}
      {/* This is working hopefullly */}
      <a href="#" class="scroll-top d-flex justify-content-center">
        <img src={upArrow} alt="" />
      </a>

    </div>
  );
}

export default App;
