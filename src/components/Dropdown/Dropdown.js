import React, { useState, useRef } from 'react'
import useClientRect from '../../customhooks/useClientRect';
import Container from '../Container/Container';


export default function Dropdown({ children, component }) {
	const [show, setShow] = useState();
	const dropdownContainerRef = useRef();
	const componentRef = useRef();
	const rect = useClientRect(componentRef, dropdownContainerRef);

	const handleClick = () => {
		setShow(!show)
	}


	return (
		<div>
			<div
				ref={componentRef}
				style={{ position: 'relative' }}
				onClick={handleClick}
			>
				{component}
			</div>
			<div
				ref={dropdownContainerRef}
				style={{
					opacity: show ? 1 : 0,
					position: 'absolute',
					right: 'var(--spacing)'
				}}
			>
				<Container>
					{children.length > 1 ?
						children.map((child, id) => {
							return (
								<div
									key={id}
									onClick={handleClick}
								>
									{child}
								</div>
							)
						})
						:
						<div onClick={handleClick}>{children}</div>
					}
				</Container>
			</div>
		</div>
	)
}