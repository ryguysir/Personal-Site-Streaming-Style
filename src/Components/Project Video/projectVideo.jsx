import React from "react";
import "./app.css";

const ProjectVideo = ({ videoSrc }) => {

  return (
    <iframe
      title={videoSrc}
      width="960px"
      height="540px"
      frameBorder="0"
      allowFullScreen
      loading="lazy"
      src={`https://player.vimeo.com/video/${videoSrc}`}
      alt=""
    />
  );
};

export default ProjectVideo;
