import React,{useState} from "react";
import { Link } from "react-router-dom";
import Arrow from "../images/Arrow 1.svg";
import FooterBottom from "./FooterBottom";

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
            Thinking about a Professional Website?
          </h3>
          <h1 className="footer-container-heading">
            LET'S WORK  <span>TOGETHER?</span>
          </h1>
          <div className="footer-cta-section">
            <Link to="/contact">
              <button className="footer-container-LT-btn cta-interative cta-LT">
                <p>LET'S TALK</p>
                <img src={Arrow} alt="" />
              </button>
            </Link>
            <button
        
              className={`footer-container-email-btn cta-EMAIL ${activate ? "activate" : " "}`}
              onClick={CopyToClipboard}
            >
              aashiq5342@gmail.com
            </button>
          </div>
        </div>
      </div>
      <FooterBottom />
    </section>
  );
}

export default Footer;
