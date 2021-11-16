import React from 'react';


function ProjectSlide({heading, description, tech, image}) {
    return (
        <div className="project-slide">
            <div className="project-left-slide">
                <h1 className="project-left-heading">{heading}</h1>
                <p className="project-left-p">{description}</p>
                <p className="projects-left-tech">{tech}</p>
                <div className="project-cta-section">
                    <button className="cta-VS">VISIT SITE</button>
                    <button className="cta-GL">GitHubLink</button>
                </div>
            </div>
            <div className="project-right-slide">
                <img src={image} alt="" className="project-right-img" />
            </div>
        </div>
    )
}

export default ProjectSlide
