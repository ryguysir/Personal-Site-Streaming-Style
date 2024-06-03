import { memo, useEffect, useRef } from "react";

import "./app.css"


const ProjectTileRow = memo(function ProjectTileRow({ header, children }) {

	const ref = useRef(null);
	const cover = useRef(null)
	const arrow = useRef(null);
	useEffect(() => {
		const scrollListener = (e) => {
			if (e.target.scrollLeft >= 1) {
				cover.current.style.setProperty('--coverOpacity', '0');
				cover.current.style.setProperty('--coverLeftAdjust', `-${e.target.scrollLeft}px`);
				arrow.current.style.setProperty('display', `none`);

			} else {
				cover.current.style.setProperty('--coverOpacity', '1');
				cover.current.style.setProperty('--coverLeftAdjust', '0px');
				arrow.current.style.setProperty('display', `block`);
			}
		}
		ref.current.addEventListener("scroll", scrollListener);
	}, [ref])

	return (
		<div>
			<div className="project-tile-row-header">{header}</div>

			<div className="project-tile-row" ref={ref}>
				<i ref={arrow} className="fa-solid fa-arrow-right project-tile-arrow" />
				<div className="project-tile-row-cover" ref={cover}>{children}</div>

			</div>

		</div>
	)
});

export default ProjectTileRow;