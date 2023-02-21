import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "../../App.css";
import {
    youtube,
    linkedin,
    instagram,
    facebook,
    logoName
} from "../../assets/images/export_file";

function Footer() {
    return (
        <footer >
            <div className="footerContainer">
              <div className="footerGroups footerLocation">
                  <h3  className="footerSubTitle">Location</h3>
                  <ul>
                      <li>Lorem ipsum dolor sit amet consectetur adipis
                                      ecto veritatis magni laboriosam sunt eligendi r
                                      eprehenderit dolor pariatur aspernatur
                      </li>
                      <li>
                          +91 949777 8170
                      </li>
                      <li>
                          mail@paithrika.com
                      </li>
                  </ul>
              </div>
              <div className="projectFooter footerGroups">
                  <h3 className="footerSubTitle" >Our Projects</h3>
                  <ul>
                      <li><Link to='/oncoming' >Ongoing</Link></li>
                      <li><Link to='/upcoming' >Upcoming</Link></li>
                      <li><Link to='/finished' >Finished</Link></li>
                  </ul>
              </div>
              <div className="projectFooter footerGroups">
                  <h3 className="footerSubTitle">Corporate</h3>
                  <ul>
                    <li><Link to ='/About'>About Us</Link></li>
                    <li>Mission & Vision</li>
                    <li>Leadership</li>
                    <li>News & Events</li>
                  </ul>
              </div>
              <div className="projectFooter footerSocialLogo footerGroups ">
               <a className="footerSocialLink" href="https://instagram.com/paithrika_homes?igshid=NTdlMDg3MTY=">
                 <img src={instagram} alt="" />
               </a>
               <a className="footerSocialLink" href="https://www.instagram.com/">
                 <img src={youtube} alt="" />
               </a>
               <a className="footerSocialLink" href="https://www.instagram.com/">
                 <img src={linkedin} alt="" />
               </a>
               <a className="footerSocialLink" href="https://www.facebook.com/Paithrika?mibextid=ZbWKwL">
                 <img src={facebook} alt="" />
               </a>
             </div>
            </div>
             <div className="footerBanner">
              <span>COPYRIGHT @GDSC-SCTCE</span>
              <span>WEBSITE BY ASWIN LAL</span>
             </div>
        </footer>
    // <section className="footerbg" id="Footer">
    // <div className="footerContainer">
    //     <div className="contentsAll">
    //       <h4 className="aboveHead">quam in hendrerit urna</h4>
    //       <h1 className="FooterTitle">Request More Information</h1>
    //       <p className="footerSub">
    //         mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
    //         l
    //       </p>
    //       <a href="https://linktr.ee/anizbn">
    //         <button className="contactBtnFooter">Mail Us </button>
    //       </a>
    //       <p className="copyright">© 2022 GDSC SCTCE, LLC</p>

    //       <hr />

    //       <div className="socialsBottm">
    //         <img src={logoName} alt="logo" className="footerLogo"/>
    //         <div className="linksFooter">
    //           <a className="footerNameLink" href="https://linktr.ee/anizbn">
    //             Team
    //           </a>
    //           <a className="footerNameLink" href="https://linktr.ee/anizbn">
    //             Case Studies
    //           </a>
    //           <a className="footerNameLink" href="https://linktr.ee/anizbn">
    //             Publications
    //           </a>
    //         </div>
    //         <div className="socialLogo">
    //           <a className="footerSocialLink" href="https://instagram.com/paithrika_homes?igshid=NTdlMDg3MTY=">
    //             <img src={instagram} alt="" />
    //           </a>
    //           <a className="footerSocialLink" href="https://www.instagram.com/">
    //             <img src={youtube} alt="" />
    //           </a>
    //           <a className="footerSocialLink" href="https://www.instagram.com/">
    //             <img src={linkedin} alt="" />
    //           </a>
    //           <a className="footerSocialLink" href="https://www.facebook.com/Paithrika?mibextid=ZbWKwL">
    //             <img src={facebook} alt="" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    // </div>
    // </section>
    );
}

export default Footer;
