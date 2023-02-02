import React, { useState } from "react";
import "./App.css";
import "./index.css";
import "animate.css";

import { upArrow, close, chatBot } from "./assets/images/export_file";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Season from "./components/Season/Season";
import Gallery from "./components/Gallery/Gallery";
import OneStop from "./components/OneStop/OneStop";
import Testimon from "./components/Testimon/Testimon";
import Upcoming from "./pages/Upcoming/Upcoming";
import Ongoing from "./pages/Ongoing/Ongoing";
import Completed from "./pages/Completed/Completed";
import Slider from "./components/Slider/Slider";
import ScrollToTop from "./components/Scrolltotop/ScrollToTop";




// import TestNav from "./components/Test_Nav/TestNav";
// const pure = new PureCounter();
import { Routes, Route } from "react-router-dom";

// import TestNav from "./components/Test_Nav/TestNav";
// const pure = new PureCounter();

function App() {
  const [modalVisible, setModalVisible] = useState(false);
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
        window.scroll({
          top: 0,
          behavior: "smooth",
          animation: "fadeIn",
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
      <ScrollToTop/>
      <Navbar />
      {/* <Season /> */}
      {/* <Home />
      <About />
      <OneStop />
      <Projects />
      <Gallery />
      <Testimon />

      {/* <Testimonials /> */}
      <Routes>
        <Route
          path="/"
          element={[
            <Home />,
            <About />,
            <OneStop />,
            <Projects />,
            // <Gallery />,
            <Slider/>,
            <Testimon />,
            <Contact />,
          ]}
        />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/ongoing" element={<Ongoing />} />
        <Route path="/finished" element={<Completed />} />
      </Routes>

      <Footer />
      

      {/* <Upcoming/> */}

      {/*        Bottom -top Arrow         */}
      {/* This is working hopefullly */}
      <a href="#" class="scroll-top d-flex justify-content-center">
        <img src={upArrow} alt="" />
      </a>

      {/* w-[28px] h-[28px] object-contain cursor-pointer z-30 */}

      <div className="chatbotContainer">
        <a className="add-btn" href="#" onClick={() => setModalVisible(true)}>
          <img src={chatBot} alt="chatbot" />
        </a>
        <div className={modalVisible ? "modal" : "modal-not-visible"}>
          <a
            href="#"
            className="close-btn"
            onClick={() => setModalVisible(!modalVisible)}
          >
            <img src={close} alt="close" />
          </a>
          <iframe
            className="chatbot"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/cba0f120-12a3-4bd2-800d-870dd77ccb6c"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
