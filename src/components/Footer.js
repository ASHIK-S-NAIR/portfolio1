import React,{useState} from "react";
import Mail from "../images/Mail.png";
import LinkedIn from "../images/LinkedIn.png";
import GitHub from "../images/GitHub.png";
import Dribbble from "../images/Dribbble.png";
import Arrow from "../images/Arrow 1.svg";

function Footer() {

  const [activate, setactivate] = useState(false);

  const CopyToClipboard = () => {
    let elementText = "aashiq5342@gmail.com";
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);

    setactivate(true)
    setTimeout(() => {
      setactivate(false);
    },5000);

  };

  return (
    <section className="footer-section" id="footer">
      <div className="wrap footer-wrap">
        <div className="footer-container">
          <h3 className="footer-container-subheading">
            Did you find your right guy?
          </h3>
          <h1 className="footer-container-heading">
            SHALL WE WORK <br /> <span>TOGETHER?</span>
          </h1>
          <div className="footer-cta-section">
            <button className="footer-container-LT-btn cta-interative cta-LT">
              <p>LET'S TALK</p>
              <img src={Arrow} alt="" />
            </button>
            <button
        
              className={`footer-container-email-btn cta-EMAIL ${activate ? "activate" : " "}`}
              onClick={CopyToClipboard}
            >
              aashiq5342@gmail.com
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrap footer-bottom-wrap">
            <div className="footer-bottom-social-icons">
              <a href="/" className="footer-bottom-icon" content="Email">
                <img src={Mail} alt="" className="footer-bottom-icon-img" />
              </a>
              <a href="/" className="footer-bottom-icon" content="LinkedIn">
                <img
                  src={LinkedIn}
                  alt=""
                  className="footer-bottom-icoan-img"
                />
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
      </div>
    </section>
  );
}

export default Footer;
