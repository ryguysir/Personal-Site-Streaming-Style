import { memo, useEffect, useRef } from "react";

import "./app.css"


const ProjectTileRow = memo(function ProjectTileRow({ header, children }) {

	const ref = useRef(null);
	const headerRef = useRef(null);
	const cover = useRef(null)
	const arrow = useRef(null);
	const scrollbar = useRef(null);
	useEffect(() => {

		const scrollListener = (e) => {
			scrollbar.current.style.left = `${Math.round((e.target.scrollLeft / ((e.target.scrollWidth - e.target.offsetWidth) + scrollbar.current.clientWidth)) * 100)}%`;
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

		if (ref.current.scrollWidth == headerRef.current.scrollWidth) {
			scrollbar.current.style.setProperty("display", "none")
		}
	}, [ref, cover, scrollbar])

	return (
		<div>
			{/* <div className="line"></div> */}
			<div className="project-tile-row-header" ref={headerRef}>{header}</div>
			<i ref={arrow} className="fa-solid fa-chevron-right project-tile-arrow" />

			<div className="project-tile-row" ref={ref}>
				<div className="styled-scrollbar" ref={scrollbar}></div>

				<div className="project-tile-row-cover" ref={cover}>{children}</div>

			</div>
		</div>
	)
});

export default ProjectTileRow;