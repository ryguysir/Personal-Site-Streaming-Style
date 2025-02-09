import React, { useState } from "react";

//import components
import AboutMe from "./Components/About Me Page/aboutMe";
import ProjectPage from "./Components/Project Page/projectPage";
import ContactMeFloater from "./Components/About Me Page/Contact Me Floater/contactMeFloater";

//import CSS
import "./App.css";

export default function App() {
  const [showAboutMePage, setShowAboutMePage] = useState(true);
  const [showProjectPage, setShowProjectPage] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [showProjectSearch, setShowProjectSearch] = useState(false);
  const [searchedProjects, setSearchedProjects] = useState([]);

  const [selectedProject, setSelectedProject] = useState({
    projectTitle: "",
    projectText: "",
    imgSrc: "",
    projectTags: [],
    projectVideos: [],
    award: [],
  });

  return (
    <div>
      {showAboutMePage ? (
        <AboutMe
          className="about-me-page"
          setShowProjectPage={setShowProjectPage}
          setShowAboutMePage={setShowAboutMePage}
          searchedProjects={searchedProjects}
          setSearchedProjects={setSearchedProjects}
        />
      ) : (
        <div></div>
      )}

      {showProjectPage ? (
        <ProjectPage
          className="project-page"
          searchedProjects={searchedProjects}
          setSearchedProjects={setSearchedProjects}
          showAboutMePage={showAboutMePage}
          setShowAboutMePage={setShowAboutMePage}
          showProjectPage={showProjectPage}
          setShowProjectPage={setShowProjectPage}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          showSidePanel={showSidePanel}
          setShowSidePanel={setShowSidePanel}
          showProjectSearch={showProjectSearch}
          setShowProjectSearch={setShowProjectSearch}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      ) : (
        <div></div>
      )}
      <ContactMeFloater />
    </div>
  );
}
