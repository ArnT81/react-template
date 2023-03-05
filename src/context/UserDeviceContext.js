import { useContext, createContext, useState, useEffect } from "react";

const UserDeviceContext = createContext()


export const UserDeviceProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState();

	//todo resize for developer tools responsive design mode
	useEffect(() => {
		const { userAgent } = navigator;
		setIsMobile(/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent))
	}, [])


	return (
		<UserDeviceContext.Provider
			value={{ isMobile }}>
			{children}
		</UserDeviceContext.Provider>
	)
}

export const Device = () => {
	return useContext(UserDeviceContext)
}