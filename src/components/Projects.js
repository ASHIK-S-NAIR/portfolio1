import React, { useState } from "react";
import { sliderData } from "../sliderData";
import ProjectSlide from "./ProjectSlide";
import Chevron from "../images/Chevron Right.png";

function Projects() {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <section id="projects-id" className="projects-section">
      <div className="wrap">
        <h1 className="projects-heading">MY PROJECTS</h1>
      </div>

      <div className="wrap projects-container">
        <div className="projects-left-section">
          {sliderData.map((slide, index) => {
            return (
              <div
                className={
                  index === current ? "slide active" : "slide"
                }
                key={index}
              >
                {index === current && (
                  <ProjectSlide
                    className="ProjectSlide"
                    heading={slide.heading}
                    description={slide.description}
                    image={slide.image}
                    tech={slide.tech}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="projects-action-buttons">
          <button className="projects-up-btn" onClick={nextSlide}>
            <img src={Chevron} alt="" />
          </button>
          <button className="projects-down-btn" onClick={prevSlide}>
            <img src={Chevron} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
