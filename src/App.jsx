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
function App() {
  return (

    <div className="App">
      <div className="bg-primary w-full overflow-hidden"></div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div> */}
      {/* <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          About us 
          our works 
          Project 
          Gallery
          testimonial 
          clinet 
          Footer
        </div>
      </div> */}

      
      {/* <TestNav/> */}
      <Navbar2/>
      <Home   />
      <Projects/>
      {/* <Home/> */}
      <About/>
    </div>
  );
}

export default App;
