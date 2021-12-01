import React, { useState } from "react";
import { tips } from "../data/tipData";
import Arrow from "../images/Arrow 1.svg";

function TIPS() {
  const [tipIndex, settipIndex] = useState(null);
  const generateTip = () => {
    var x = Math.floor(Math.random() * (6 - 0 + 0) + 0);

    if (x === tipIndex) {
      generateTip();
    } else {
      return console.log(x), settipIndex(x);
    }
  };

  return (
    <section className="tips-section">
      <div className="wrap tips-wrap">
        <div className="tips-left">
          <h3 className="tips-subheading">Thanks for visiting my Portfolio!</h3>
          <h1 className="tips-heading">
            I WOULD LIKE TO GIFT <br /> YOU SOME <span>TIPS!</span>
          </h1>
          <button className="cta-interative cta-GYFT" onClick={generateTip}>
            <p>GENERATE YOUR FREE TIP</p>
            <img src={Arrow} alt="" />
          </button>
        </div>
        <div className="tips-right">
          <div
            className={
              tipIndex !== null
                ? "tips-quotes-symbol show"
                : "tips-quotes-symbol"
            }
          >
            <span>&ldquo;</span>
            <br /> <p>{tips[tipIndex]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TIPS;
