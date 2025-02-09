import { memo } from "react";

import "./app.css";


const ProjectTileHeader = memo(function ProjectTile({ header }) {

  return (
    <div className="project-card-header" key={header}>
      {header}
    </div>
  );
});

export default ProjectTileHeader;