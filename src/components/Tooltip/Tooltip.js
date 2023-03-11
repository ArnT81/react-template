import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Container from '../Container/Container'
import useClientRect from '../../customhooks/useClientRect';

export default function Tooltip({ title, children, active, delay, position, margin, caret, background }) {
	const [showTooltip, setShowTooltip] = useState(false);
	const childRef = useRef();
	const tooltipRef = useRef();
	const rect = useClientRect(tooltipRef, childRef);


	useEffect(() => {
		getTooltipPosition(position)
	}, [rect]);

	const setDelay = (desiredDelay) => {
		if (!desiredDelay || desiredDelay === 'none') {
			tooltipRef.current.style["transition-delay"] = '0s'
		}
		else if (desiredDelay === 'short') {
			tooltipRef.current.style["transition-delay"] = '.2s'
		}
		else if (desiredDelay === 'long') {
			tooltipRef.current.style["transition-delay"] = '.4s'
		}
	}

	const showTooltipOnHover = (param) => {
		if (param) {
			setDelay(delay)
			setShowTooltip(true);
		}
		else {
			setDelay('none')
			setShowTooltip(false);
		}
	}

	const getTooltipPosition = (position) => {
		const { childElement, parentElement } = rect;

		if (childElement && parentElement) {
			const difference = {
				x: Math.abs(childElement.width - parentElement.width),
				y: Math.abs(childElement.height - parentElement.height)
			}

			const centerTooltip = (axis, child, diff) => {
				if (axis === 'x') {
					if (childElement.width > parentElement.width) return child + diff;
					else return child - diff;
				}
				else if (axis === 'y') {
					if (childElement.height > parentElement.height) return child + diff;
					else return child - diff
				};
			}

			if (position === 'top') {
				return {
					top: childElement.y - parentElement.height - margin,
					left: centerTooltip('x', childElement.x, difference.x / 2)
				}
			}
			else if (position === 'bottom') {
				return {
					top: childElement.y + childElement.height + margin,
					left: centerTooltip('x', childElement.x, difference.x / 2)
				}
			}
			else if (position === 'left') {
				return {
					top: centerTooltip('y', childElement.y, difference.y / 2),
					left: childElement.x - parentElement.width - margin
				}
			}
			else if (position === 'right') {
				return {
					top: centerTooltip('y', childElement.y, difference.y / 2),
					left: childElement.x + childElement.width + margin
				}
			}
		}
	}

	if (!active) {
		return <div ref={childRef}>{children}</div>
	}

	const getCaretPosition = () => {
		if (position === 'top') {
			return {
				top: rect?.parentElement?.height,
				left: '50%',
				transform: 'translate(-50%) rotate(180deg)'
			}
		}
		else if (position === 'bottom') {
			return {
				top: - margin,
				left: '50%',
				transform: 'translate(-50%)',
			}
		}
		else if (position === 'left') {
			return {
				top: '50%',
				left: rect?.parentElement?.width,
				transform: 'translate(0, -50%) rotate(90deg)'
			}
		}
		else if (position === 'right') {
			return {
				top: '50%',
				left: - margin,
				transform: 'translate(0, -50%) rotate(-90deg)'
			}
		}
	}


	return (
		<div>
			<div
				style={{ position: 'absolute', ...getTooltipPosition(position), opacity: showTooltip ? 1 : 0 }}
				ref={tooltipRef}
			>
				{caret &&
					<svg
						style={{ position: 'absolute', ...getCaretPosition(position) }}
						width={margin}
						height={margin}
						viewBox="0 0 88 55"
						fill="none"
					>
						<path d="M44 2.18828e-05L87.3013 73H0.69873L44 2.18828e-05Z"
							fill={background || 'black'}
						/>
					</svg>
				}
				<Container background={background}>
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
	margin: 16,
	delay: 'none',
	caret: true,
	background: 'black'
}
Tooltip.propTypes = {
	title: PropTypes.string,
	position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	margin: PropTypes.number,
	delay: PropTypes.oneOf(['none', 'short', 'long']),
	caret: PropTypes.bool,
	background: PropTypes.string
}