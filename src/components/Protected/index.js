import React from 'react'
import { UserAuth } from '../../context/AuthContext'


export default function Protected({ children }) {
	const { user } = UserAuth()
	console.log(user);
	if (!user) {
		return null
	} else return <>{children}</>;
}
