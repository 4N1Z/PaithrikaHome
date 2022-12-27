import React from "react";
import "./Testimonials.css";
import "../../App.css";
import { sampleTestimonials } from "../../constants/index.js";

function Testimonials() {
  return (
    <div className="enableScroll">
      <h1 class="title">Testimonials</h1>
      <div class="testimonials">
        {sampleTestimonials.map((test) => (
          <div class="testimonial">
            <p class="testimonial-detail">{test.detail}</p>
            <p class="testimonial-author">{test.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
