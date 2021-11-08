import React from "react";
import Menu from "../images/Menu.png";

function Navigation() {
  return (
    <section className="navigation">
      <div className="wrap navigation-wrap">
        <a href="/" className="navigation-logo-a">
          <h1 className="navigation-logo">ASHIK SUDHAKARAN</h1>
        </a>
        <div className="navigation-handburger-section">
          <img src={Menu} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Navigation;
