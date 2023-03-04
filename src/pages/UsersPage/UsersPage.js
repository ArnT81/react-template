import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import styles from './userspage.module.css';

export default function RandomUsers() {
	return (
		<div className={styles.userspage}>
			<h1>Användare</h1>
			<nav>
				<ul>
					<li>
						<NavLink
							to='allusers'
							style={({ isActive }) => ({
								color: 'white',
								textDecoration: 'none',
								// display: isActive? 'none': 'block'
							})}>
							Lista alla användare
						</NavLink>
					</li>
					<li>
						<NavLink
							to='../users'
							style={({ isActive }) => ({
								color: 'white',
								textDecoration: 'none',
								// display: isActive ? 'none' : 'block'
								disabled: true
							})}>
							Tillbaka till "Användare"
						</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	)
}