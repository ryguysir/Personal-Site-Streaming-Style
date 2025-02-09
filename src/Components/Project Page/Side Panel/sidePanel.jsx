import "./app.css";
import { useTransition, animated } from "react-spring";

const SidePanel = ({
  setShowProjectPage,
  setShowAboutMePage,
  showSidePanel,
  setShowSidePanel,
  setShowProjectSearch,
}) => {
  const sidePanelTransition = useTransition(showSidePanel, {
    from: { x: -300 },
    enter: { x: 0 },
    leave: { x: -300 },
  });
  return (
    <div>
      {sidePanelTransition((style, item) =>
        item ? (
          <animated.div style={style} className="side-panel">
            <i
              className="fa-solid fa-xmark close-side-panel"
              onClick={() => {
                setShowSidePanel(false);
              }}
            ></i>
            <h3
              onClick={() => {
                setShowSidePanel(false);
                setShowProjectSearch(true);
              }}
            >
              Search
            </h3>
            <h3
              onClick={() => {
                setShowAboutMePage(true);
                setShowProjectPage(false);
                setShowSidePanel(false);
              }}
            >
              About Me
            </h3>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default SidePanel;
