import React, { useEffect, useRef } from 'react'

import "./app.css";


const TextBlock = ({ header, subheader, body }) => {

	const headerRef = useRef(null);
	const subHeaderRef = useRef(null);
	const horizontalLine = useRef(null);

	useEffect(() => {

		const headerWidth = headerRef.current.clientWidth;
		const subHeaderWidth = subHeaderRef.current.clientWidth;
		console.log(headerWidth, subHeaderWidth)

		horizontalLine.current.style.width = Math.max(headerWidth, subHeaderWidth) + "px"

	}, []);


	return (
		<div className='text-block'>
			<h1 className="header" ref={headerRef}>{header}</h1>
			<h5 className="sub-header" ref={subHeaderRef}>{subheader}</h5>
			<div className="text-block-horizontal-line" ref={horizontalLine}></div>
			<p className="body">{body}</p>

		</div>
	);
};

export default TextBlock;



