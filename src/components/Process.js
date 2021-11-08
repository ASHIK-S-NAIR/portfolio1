import React from 'react';
import Paint from '../images/Paint Palette.png';
import Marker from '../images/Marker Pen.png';
import Google from '../images/Google Code.png';

function Process() {
    return (
        <section className="process-section">
            <div className="wrap process-wrap">
                <h1 className="process-heading">MY PROCESS</h1>
            </div>
            <div className="process-container">
                <div className="process-sec">
                    <div className="process-head">
                        <div className="process-icon-section">
                            <img src={Marker} alt="" />
                        </div>
                        <h1 className="process-index">01</h1>
                    </div>
                    <h1 className="process-header">Plan</h1>
                    <p className="process-p">Handpicking user-focused fruitful content and resolving the functionalities. Structuring and wireframing to layout content.</p>
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
                </div>
            </div>
        </section>
    )
}

export default Process
