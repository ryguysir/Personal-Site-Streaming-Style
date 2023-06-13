import "./app.css"

const SidePanel = ({ setShowSidePanel, setShowContactMe }) => {
  return (
    <div>
      <div className="side-panel">
        <i className="fa-solid fa-xmark close-side-panel" onClick={() => {
          setShowSidePanel(false);
        }}></i>
        <h3>Search</h3>
        <h3 onClick={() => { setShowSidePanel(false);setShowContactMe(true) }}>Contact Me</h3>
      </div>
    </div>
  )
}

export default SidePanel