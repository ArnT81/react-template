import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import Login from '../../components/Login/Login'
import styles from './loginpage.module.css'

export default function LoginPage() {
	const { user } = UserAuth()

	if (user) {
		return <Navigate to='/' replace />
	}
	else {
		return (
			<div className={styles.loginpage}>
				<div>
					<h1>Please log in to see content</h1>
					<Login />
				</div>
			</div>
		)
	}
}
