import React, { useState, memo } from "react";
import {useTransition, animated} from "react-spring"
import "./app.css";

const ProjectSearch = memo(function ProjectSearch({ projects, showProjectSearch,setShowProjectSearch, setShowDetails, setSelectedProject }) {
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

  const projectSearchTransition = useTransition(showProjectSearch,{
     from:{opacity:0},
    enter:{opacity:1},
    leave:{opacity:0}
  })

  return (<div>
    {projectSearchTransition((style,item)=>item?
      <animated.div style={style} id="project-search-holder">
        <i className="fa-solid fa-xmark close-contact-me" onClick={() => { setShowProjectSearch(false) }}></i>
        <input type="text" placeholder="project name" className="project-search-input" onChange={() => { search() }}></input>
        <div className="searched-list">
          {searchedProjects.map((project, index) => {
            if (index % 2 == 0) {
              return (<h2 onClick={() => { handleClick(project) }} className="searched-list-light" key={project.projectTitle}>{project.projectTitle}</h2>)
            } else {
              return (<h2 onClick={() => { handleClick(project) }} className="searched-list-dark" key={project.projectTitle}>{project.projectTitle}</h2>)
            }
          })}
        </div>
      </animated.div>
    :"")}
  </div>)
});

export default ProjectSearch;


  // const sidePanelTransition = useTransition(showSidePanel,{
  //   from:{x:-300},
  //   enter:{x:0},
  //   leave:{x:-300}
  // })
  // return (<div>
  //   {projectSearchTransition((style,item)=>item?  :"")}
  // </div>)