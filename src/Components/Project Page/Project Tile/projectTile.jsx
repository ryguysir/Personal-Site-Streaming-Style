import { memo } from "react";

import ProjectAward from "../Project Award/projectAward";

import "./app.css";


const ProjectTile = memo(function ProjectTile({ isDragging, project, handleTileClick }) {

  function handleClickSetSelectedProject() {
    if (!isDragging) { handleTileClick(project) }
  }
  return (
    <div key={Math.random()} onClick={() => {
      handleClickSetSelectedProject()
    }}>
      <div className="project-card" >
        {project.award.map((item) => (
          <ProjectAward key={Math.random()} award={item} />
        ))}
        <img
          draggable={false}
          className="project-card-img"
          height="100%"
          width="100%"
          left="0%"
          effect="blur"
          src={project.imgSrc}
          alt={`image for ${project.projectTitle}`}
        />
        <div className="project-card-text">
          <h2>
            {project.projectTitle}
          </h2>
          <div className="project-card-text-horizontal-line"></div>

          <h3>{project.projectText}</h3>
        </div>

      </div>
    </div>
  );
});

export default ProjectTile;