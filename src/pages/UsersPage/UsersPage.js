import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import styles from './userspage.module.css';
import Container from '../../components/Container/Container';


export default function RandomUsers() {
	return (
		<div className={styles.userspage}>
			<Container>
				<nav>
					<ul>
						<li>
							<NavLink
								to='../users'
								style={({ isActive }) => ({
									// color: 'white',
									color: isActive ? 'white' : '#485F73',
									textDecoration: 'none',
									// display: isActive ? 'none' : 'block',
									disabled: true
								})}>
								Go back
							</NavLink>
						</li>
						<li>
							<NavLink
								to='allusers'
								style={({ isActive }) => ({
									// color: 'white',
									color: isActive ? 'white' : '#485F73',
									textDecoration: 'none',
									// display: isActive? 'none': 'block'
								})}>
								List all users
							</NavLink>
						</li>
						<li>
							<NavLink
								to='no_path_yet'
								style={({ isActive }) => ({
									// color: 'white',
									color: isActive ? 'white' : '#485F73',
									textDecoration: 'none',
									// display: isActive? 'none': 'block'
								})}>
								Update user
							</NavLink>
						</li>
						<li>
							<NavLink
								to='no_path_yet_two'
								style={({ isActive }) => ({
									// color: 'white',
									color: isActive ? 'white' : '#485F73',
									textDecoration: 'none',
									// display: isActive? 'none': 'block'
								})}>
								Create new user
							</NavLink>
						</li>
					</ul>
				</nav>
			</Container>
			<h1>Users</h1>
			<Outlet />
		</div>
	)
}