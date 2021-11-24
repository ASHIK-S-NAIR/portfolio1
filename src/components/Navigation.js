import React,{useRef} from "react";

function Navigation() {

  const handburger = useRef(null); 
  const menu = useRef(null);
  const navigation_section_one = useRef(null);
  const navigation_section_two = useRef(null);
  const navigation_section_three = useRef(null);
  
  const toggle = () => {
    handburger.current.classList.toggle('active');
    menu.current.classList.toggle('active');
    navigation_section_one.current.classList.toggle('active');           
    navigation_section_two.current.classList.toggle('active');           
    navigation_section_three.current.classList.toggle('active');           
  }
  

  return (
    <section className="navigation">
      <div className="wrap navigation-wrap">
        <a href="/" className="navigation-logo-a">
          <h1 className="navigation-logo">ASHIK SUDHAKARAN</h1>
        </a>
        <div className="navigation-handburger-section" ref={handburger} onClick={toggle}>
          <div className="navigation-handburger-one" ref={navigation_section_one}></div>
          <div className="navigation-handburger-two" ref={navigation_section_two}></div>
          <div className="navigation-handburger-three" ref={navigation_section_three}></div>
        </div>
      </div>
      <div className="navigation-menu" ref={menu}>
        <div className="wrap ul-wrap">
          <ul className="navigation-ul">
            <li className="navigation-li" onClick={toggle} ><a href="/" className="navigation-a" > <span>01</span>HOME </a></li>
            <li className="navigation-li" onClick={toggle} ><a href="#process-id" className="navigation-a"> <span>02</span>PROCESS </a></li>
            <li className="navigation-li" onClick={toggle} ><a href="#projects-id" className="navigation-a"> <span>03</span>PROJECTS </a></li>
            <li className="navigation-li" onClick={toggle} ><a href="#about-id" className="navigation-a"> <span>04</span>ABOUT </a></li>
            <li className="navigation-li" onClick={toggle} ><a href="#faq-id" className="navigation-a"> <span>05</span>FAQ'S </a></li>
            <li className="navigation-li" onClick={toggle} ><a href="#" className="navigation-a"> <span>06</span>CONTACT </a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
