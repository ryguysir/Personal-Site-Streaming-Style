import Slide from "react-reveal/Slide";

import "./app.css"

const SidePanel = ({ setShowSidePanel }) => {
  return (
    <Slide left>
      <div className="side-panel">
        <i className="fa-solid fa-xmark close-side-panel" onClick={() => {
          setShowSidePanel(false);
        }}></i>
        <h3>Search</h3>
        <h3>Contact Me</h3>
      </div>
    </Slide>
  )
}

export default SidePanel