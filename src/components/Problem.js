import React from "react";
import Checked from '../images/Checked.png';
import Arrow from '../images/Arrow 1.svg';

function Problem() {
  return (
    <section className="problem-section">
      <div className="wrap problem-wrap">
        <div className="problem-info-section">
          <h1 className="problem-info-heading">
            Being in a crowd is worth less than <span>standing out</span>from a crowd.
          </h1>
          <div className="problem-info-subsection">
            <h3 className="problem-info-quotes">
              Websites promote you 24/7, <br /> No employee will do that
            </h3>
            <p className="problem-info-author">- Paul Cookson</p>
          </div>
        </div>
        <div className="problem-details-section">
            <p className="problem-details-p">A website for yourself makes you stand out from others, but including a bit more ingredients makes it more professional.</p>
            <div className="problem-details-subsection">
                <p className="problem-details-p ul"><span>Ingredients for a professional website:</span></p>
                <ul className="problem-details-ul">
                    <li className="problem-details-li"> <img src={Checked} alt="" /> Responsive</li>
                    <li className="problem-details-li"> <img src={Checked} alt="" /> Minimized loading time</li>
                    <li className="problem-details-li"> <img src={Checked} alt="" /> Good UI/UX</li>
                    <li className="problem-details-li"> <img src={Checked} alt="" /> Optimization</li>
                </ul>
            </div>
            <p className="problem-details-p"> <span>A professional-engaging website can help you form a good impression on your prospective customers.</span>It can also help you nurture your leads and get more conversions. But, more importantly, it provides a good user experience and helps your website visitors access and navigate your website with ease.</p>
            <button className=" cta-interative cta-LT"> <p> LET'S TALK</p> <img src={Arrow} alt="" /></button>
        </div>
      </div>
    </section>
  );
}

export default Problem;
