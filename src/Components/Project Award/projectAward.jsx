import { memo } from "react"
import "./app.css"


const ProjectAward = memo(function ProjectAward({ award }) {

  const awardChoice = (award) => {
    if (award == "clio") {
      return (<div className="project-award"><img src="./images/clioAward.png" /></div>)
    } else if (award == "golden") {
      return (<div className="project-award"><img src="./images/goldenTrailer.png" /></div>)
    } else if (award == "tellyAwardGold") {
      return (<div className="project-award"><img src="./images/tellyAwardGold.png" /></div>)
    } else if (award == "tellyAwardBronze") {
      return (<div className="project-award"><img src="./images/tellyAwardBronze.png" /></div>)
    }
  }

  return (
    <div>{awardChoice(award)}</div>
  )
})

export default ProjectAward