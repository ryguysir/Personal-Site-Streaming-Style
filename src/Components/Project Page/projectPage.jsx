import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

//import functions
import { tags, projects } from "../../projectArray.js";

import "./app.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import Header from "./Header/header";
import ProjectTile from "./Project Tile/projectTile";
import ProjectTileHeader from "./Project Tile Header/projectTileHeader";
import ProjectTileRow from "./Project Tile Row/projectTileRow";
import ProjectHighlight from "./Project Highlight/projectHighlight";
import ProjectDetails from "./Project Details/projectDetails";
import ProjectSearch from "./Project Search/projectSearch";

const ProjectPage = ({
  searchedProjects,
  setSearchedProjects,
  setShowAboutMePage,
  setShowProjectPage,
  showDetails,
  setShowDetails,
  selectedProject,
  setSelectedProject,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  //add a slider to the project tile row
  const addSlider = (element) => {
    const slider = element;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      setIsDragging(false);
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      setIsDragging(true);
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  };
  useEffect(() => {
    let rows = document.getElementsByClassName("project-tile-row");
    [...rows].forEach((row) => {
      addSlider(row);
    });
  }, []);

  function handleTileClick(proj) {
    setShowDetails(true);
    setSelectedProject(proj);
  }

  return (
    <div>
      <div className="project-page">
        <ProjectDetails
          showDetails={showDetails}
          selectedProject={selectedProject}
          setShowDetails={setShowDetails}
        />

        <Header
          setShowAboutMePage={setShowAboutMePage}
          setShowProjectPage={setShowProjectPage}
        />
        <div className="container">
          <Swiper
            key={`Swiper panel`}
            style={{
              "--swiper-pagination-color": "white",
              "--swiper-navigation-color": "white",
              "--swiper-navigation-size": "60px",
              "--swiper-navigation-sides-offset": "20px",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={true}
            navigation
            pagination={{ clickable: true }}
          >
            {tags["favorites"].map((project) => (
              <SwiperSlide key={`${project.projectTitle} Slider`}>
                <ProjectHighlight
                  highlightProject={project}
                  setSelectedProject={setSelectedProject}
                  setShowDetails={setShowDetails}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <ProjectSearch
            projects={projects}
            setShowDetails={setShowDetails}
            setSelectedProject={setSelectedProject}
            searchedProjects={searchedProjects}
            setSearchedProjects={setSearchedProjects}
          />
          {searchedProjects.length <= 0 ? null : (
            <ProjectTileRow key={"searched projects"}>
              <ProjectTileHeader
                header={"Search"}
                key={"searched projects header"}
              />
              {searchedProjects.map((project) => {
                return (
                  <ProjectTile
                    key={`${project.projectTitle}: Project Tile`}
                    isDragging={isDragging}
                    project={project}
                    handleTileClick={handleTileClick}
                  />
                );
              })}
            </ProjectTileRow>
          )}
          <div>
            {Object.keys(tags).map((tag) => {
              return (
                <ProjectTileRow key={tag}>
                  <ProjectTileHeader
                    header={tag.charAt(0).toUpperCase() + tag.slice(1)}
                    key={tag}
                  />
                  {tags[tag].map((project) => {
                    return (
                      <ProjectTile
                        key={`${project.projectTitle}: Project Tile`}
                        isDragging={isDragging}
                        project={project}
                        handleTileClick={handleTileClick}
                      />
                    );
                  })}
                </ProjectTileRow>
              );
            })}
            <div className="bottom-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
