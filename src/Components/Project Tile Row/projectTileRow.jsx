import { memo, useEffect } from "react";

import "./app.css"


const ProjectTileRow = memo(function ProjectTileRow({ header, children }) {

  return (
    <div>
      <div className="project-tile-row-header">{header}</div>
      <div className="project-tile-row">{children}</div>
    </div>
  )
});

export default ProjectTileRow;