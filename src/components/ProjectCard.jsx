import React from "react";
import './ProjectCard.css'

function ProjectCard({ title, description, image, link }){
    return(
        <div className="project-card">
            <img src={image} alt={title} className="project-image"  />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    )
}

export default ProjectCard;