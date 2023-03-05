import React from 'react'

export default function Container({
	children,
	onClick,
	display,
	flexDirection,
	width,
	gap,
	background,
	color,
	padding,
	border,
	borderRadius
}) {
	return (
		<div
			style={{
				display,
				flexDirection,
				background,
				color: color || (background === 'white' ? 'black' : 'white'),
				padding,
				cursor: onClick ? 'pointer' : 'default',
				width,
				gap,
				border,
				borderRadius
			}}
			onClick={onClick}
		>
			{children}
		</div>
	)
}
Container.defaultProps = {
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
	background: 'black',
	padding: 16,
	borderRadius: 8
}