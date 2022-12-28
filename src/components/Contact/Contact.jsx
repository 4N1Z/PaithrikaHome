import React from 'react'

function Contact() {
  return (
    <section>
        <div className="contactContainer">
            <h1 className="title">Contact Us</h1>
            <div className="contactAddress"></div>
            <div className="contactForm">
                <div className="name">
                    <input type="text" required />
                    <label>Name</label>
                </div>
                <div className="email">
                    <input type="email" required />
                    <label >Email</label>
                </div>
                <div className="phoneNum">
                    <input type="number" required/>
                    <label>Phone Number</label>
                </div>
                <div className="message">
                    <textarea required></textarea>
					<label>Message</label>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact