import React from 'react'
import "./Testimon.css"
import { sampleTestimonials } from "../../constants/index.js";
import { quotes, quotes2 } from "../../assets/images/export_file";

function Testimon() {
  return (
    <div className='testimonial-container'>
      <div className='headingMain' style={{ color:'#CC281E'}}>Testimonials</div>
      <ul class="hs full no-scrollbar">
       {sampleTestimonials.map((item)=>(
        <li className="item">
          <p className="review">
            {item.detail}
          </p>
          <p className="user">
            <span className='user-name'>{item.id}</span> <br />
            {item.designation} <br />
            {item.post}
          </p>
        </li>
       ))}
      </ul>
    </div>
  )
}

export default Testimon