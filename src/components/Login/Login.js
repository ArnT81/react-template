import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { UserAuth } from '../../context/AuthContext'


export default function Login() {
	const clientId = process.env.REACT_APP_OAUTH_CLIENTID;
	const { updateUser, user } = UserAuth()

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
					onSuccess={(res) => updateUser(res.profileObj)}
					onFailure={onFailure}
					cookiePolicy='single_host_origin'
					isSignedIn={true}
				/>
			</>
		)
	}
}
