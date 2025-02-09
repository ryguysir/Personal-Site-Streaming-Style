import React, { memo } from "react";
import "./app.css";

const ProjectSearch = memo(function ProjectSearch({
  projects,
  searchedProjects,
  setSearchedProjects,
}) {
  const search = (e) => {
    if (e.key === "Backspace" && e.target.value.length === 0) {
      // If the user deletes the last character in the search bar, clear the search results and return
      setSearchedProjects([]);

      return;
    }

    if (e.key == "Enter" || e.key == undefined) {
      let query = document.getElementsByClassName("project-search-input")[0]
        .value;
      if (query.length <= 0) {
        setSearchedProjects([]);
        return;
      }
      let re = new RegExp(`(${query})`, "gi");

      let tempProjSearchContainer = [];
      projects.filter((project) => {
        if (re.test(project.projectTitle)) {
          tempProjSearchContainer.push(project);
        }
      });
      setSearchedProjects(tempProjSearchContainer);
    }
  };

  return (
    <div>
      <div className="project-search-holder">
        <input
          type="text"
          className="project-search-input"
          placeholder="Search"
          onKeyUp={search}
        />
        <button type="submit" className="searchButton" onClick={search}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
});

export default ProjectSearch;
