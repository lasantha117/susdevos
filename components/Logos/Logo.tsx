'use client'
import React from 'react';
import Image from 'next/image'

const Logo = ({ src, alt }: any) => {
	const [hovered, setHovered] = React.useState(false);

	const handleHover = () => {
		setHovered(!hovered);
	};

	return (
		<div
			className="m-4 inline-block"
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<Image
				src={src}
				alt={alt}
				width={200}
				height={100}
				className="cursor-pointer inline transition-transform transform hover:scale-110"
				style={{
					filter: hovered ? 'grayscale(0)' : 'grayscale(100%)',
				}}
			/>
		</div>
	);
};

export default Logo;
