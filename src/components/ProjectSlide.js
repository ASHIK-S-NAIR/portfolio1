import React from "react";

function ProjectSlide({
  heading,
  description,
  tech,
  image,
  gitLink,
  projectLink,
}) {
  return (
    <div className="project-slide">
      <div className="project-left-slide">
        <h1 className="project-left-heading">{heading}</h1>
        <p className="project-left-p">{description}</p>
        <p className="projects-left-tech">{tech}</p>
        <div className="project-cta-section">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <button className="cta-VS">VISIT SITE</button>
          </a>
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <button className="cta-GL">GitHubLink</button>
          </a>
        </div>
      </div>
      <div className="project-right-slide">
        <img src={image} alt="" className="project-right-img" />
      </div>
    </div>
  );
}

export default ProjectSlide;
