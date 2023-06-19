import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import { useTransition, animated } from "react-spring"

import "./app.css";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import ProjectVideo from "../Project Video/projectVideo"

const ProjectDetails = ({ selectedProject, showDetails, setShowDetails }) => {

  if (showDetails) {
    document.body.classList.add("stop-scrolling")
  } else {
    document.body.classList.remove("stop-scrolling")
  }

  const projectDetailsTransition = useTransition(showDetails, {
    from: { x: "-100%" },
    enter: { x: "0%" },
    leave: { x: "-100%" }
  })

  return (
    <div>
      {projectDetailsTransition((style, item) => item ? <animated.div style={style} className="project-detail-page">
        <div className="close-project-detail-page" onClick={() => { setShowDetails(false) }}><i className="fa-solid fa-xmark"></i></div>
        <div className="project-detail-text">

          {selectedProject.projectTitle}
          <div className="horizontal-line"></div>
          {selectedProject.projectText}
        </div>
        <div className="project-detail-swiper">
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

            {selectedProject.projectVideos.map((video) => {
              return (
                <SwiperSlide key={Math.random()}>
                  <ProjectVideo videoSrc={video} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </animated.div> : "")}

    </div>
  );
};

export default ProjectDetails;