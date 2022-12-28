import React from "react";
import "./Contact.css";
import "../../App.css";

function Contact() {
  return (
    <section>
      <div className="contactContainer">

        <div className="textBox">
          <h1 className="titles_contact">Let's Talk</h1>
          <h4 className="subtitle_contact">Say 'hi' for enguiry</h4>
        </div>
     

        <div className="contactForms">
          <div className="contactForm">
        
            <div className="name">
              <label>Name</label>
              <input type="text" required />
            </div>
            <div className="grpEP">
              <div className="email">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="phoneNum">
                <label>Phone Number</label>
                <input type="number" required />
              </div>
            </div>
            <div className="message">
              <label>Message</label>
              <textarea required></textarea>
            </div>
          </div>
          <button className="submitBtn">Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
