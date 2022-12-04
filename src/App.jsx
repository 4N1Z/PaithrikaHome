import React from "react";
import "./App.css";
import "./index.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import styles from "./style.js";

function App() {
  return (
    <div className="App">
      <div className="bg-primary w-full overflow-hidden"></div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          About us 
          our works 
          Project 
          Gallery
          testimonial 
          clinet 
          Footer
        </div>
      </div>

      {/* <Navbar/> */}
      {/* <Home   /> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
