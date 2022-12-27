import React from "react";
import "./App.css";
import "./index.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import styles from "./style.js";
import Navbar2 from "./components/Navbar2/Navbar2";
import Projects from "./components/Projects/Projects";
import TestNav from "./components/Test_Nav/TestNav";
import About from "./components/About/About";
import Brands from "./components/Brands/Brands";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (

    <div className="App">
      <div className="bg-primary w-full overflow-hidden"></div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Navbar2/>
      <Home   />
      <About/>
      <Projects/>
      <Brands/>
      <Testimonials/>
      T
    </div>
  );
}

export default App;
