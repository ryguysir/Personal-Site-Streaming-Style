import React, { useEffect } from "react";
import Player from "@vimeo/player";

import "./app.css";

import TextBlock from "./Text Block/textBlock";
import LogoBlock from "./Logo Block/logoBlock";

import { tags, projects } from "../../projectArray.js";

const AboutMe = ({
  searchedProjects,
  setSearchedProjects,
  setShowProjectPage,
  setShowAboutMePage,
}) => {
  // useEffect(() => {
  //   var iframe = document.querySelector("iframe");
  //   var player = new Player(iframe);

  //   player.on("play", () => {
  //     document.getElementsByClassName("text-block")[0].style.opacity = ".25";
  //     document.getElementsByClassName(
  //       "about-me-container"
  //     )[0].style.background = "rgb(5, 5, 10)";
  //   });
  //   player.on("pause", () => {
  //     document.getElementsByClassName("text-block")[0].style.opacity = "1";
  //     document.getElementsByClassName(
  //       "about-me-container"
  //     )[0].style.background = "rgb(20, 20, 30)";
  //   });
  // }, []);

  const titleStyle = {
    color: "white",
    textAlign: "center",
    transform: "translateY(-8vh)",
  };
  const buttonClick = () => {
    setShowProjectPage(true);
    setShowAboutMePage(false);
    window.scrollTo(0, 0);
  };

  const tempStyle = {
    width: "50vw",
    height: "540px",
    backgroundColor: "grey",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };
  return (
    <div className="about-me-container">
      {/* page one */}
      <div className="page">
        {/* <iframe
          className="vid-reel"
          src="https://player.vimeo.com/video/957900559?h=33c3290749"
          width="960"
          height="540"
          frameBorder="0"
        ></iframe> */}
        <div style={tempStyle} key="reel in progress">
          Reel in progress
          <i className="fa-solid fa-spinner loading"></i>
        </div>
        <TextBlock
          header={"Ryan Rigley"}
          subheader={"Editor / Motion Graphics / Colorist / Audio Design"}
          body={
            "Over a decade and a half of experience cutting for film and corporate. Expert level proficiency with all of the top industry tools, such as, but not limited to: Adobe Creative Suite, DaVinci Resolve, Avid, Cinema 4d, Blender, and many many many more. If you have a video that needs made, I can cut it."
          }
        />
      </div>

      {/* page two */}
      <div className="page">
        <h1 style={titleStyle}>Companies</h1>
        <LogoBlock
          projects={projects}
          searchedProjects={searchedProjects}
          setSearchedProjects={setSearchedProjects}
          setShowProjectPage={setShowProjectPage}
          setShowAboutMePage={setShowAboutMePage}
        />
      </div>

      <button className="project-page-bttn" onClick={buttonClick}>
        View My Work
      </button>
    </div>
  );
};

export default AboutMe;
