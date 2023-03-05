import React from 'react'

export default function Container({
	children,
	onClick,
	display,
	flexDirection,
	justifyContent,
	alignItems,
	flex,
	maxWidth,
	width,
	gap,
	background,
	color,
	padding,
	border,
	borderRadius,
	margin
}) {
	return (
		<div
			style={{
				display,
				flexDirection,
				justifyContent,
				alignItems,
				flex,
				background,
				color: color || (background === 'white' ? 'black' : 'white'),
				padding,
				cursor: onClick ? 'pointer' : 'default',
				maxWidth,
				width,
				gap,
				border,
				borderRadius,
				margin
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