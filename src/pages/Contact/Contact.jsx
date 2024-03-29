import React from "react";
import "./Contact.css";
import "../../App.css";



function Contact() {
  return (
    <>
  
    <section id="contact">
      <div className="ContactImageContainer">
        <div className="blackOverlayContact">
          <h1 className="contactOverlayTitle commonTitle">Contact</h1>
          
        </div>
      </div>
      <div className="contactContainer">
        <div className="textBox">
          <h1 className="commonTitle titles_contact">Let's Talk</h1>
          <h4 className="subtitle_contact">Say '  hi' for enquiry</h4>
        </div>

        <div className="contactForms">
          <form className="contactForm">
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
              <textarea className="messagebar" required></textarea>
            </div>
          </form>
          <a href="https://linktr.ee/anizbn">
            <button className="submitBtn">Send Message</button>
          </a>
        </div>
      </div>
    </section>

    </>
  );
}

export default Contact;
