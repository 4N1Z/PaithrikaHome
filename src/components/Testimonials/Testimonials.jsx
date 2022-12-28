import React from "react";
import "./Testimonials.css";
import "../../App.css";
import { sampleTestimonials } from "../../constants/index.js";
import { quotes,quotes2 } from "../../assets/images/export_file";

function Testimonials() {
  return (
    <div className="enableScroll">
      <h1 class="title">Testimonials</h1>
      <div class="testimonials">
        {sampleTestimonials.map((test) => (
          <div class="testimonial">
            <div className="quoteDetail">
                <img className="quoteImage" src={quotes} alt="" />
                <p className="testimonial-detail">{test.detail}</p>
            </div>
            <p class="testimonial-author">{test.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
