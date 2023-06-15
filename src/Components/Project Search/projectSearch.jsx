import React, { useState, memo } from "react";
import "./app.css";

const ProjectSearch = memo(function ProjectSearch({ projects, setShowProjectSearch, setShowDetails, setSelectedProject }) {
  let [searchedProjects, setSearchedProjects] = useState([])
  const search = () => {
    let query = document.getElementsByClassName("project-search-input")[0].value;
    if (query.length <= 0) {
      setSearchedProjects([])
      return
    }
    let re = new RegExp(`(${query})`, "gi");

    setSearchedProjects(projects.filter((project) => { if (re.test(project.projectTitle)) { return project } }));

  }
  const handleClick = (project) => {
    document.getElementsByClassName("project-search-input")[0].value = "";
    setSearchedProjects([]);
    setShowProjectSearch(false);
    setSelectedProject(project)
    setShowDetails(true);

  }
  return (
    <div>
      <div id="project-search-holder">
        <i className="fa-solid fa-xmark close-contact-me" onClick={() => { setShowProjectSearch(false) }}></i>
        <input type="text" placeholder="project name" className="project-search-input" onChange={() => { search() }}></input>
        <div className="searched-list">
          {searchedProjects.map((project, index) => {
            console.log(index);
            if (index % 2 == 0) {
              return (<h2 onClick={() => { handleClick(project) }} className="searched-list-light" key={project.projectTitle}>{project.projectTitle}</h2>)
            } else {
              return (<h2 onClick={() => { handleClick(project) }} className="searched-list-dark" key={project.projectTitle}>{project.projectTitle}</h2>)
            }
          })}
        </div>
      </div>
    </div>
  );
});

export default ProjectSearch;
