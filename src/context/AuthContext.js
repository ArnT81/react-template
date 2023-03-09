import { useContext, createContext, useState } from "react";
import { googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState();

	const loginWithGoogle = (jwt) => {
		const decoded = jwt_decode(jwt.credential)

		setUser({
			name: decoded.name,
			email: decoded.email,
			exp: decoded.exp,
			image: decoded.picture,
		})
	}

	const logoutGoogle = () => {
		googleLogout();
		setUser();
	}


	return (
		<AuthContext.Provider
			value={{
				loginWithGoogle,
				logoutGoogle,
				user
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(AuthContext)
}