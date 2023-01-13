import React from "react";
import "./About.css";
import "../../App.css";
import { about, PaithrikaBG } from "../../assets/images/export_file";
import { aboutDetails } from "../../constants/index";

function About() {
  return (
    <section className="about" id="about">
      <div className="posts">
        <div className="main_image_bg">
          {/* <img src={PaithrikaBG} alt="" className="bg" /> */}
        </div>
        <h1 className="headingMain">About Us</h1>

        <div className="post-container">
          <img className="image_main" src={about} alt="" />
          <div className="image-and-content">
            <div className="headline-of-post">
              <div className="turn_idea_box">
                <h1 className="idea_heading">We turn ideas into work of art</h1>
                <p className="list_subHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus.
                </p>
              </div>
            </div>

            <div className="list_of_items">
              <h1 className="list_heading">What We do </h1>

              {aboutDetails.map((take) => (
                <div className="list_items">
                  <img src={take.logo} alt="" />
                  <p className="itemName"> {take.id} </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="contactbtn">
          <a href="https://linktr.ee/anizbn">Contact</a>
        </button>
      </div>
    </section>
  );
}

export default About;
