import React, { useEffect, useState } from 'react'
import { gapi } from 'gapi-script'
import { UserAuth } from '../../context/AuthContext'
import Logout from '../../components/Logout/Logout'
import styles from './homepage.module.css'
import Tooltip from '../../components/Tooltip/Tooltip'
import Button from '../../components/Button/Button'


/*//todo 
"react-google-login": "^5.2.2" deprecated

npm i @react-oauth / google instead
https://www.npmjs.com/package/@react-oauth/google
*/

export default function HomePage() {
	const { user } = UserAuth();
	const clientId = process.env.REACT_APP_OAUTH_CLIENTID;
	const [disabled, setDisabled] = useState(true)

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

	// console.log(user);

	return (
		<div className={styles.homepage}>
			<h1>Welcome {user.givenName || user.email}</h1>

			<Tooltip
				// title='You can not click this right now'
				active={disabled}
				position='right'
			>
				<Button
					title='go back button'
					disabled={disabled}
				/>
			</Tooltip>

			<Button
				title='toggle disabled'
				onClick={() => setDisabled(!disabled)}
			/>

			<Logout />
		</div>
	)
}
