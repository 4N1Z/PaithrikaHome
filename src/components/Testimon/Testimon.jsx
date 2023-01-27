import React from "react";
import "./Testimon.css";
import { sampleTestimonials } from "../../constants/index.js";
import { quotes, quotes2 } from "../../assets/images/export_file";

function Testimon() {
  return (
    
    <div className="testimonial-container">
      <h1 className="titleTestimon">Testimonials</h1>

      <div className="content-container">
        <ul class="hs full no-scrollbar">

          {sampleTestimonials.map((item) => (
            <div className="testimonial-bar">
              <li className="item">
                <div className="quotes-Testimonial">
                  <img className="quoteImage" src={quotes} alt="" />

                  <p className="review">{item.detail}</p>
                </div>
                  <br />
                <p className="user">
                {item.id}
                  <span className="user-name"><br />
                  {item.designation} <br />
                  {item.post}
                  </span> 
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Testimon;
