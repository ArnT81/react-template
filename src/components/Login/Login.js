import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { UserAuth } from '../../context/AuthContext'


export default function Login() {
	const clientId = process.env.REACT_APP_OAUTH_CLIENTID;
	const { loginWithGoogle, user } = UserAuth()

	const onFailure = (res) => {
		console.log('Failed to Log in, current user ', res);
	}

	if (user) {
		return null
	}

	else {
		return (
			<>
				<GoogleLogin
					clientId={clientId}
					buttonText='Log in with Google'
					onSuccess={(res) => loginWithGoogle(res)}
					onFailure={onFailure}
					cookiePolicy='single_host_origin'
					isSignedIn={true}
				/>
			</>
		)
	}
}
