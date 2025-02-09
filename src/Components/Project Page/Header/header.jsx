import { memo } from "react";

import "./app.css";

const Header = memo(function Header({
  setShowAboutMePage,
  setShowProjectPage,
}) {
  function handleButtonClick() {
    setShowAboutMePage(true);
    setShowProjectPage(false);
  }
  return (
    <div className="header-container">
      <button className="about-me-page-bttn" onClick={handleButtonClick}>
        About Me
      </button>
      <h2>Ryan Rigley</h2>
    </div>
  );
});
export default Header;
