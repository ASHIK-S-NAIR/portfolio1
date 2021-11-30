import React from "react";
import Arrow from "../images/Arrow 1.svg";
import { Link } from "react-router-dom";

function Thankyou() {
  return (
    <section className="thankyou-section">
      <div className="wrap thankyou-wrap">
        <h1 className="thankyou-heading">
          THANK <span>YOU !</span>
        </h1>
        <h3 className="thankyou-subheading">
          I will be reaching out to you shortly to continue our conversation
        </h3>
        <Link to="/" className="thankyou-link">
          <button
            className="cta-interative cta-BTHP thankyou-btn "
            type="submit"
          >
            <p>BACK TO HOME PAGE</p>
            <img src={Arrow} alt="" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Thankyou;
