import React, { useEffect, useState } from 'react'
import { gapi } from 'gapi-script'
import { UserAuth } from '../../context/AuthContext'
import Logout from '../../components/Logout/Logout'
import styles from './homepage.module.css'
import Tooltip from '../../components/Tooltip/Tooltip'
import Button from '../../components/Button/Button'

export default function HomePage() {
	const { user } = UserAuth();
	const clientId = process.env.REACT_APP_OATH_CLIENTID;
	const [disabled, setDisabled] = useState(false)

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
				// title='You can not click right now'
				active={disabled}
			// position='top'
			>
				<Button
					title='go back button'
					disabled={disabled}
				// onClick={log}
				/>
			</Tooltip>

			<Button
				title='change state'
				onClick={() => setDisabled(!disabled)}
			/>

			<Logout />
		</div>
	)
}
