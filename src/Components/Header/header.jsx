import { memo } from "react";

import "./app.css"


const Header = memo(function Header({ setShowSidePanel }) {
  return (
    <div className="header-container">
      <i className="hamburger fas fa-bars" onClick={() => {
        setShowSidePanel(true);
      }}></i>
      <h2>Ryan Rigley</h2>
    </div>
  )
})
export default Header