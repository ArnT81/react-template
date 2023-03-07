import React, { useRef, useState, useEffect } from 'react'
import Container from '../Container/Container'


export default function Tooltip({ title, children, active, delay, position, margin }) {
	const [elements, setElements] = useState({
		child: { width: 0, height: 0, left: 0, top: 0 },
		tooltip: { width: 0, height: 0, left: 0, top: 0 }
	});
	const [showTooltip, setShowTooltip] = useState(false);
	const childRef = useRef();
	const tooltipRef = useRef();

	useEffect(() => {
		const childElement = childRef.current.getClientRects()[0];
		const tooltipElement = tooltipRef?.current?.getClientRects()[0];

		tooltipElement && setElements({
			child: {
				width: childElement.width,
				height: childElement.height,
				left: childElement.x,
				top: childElement.y,
			},
			tooltip: {
				width: tooltipElement.width,
				height: tooltipElement.height,
				left: tooltipElement.x,
				top: tooltipElement.y,
			}
		})
	}, []);

	const showTooltipOnHover = (param) => {
		param ? setShowTooltip(true) : setShowTooltip(false)
	}

	//todo fade in tooltip on delay
	//todo onResize
	//todo caret
	//todo maybe destruct getClientRects

	const getPosition = (position) => {
		const { child, tooltip } = elements;
		const difference = {
			x: Math.abs(child.width - tooltip.width),
			y: Math.abs(child.height - tooltip.height)
		}


		if (position === 'top') {
			const top = child.top - tooltip.height - margin;

			if (child.width > tooltip.width) {
				return {
					top: top,
					left: child.left + difference.x / 2
				}
			}
			else {
				return {
					top: top,
					left: child.left - difference.x / 2
				}
			}
		}

		else if (position === 'bottom') {
			const top = child.top + child.height + margin;

			if (child.width > tooltip.width) {
				return {
					top: top,
					left: child.left + difference.x / 2
				}
			}
			else {
				return {
					top: top,
					left: child.left - difference.x / 2
				}
			}
		}

		else if (position === 'left') {
			const left = child.left - tooltip.width - margin;

			if (child.height > tooltip.height) {
				return {
					top: child.top + difference.y / 2,
					left: left
				}
			}
			else {
				return {
					top: child.top - difference.y / 2,
					left: left
				}
			}
		}

		else if (position === 'right') {
			const left = child.left + child.width + margin;

			if (child.height > tooltip.height) {
				return {
					top: child.top + difference.y / 2,
					left: left
				}
			}
			else {
				return {
					top: child.top - difference.y / 2,
					left: left
				}
			}
		} else return
	}

	if (!active) {
		return <div ref={childRef}>{children}</div>
	}

	return (
		<div>
			<div
				style={{ position: 'absolute', ...getPosition(position), opacity: showTooltip ? 1 : 0 }}
				ref={tooltipRef}
			>
				<Container >
					{title}
				</Container>
			</div>
			<div
				style={{ position: 'relative' }}
				ref={childRef}
				onMouseEnter={() => showTooltipOnHover('argument')}
				onMouseLeave={() => showTooltipOnHover()}
			>
				{children}
			</div>
		</div >
	)
}
Tooltip.defaultProps = {
	title: 'Add title prop',
	position: 'bottom',
	margin: 8
}
