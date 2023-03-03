import { useContext, createContext, useState } from "react";

const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const updateUser = (user) => {
		if (user) {
			setUser(user)
		} else {
			setUser(null)
		}
	}


	return (
		<AuthContext.Provider
			value={{
				updateUser,
				user
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(AuthContext)
}