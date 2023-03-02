import React from 'react'


export default function Authorized({ children, isLoggedIn }) {
	if (isLoggedIn) {
		return <>{children}</>
	} else return null;
}
