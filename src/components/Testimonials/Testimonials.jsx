import React from "react";
import "./Testimonials.css";
import "../../App.css";
import { sampleTestimonials } from "../../constants/index.js";
import { quotes, quotes2 } from "../../assets/images/export_file";

function Testimonials() {
  return (
    <section id="testimonialsSection">
      <div className="enableScroll">
        <h1 class="titleTestimonial">Testimonials</h1>
        <div class="testimonials">
          {sampleTestimonials.map((test) => (
            <div class="testimonial">
              <div className="quoteDetail">
                <img className="quoteImage" src={quotes} alt="" />
                <p className="testimonial-detail"> {test.detail} </p>
              </div>
              <div class="testimonial-author">
                <p> {test.id} </p>
                <span className="authorDetails">{test.designation} <br/> {test.post}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}


export default Testimonials;
