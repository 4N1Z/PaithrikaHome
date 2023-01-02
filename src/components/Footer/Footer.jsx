import React from "react";
import "./Footer.css";
import "../../App.css";
import {
  youtube,
  linkedin,
  instagram,
  facebook,
  logoName,
} from "../../assets/images/export_file";

function Footer() {
  return (
    <section className="footerbg">
      <div className="footerContainer">
        <div className="contentsAll">
          <h4 className="aboveHead">quam in hendrerit urna</h4>
          <h1 className="FooterTitles">Request More Information</h1>
          <p className="footerSub">
            mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
            l
          </p>
          <a href="https://linktr.ee/anizbn">
            <button className="contactBtnFooter">Contact </button>
          </a>
          <p className="copyright">© 2022 GDSC SCTCE, LLC</p>

          <hr />

          <div className="socialsBottm">
            <img src={logoName} alt="logo" />
            <div className="linksFooter">
              <a className="footerNameLink" href="https://linktr.ee/anizbn">
                Team
              </a>
              <a className="footerNameLink" href="https://linktr.ee/anizbn">
                Case Studies
              </a>
              <a className="footerNameLink" href="https://linktr.ee/anizbn">
                Publications
              </a>
            </div>
            <div className="socialLogo">
              <a className="footerSocialLink" href="https://www.instagram.com/">
                <img src={instagram} alt="" />
              </a>
              <a className="footerSocialLink" href="https://www.instagram.com/">
                <img src={youtube} alt="" />
              </a>
              <a className="footerSocialLink" href="https://www.instagram.com/">
                <img src={linkedin} alt="" />
              </a>
              <a className="footerSocialLink" href="https://www.instagram.com/">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
