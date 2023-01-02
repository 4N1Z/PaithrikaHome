import React from "react";
import "./App.css";
import "./index.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import styles from "./style.js";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Season from "./components/Season/Season";

function App() {
  return (
    <div className="App">
      {/* <div className="bg-primary w-full overflow-hidden"></div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          
      <Navbar />
        </div>
      </div> */}
      
      <Navbar />
      <Season/>
      <Home />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
