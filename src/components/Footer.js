import React from "react";
import Mail from "../images/Mail.png";
import LinkedIn from "../images/LinkedIn.png";
import GitHub from "../images/GitHub.png";
import Dribbble from "../images/Dribbble.png";

function Footer() {
  return (
    <section className="footer-section">
      <div className="wrap footer-wrap">
        <div className="footer-container">
          <h3 className="footer-container-subheading">
            Did you find your right guy?
          </h3>
          <h1 className="footer-container-heading">
            SHALL WE WORK <br /> <span>TOGETHER?</span>
          </h1>
          <div className="footer-cta-section">
            <button className="footer-container-LT-btn cta-LT">
              LET'S TALK
            </button>
            <button className="footer-container-email-btn cta-EMAIL">
              aashiq5342@gmail.com
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrap footer-bottom-wrap">
            <div className="footer-bottom-social-icons">
              <a href="#" className="footer-bottom-icon">
                <img src={Mail} alt="" className="footer-bottom-icon-img" />
              </a>
              <a href="#" className="footer-bottom-icon">
                <img src={LinkedIn} alt="" className="footer-bottom-icon-img" />
              </a>
              <a href="#" className="footer-bottom-icon">
                <img src={GitHub} alt="" className="footer-bottom-icon-img" />
              </a>
              <a href="#" className="footer-bottom-icon">
                <img src={Dribbble} alt="" className="footer-bottom-icon-img" />
              </a>
            </div>
            <div className="footer-bottom-line"></div>
            <h3 className="footer-bottom-h3">
              Designed and Developed by myself © 2021
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
