import React from 'react'
import { GoogleLogin } from 'react-google-login'


export default function Login({ setIsLoggedIn }) {
	const clientId = process.env.REACT_APP_OATH_CLIENTID;

	const onSuccess = (res) => {
		console.log('Login succes, current user ', res.profileObj);
		setIsLoggedIn(true)
	}
	
	const onFailure = (res) => {
		console.log('Login failed, current user ', res);
	}


	return (
		<GoogleLogin
			clientId={clientId}
			buttonText='Login'
			onSuccess={onSuccess}
			onFailure={onFailure}
			cookiePolicy='single_host_origin'
			isSignedIn={true}
		/>
	)
}
