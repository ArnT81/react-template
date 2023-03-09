import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import Logout from '../../components/Logout/Logout'
import styles from './homepage.module.css'



export default function HomePage() {
	const { user } = UserAuth();

	console.log(user);

	return (
		<div className={styles.homepage}>
			<h1>Welcome {user.name || user.email}</h1>
			<Logout />
		</div>
	)
}
