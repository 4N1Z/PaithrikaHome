import React from "react";
import "./MainContact.css";
import { Link } from "react-router-dom";


function MainContact() {
  return (
    <>
    
    <div className="MainContact_Container">
      <div className="blackOverlay">

        <div className="contactNameMain">
          <div className="contact">
            <h1 className="contact_text_title">Are you Looking for a Professional Builder in Kerala ? </h1>
            <h1 className="contact_test_title_1">Get the top Builders</h1>
          </div>
          
          <Link to = "/Contact">
            <button className="submitBtnContact">Contact Us</button>
          </Link>
        </div>

      </div>
    </div>

    {/* <Routes>
      <Route path = "/Contact" element = {<Contact/>}>
      </Route>
    </Routes> */}
    </>
  );
}

export default MainContact;
