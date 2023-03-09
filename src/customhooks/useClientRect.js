import { useState, useEffect } from 'react'

export default function useClientRect(parent, child) {
	const [object, setObject] = useState({});

	useEffect(() => {
		const parentElement = parent.current.getClientRects()[0];
		const childElement = child?.current?.getClientRects()[0];

		const childElementIfPresent = childElement && {
			childElement: {
				width: childElement?.width,
				height: childElement?.height,
				x: childElement?.x,
				y: childElement?.y,
				right: childElement?.right,
			}
		}

		setObject({
			parentElement: {
				width: parentElement.width,
				height: parentElement.height,
				x: parentElement.x,
				y: parentElement.y,
				right: parentElement?.right,
			},
			...childElementIfPresent
		})
	}, [parent, child])

	return object;
}