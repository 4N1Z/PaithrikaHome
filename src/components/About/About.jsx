import React from "react";
import "./About.css";
import { logo, about, logoBlack } from "../../assets/images/export_file";

function About() {
  return (
    <div className="posts">
      <h1 className="headingMain">About US</h1>

      <div className="post-container">
        <img src={about} alt="" />
        <div className="image-and-content">
          <div className="headline-of-post">
            <div className="turn_idea_box">
              <h1 className="idea_heading">We turn ideas into work of art</h1>
              <p className="list_subHeading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.{" "}
              </p>
            </div>
          </div>
          <div className="list_of_items">
            <h1 className="list_heading">WHAT WE DO</h1>
            <div className="list_items">
              <img src={logoBlack} alt="" />
              <p> BUILDING </p>
            </div>
            <div className="list_items">
              <img src={logoBlack} alt="" />
              <p> BUILDING </p>
            </div>
            <div className="list_items">
              <img src={logoBlack} alt="" />
              <p> BUILDING </p>
            </div>
            <div className="list_items">
              <img src={logoBlack} alt="" />
              <p> BUILDING </p>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default About;
