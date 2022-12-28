import React from "react";
import "./Home.css";
import { homePic } from "../../assets/images/export_file";

function Home() {
  return (
    <div className="Home">
      <div className="mainContainer">

        <div className="leftBox">

          <div className="heading">
            <div className="titles">
                <span className="title1">Building your</span>
                <br />
                <span className="title2">Dream Home</span>
                <br />
                <span className="title3">has never been easier</span>
            </div>
            <p className="subTitles">
              We offer end-to-end services with our expert team of architects,
              designers, and engineers that can help you with every step of the
              process.
            </p>
          </div>

          <div className="counterContainer">
            <div className="counter">
              <h1 className="countNumber">24+</h1>
              <h5 className="countTitle"> Works <br />Completed</h5>
            </div>
            <div className="counter">
              <h1 className="countNumber">24+</h1>
              <h5 className="countTitle"> Works <br />Completed</h5>
            </div>
            <div className="counter">
              <h1 className="countNumber">24+</h1>
              <h5 className="countTitle"> Works <br />Completed</h5>
            </div>
          </div>

        </div>

        <div className="rightBox">
          <div className="Gallery">
            <img className = "homePic" src={homePic} alt="home pic" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
