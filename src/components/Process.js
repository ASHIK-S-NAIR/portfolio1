import React from 'react';
import Paint from '../images/Paint Palette.png';
import Marker from '../images/Marker Pen.png';
import Google from '../images/Google Code.png';

function Process() {
    return (
        <section id="process-id" className="process-section">
            <div className="wrap process-wrap">
                <h1 className="process-heading">MY PROCESS</h1>
            </div>
            <div className=" wrap process-container">
                <div className="process-sec">
                    <div className="process-head">
                        <div className="process-icon-section">
                            <img src={Marker} alt="" />
                        </div>
                        <h1 className="process-index">01</h1>
                    </div>
                    <h1 className="process-header">Plan</h1>
                    <p className="process-p">Handpicking user-focused fruitful content and resolving the functionalities. Structuring and wireframing to layout content.</p>
                    <div className="process-tools" id="process-plan">
                        <ul className="process-ul">
                            <li className="process-li">Pen</li>
                            <li className="process-li">Paper</li>
                        </ul>
                    </div>
                </div>

                <div className="process-sec">
                    <div className="process-head">
                        <div className="process-icon-section">
                            <img src={Paint} alt="" />
                        </div>
                        <h1 className="process-index">02</h1>
                    </div>
                    <h1 className="process-header">Design</h1>
                    <p className="process-p">Choosing optimum colors, fonts, and icons. Setting up the layout concerning User Interface and User Experience for the best output.</p>
                    <div className="process-tools" id="process-design">
                    <ul className="process-ul">
                            <li className="process-li">Photoshop</li>
                            <li className="process-li">Figma</li>
                        </ul>
                    </div>
                </div>

                <div className="process-sec">
                    <div className="process-head">
                        <div className="process-icon-section">
                            <img src={Google} alt="" />
                        </div>
                        <h1 className="process-index">03</h1>
                    </div>
                    <h1 className="process-header">Build</h1>
                    <p className="process-p">Layout implemented using structuring and styling languages. Interactivity is added, using programming language also utilizing libraries and functions. </p>
                    <div className="process-tools" id="process-build">
                    <ul className="process-ul">
                            <li className="process-li">HTML</li>
                            <li className="process-li">CSS</li>
                            <li className="process-li">Javascript</li>
                            <li className="process-li">SASS</li>
                            <li className="process-li">ReactJS</li>
                            <li className="process-li">JSON</li>
                            <li className="process-li">Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
