import React, { useEffect, useState } from "react";
import "./app.css";

// Function to import all images from a folder
function importAll(r) {
  return r.keys().map(r);
}

// Import all images from the logos folder
const images = importAll(
  require.context("/public/logos", false, /\.(png|jpe?g|svg)$/)
);

const LogoBlock = ({
  projects,
  setSearchedProjects,
  setShowProjectPage,
  setShowAboutMePage,
}) => {
  const [imageSources, setImageSources] = useState([]);

  useEffect(() => {
    setImageSources(images);
  }, []);
  const handleLogoMouseMove = (e) => {
    let imgTile = e.target;
    let entryXPos = e.clientX;
    let entryYPos = e.clientY;
    let bounceAmount = 20;

    // entry from left side
    if (entryXPos <= imgTile.getBoundingClientRect().left + 50) {
      imgTile.children[0].style.left = `${bounceAmount}px`;
    }

    // entry from right side
    if (entryXPos >= imgTile.getBoundingClientRect().left + 50) {
      imgTile.children[0].style.left = `-${bounceAmount}px`;
    }

    // entry from top
    if (entryYPos <= imgTile.getBoundingClientRect().top + 50) {
      imgTile.children[0].style.top = `${bounceAmount}px`;
    }

    // entry from bottom
    if (entryYPos >= imgTile.getBoundingClientRect().top + 50) {
      imgTile.children[0].style.top = `-${bounceAmount}px`;
    }
  };
  const handleLogoMouseLeave = (e) => {
    let imgTile = e.target;
    imgTile.children[0].style.left = "0px";
    imgTile.children[0].style.top = "0px";
    imgTile.removeEventListener("mousemove", () => {});
  };

  const buttonClick = (e) => {
    return;

    setShowProjectPage(true);
    setShowAboutMePage(false);
    window.scrollTo(0, 0);

    let query = "amazon";
    let re = new RegExp(`(${query})`, "gi");

    let tempProjSearchContainer = [];
    projects.filter((project) => {
      if (re.test(project.projectTitle)) {
        tempProjSearchContainer.push(project);
      }
    });
    setSearchedProjects(tempProjSearchContainer);
  };

  return (
    <div>
      <div id="logo-container">
        {imageSources.map((src, index) => (
          <div
            className="logo"
            onClick={buttonClick}
            key={`logo container ${index}`}
            name={`${src}`}
            onMouseMove={(event) => handleLogoMouseMove(event)}
            onMouseLeave={(event) => handleLogoMouseLeave(event)}
          >
            <img key={index} src={src} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBlock;
