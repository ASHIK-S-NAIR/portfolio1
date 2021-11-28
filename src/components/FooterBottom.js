import React from "react";
import Mail from "../images/Mail.png";
import LinkedIn from "../images/LinkedIn.png";
import GitHub from "../images/GitHub.png";
import Dribbble from "../images/Dribbble.png";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="wrap footer-bottom-wrap">
        <div className="footer-bottom-social-icons">
          <a href="/" className="footer-bottom-icon" content="Email">
            <img src={Mail} alt="" className="footer-bottom-icon-img" />
          </a>
          <a href="/" className="footer-bottom-icon" content="LinkedIn">
            <img src={LinkedIn} alt="" className="footer-bottom-icon-img" />
          </a>
          <a href="/" className="footer-bottom-icon" content="GitHub">
            <img src={GitHub} alt="" className="footer-bottom-icon-img" />
          </a>
          <a href="/" className="footer-bottom-icon" content="Dribbble">
            <img src={Dribbble} alt="" className="footer-bottom-icon-img" />
          </a>
        </div>
        <div className="footer-bottom-line"></div>
        <h3 className="footer-bottom-h3">
          Designed and Developed by myself © 2021
        </h3>
      </div>
    </div>
  );
}
