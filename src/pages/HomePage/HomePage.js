import React, { useEffect } from 'react'
import { gapi } from 'gapi-script'
import { UserAuth } from '../../context/AuthContext'
import Logout from '../../components/Logout/Logout'
import styles from './homepage.module.css'

export default function HomePage() {
	const { user } = UserAuth();
	const clientId = process.env.REACT_APP_OATH_CLIENTID;


	// gapi?.auth2?.getAuthInstance()?.currentUser?.get()?.getAuthResponse()?.access_token
	useEffect(() => {
		function initClient() {
			gapi.client.init({
				clientId: clientId,
				scope: ''
			})
		}

		gapi.load('client:auth2', initClient)
	}, [clientId]);

	console.log(user);
	return (
		<div className={styles.homepage}>
			<h1>Welcome {user.givenName}</h1>

			<Logout />
		</div>
	)
}
