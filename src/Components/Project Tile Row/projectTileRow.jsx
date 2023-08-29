import { memo, useEffect } from "react";

import "./app.css"


const ProjectTileRow = memo(function ProjectTileRow({ header, children }) {

  console.log(this)
  return (
    <div>
      <div className="project-tile-row-header">{header}</div>
      <div className="project-tile-row">{children}</div>
    </div>
  )
});

export default ProjectTileRow;