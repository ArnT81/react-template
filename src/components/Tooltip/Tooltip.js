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


	const getPosition = (position) => {
		const { child, tooltip } = elements;
		const difference = {
			x: Math.abs(child.width - tooltip.width),
			y: Math.abs(child.height - tooltip.height)
		}

		const centerTooltip = (axis, childElement, diff) => {
			if (axis === 'x') {
				if (child.width > tooltip.width) return childElement + diff;
				else return childElement - diff;
			}
			else if (axis === 'y') {
				if (child.height > tooltip.height) return childElement + diff;
				else return childElement - diff
			};
		}

		if (position === 'top') {
			return {
				top: child.top - tooltip.height - margin,
				left: centerTooltip('x', child.left, difference.x / 2)
			}
		}
		else if (position === 'bottom') {
			return {
				top: child.top + child.height + margin,
				left: centerTooltip('x', child.left, difference.x / 2)
			}
		}
		else if (position === 'left') {
			return {
				top: centerTooltip('y', child.top, difference.y / 2),
				left: child.left - tooltip.width - margin
			}
		}
		else if (position === 'right') {
			return {
				top: centerTooltip('y', child.top, difference.y / 2),
				left: child.left + child.width + margin
			}
		}
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
