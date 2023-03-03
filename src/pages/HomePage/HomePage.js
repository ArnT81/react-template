import React from 'react'
import Logout from '../../components/Logout/Logout'
import { UserAuth } from '../../context/AuthContext'
import styles from './homepage.module.css'

export default function HomePage() {
	const { user } = UserAuth();

	console.log(user);
	return (
		<div className={styles.homepage}>
			<h1>Välkommen {user.givenName}</h1>
		
			<Logout />
		</div>
	)
}
