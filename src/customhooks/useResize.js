import { useEffect, useState } from 'react';

export default function useResize() {
	const [size, setSize] = useState();

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	})

	const handleResize = () => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}
	return size;
}
