import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"

//import components
import Header from "./Components/Header/header"
import ProjectTile from "./Components/Project Tile/projectTile"
import ProjectTileHeader from "./Components/Project Tile Header/projectTileHeader"
import ProjectTileRow from "./Components/Project Tile Row/projectTileRow"
import ProjectHighlight from "./Components/Project Highlight/projectHighlight"
import ProjectDetails from "./Components/Project Details/projectDetails"
import SidePanel from "./Components/Side Panel/sidePanel"
import ContactMe from "./Components/Contact Me/contactMe"
import ProjectSearch from "./Components/Project Search/projectSearch"




//import functions
import { tags, projects } from "./projectArray.js"

//import CSS
import './App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'


export default function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [showProjectSearch, setShowProjectSearch] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    projectTitle: "",
    projectText: "",
    imgSrc: "",
    projectTags: [],
    projectVideos: [],
    award: [],
  });



  function handleTileClick(proj) {
    setShowDetails(true);
    setSelectedProject(proj);
  }




  return (<div>

    <SidePanel showSidePanel={showSidePanel} setShowSidePanel={setShowSidePanel} setShowContactMe={setShowContactMe} setShowProjectSearch={setShowProjectSearch} />

    <ProjectSearch projects={projects} showProjectSearch={showProjectSearch} setShowProjectSearch={setShowProjectSearch} setShowDetails={setShowDetails} setSelectedProject={setSelectedProject} />

    <ContactMe showContactMe={showContactMe} setShowContactMe={setShowContactMe} />

    <ProjectDetails showDetails={showDetails} selectedProject={selectedProject} setShowDetails={setShowDetails} />

    <Header setShowSidePanel={setShowSidePanel} />
    <div className="container">
      <Swiper
        key={`Swiper panel`}
        style={{
          "--swiper-pagination-color": "white",
          "--swiper-navigation-color": "white",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={true}
        navigation
        pagination={{ clickable: true }}>
        {tags["favorites"].map((project) => (
          <SwiperSlide key={`${project.projectTitle} Slider`}><ProjectHighlight highlightProject={project} setSelectedProject={setSelectedProject} setShowDetails={setShowDetails} /></SwiperSlide>
        ))}

      </Swiper>

      <div>
        {Object.keys(tags).map((tag) => {
          return (
            <ProjectTileRow key={tag}>
              <ProjectTileHeader header={tag.charAt(0).toUpperCase() + tag.slice(1)} key={tag} />
              {tags[tag].map((project) => {
                return (
                  <ProjectTile key={`${project.projectTitle}: Project Tile`} project={project} handleTileClick={handleTileClick} />
                )
              })}</ProjectTileRow>)
        })}
        <div className="bottom-spacer"></div>
      </div>

    </div>
  </div>
  )
}
