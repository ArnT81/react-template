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
				color,
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
	color: 'white',
	padding: 16,
	borderRadius: 8
}