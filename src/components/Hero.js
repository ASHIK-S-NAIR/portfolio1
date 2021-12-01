import React, { useRef, useEffect } from "react";
import Ashik from "../images/ashik.jpg";
import Verified from "../images/Verified Freelancer.png";
import Arrow from "../images/Arrow 1.svg";

function Hero() {
  const VerifiedImg = useRef(null);

  function scrollRotate() {
    VerifiedImg.current.style.transform =
      "rotate(" + window.pageYOffset / 6 + "deg)";
  }

  useEffect(() => {
    window.onscroll = () => {
      scrollRotate();
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="wrap hero-wrap">
        <div className="hero-info-section">
          <h3 className="hero-info-subheading">
            HELLO THERE, MY NAME IS <span>ASHIK</span>
          </h3>
          <h1 className="hero-info-heading">
            I’am a freelance web developer <span> innovating professional</span>{" "}
            websites that convert visitors into <span>valuable customers</span>{" "}
          </h1>
          <a href="/#projects-id" className="hero-info-a">
            <button className="hero-info-btn cta-interative cta-SMPP">
              <p>SEE MY PAST PROJECTS</p>
              <img src={Arrow} alt="" />
            </button>
          </a>
        </div>
        <div className="hero-img-section">
          <img src={Ashik} alt="" className="hero-img" />
          <img
            src={Verified}
            alt=""
            ref={VerifiedImg}
            className="hero-img-section-verified"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
