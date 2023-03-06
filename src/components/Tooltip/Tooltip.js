import React, { useRef, useState, useEffect } from 'react'
import Container from '../Container/Container'


export default function Tooltip({ title, children, active, delay, position }) {
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
	}, [childRef]);

	const showTooltipOnHover = (param) => {
		param === true ? setShowTooltip(true) : setShowTooltip(false)
	}
	//todo center tooltip if child height is higher than tooltip height ('right', 'left')
	//todo fade in tooltip on delay
	//todo onResize
	//todo caret
	//todo maybe destruct getClientRects

	const getPosition = (position) => {
		const { child, tooltip } = elements;
		// const margin = 8

		const difference = {
			x: Math.abs(child.width - tooltip.width),
			y: Math.abs(child.height - tooltip.height)
		}

		if (position === 'top') {
			return {
				top: child.top - tooltip.height,
				left: tooltip.width > child.width && child.left - difference.x / 2
			}
		}
		else if (position === 'bottom') {
			return {
				top: child.top + child.height,
				left: tooltip.width > child.width && child.left - difference.x / 2
			}
		}
		else if (position === 'left') {
			return {
				top: child.top - difference.y / 2,
				left: child.left - tooltip.width,
			}
		}
		else if (position === 'right') {
			return {
				top: child.top - difference.y / 2,
				left: child.left + child.width,
			}
		} else return
	}


	return (
		<>
			<div
				style={{ position: 'absolute', ...getPosition(position) }}
				ref={tooltipRef}
			>
				{active && showTooltip &&
					<Container >
						{title}
					</Container>
				}
			</div>
			<div ref={childRef}
				onMouseOver={() => showTooltipOnHover(true)}
				onMouseLeave={() => showTooltipOnHover(false)}
			>
				{children}
			</div>
		</ >
	)
}
Tooltip.defaultProps = {
	title: 'Add title prop',
	position: 'bottom'
}
