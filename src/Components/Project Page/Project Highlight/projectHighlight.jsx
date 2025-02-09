import { memo } from "react";
import "./app.css";

import ProjectAward from "../Project Award/projectAward"


const ProjectHighlight = memo(function ProjectHighlight({ highlightProject, setSelectedProject, setShowDetails }) {


  return (
    <div className="project-highlight-container" onClick={() => {
      setSelectedProject(highlightProject);
      setShowDetails(true);
    }}>
      <div className="project-highlight-cover">
        <img className="project-highlight-image-blur" src={highlightProject.imgSrc} alt={`${highlightProject.projectTitle}+highlight image blurred`} />
        <img className="project-highlight-image" src={highlightProject.imgSrc} alt={`${highlightProject.projectTitle}+highlight image`} />
        <div className="project-highlight-text"><h1>{highlightProject.projectTitle}</h1><h2>{highlightProject.projectText}</h2></div>
        {highlightProject.award.map((item) => (
          <ProjectAward key={Math.random()} award={item} />
        ))}
      </div>
    </div>
  );
});

export default ProjectHighlight;
