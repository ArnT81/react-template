import React, { useEffect } from 'react'
import Logout from '../../components/Logout/Logout'
import { UserAuth } from '../../context/AuthContext'
import styles from './homepage.module.css'
import { gapi } from 'gapi-script'

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
	}, []);

	console.log(user);
	return (
		<div className={styles.homepage}>
			<h1>Välkommen {user.givenName}</h1>

			<Logout />
		</div>
	)
}
