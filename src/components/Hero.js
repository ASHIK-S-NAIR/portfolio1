import React from 'react';
import Ashik from '../images/ashik.jpg'; 
import Verified from '../images/Verified Freelancer.png';

function Hero() {
    return (
        <section className="hero-section">
            <div className="wrap hero-wrap">
                <div className="hero-info-section">
                    <h3 className="hero-info-subheading">HELLO THERE, MY NAME IS <span>ASHIK</span></h3>
                    <h1 className="hero-info-heading">I’am a freelance web developer <span> innovating professional</span> websites that convert visitors into <span>valuable customers</span> </h1>
                    <button className="hero-info-btn cta-SMPP">SEE MY PAST PROJECTS</button>
                </div>
                <div className="hero-img-section">
                    <img src={Ashik} alt="" className="hero-img" />
                    <img src={Verified} alt=""  className="hero-img-section-verified"/>
                </div>
            </div>
        </section>
    )
}

export default Hero
