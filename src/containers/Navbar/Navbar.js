import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import styles from './navbar.module.css';
import { UserAuth } from '../../context/AuthContext';
import Dropdown from '../../components/Dropdown/Dropdown';


export default function Navbar() {
	const { logoutGoogle } = UserAuth()

	return (
		<div className={styles.navbar}>
			<nav>
				<ul>
					<li>
						<NavLink
							to='/'
							style={({ isActive }) => ({
								color: isActive ? 'white' : '#485F73',
								textDecoration: 'none'
							})}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='about'
							style={({ isActive }) => ({
								color: isActive ? 'white' : '#485F73',
								textDecoration: 'none'
							})}>
							About me
						</NavLink>
					</li>
					<li>
						<NavLink
							to='users'
							style={({ isActive }) => ({
								color: isActive ? 'white' : '#485F73',
								textDecoration: 'none'
							})}>
							Fetch users
						</NavLink>
					</li>
					<li>
						<NavLink
							to='tooltip'
							style={({ isActive }) => ({
								color: isActive ? 'white' : '#485F73',
								textDecoration: 'none'
							})}>
							Tooltip example
						</NavLink>
					</li>
					<li>
						<NavLink
							to='modal'
							style={({ isActive }) => ({
								color: isActive ? 'white' : '#485F73',
								textDecoration: 'none'
							})}>
							Modal example
						</NavLink>
					</li>
					<li>
						<NavLink
							to='form'
							style={({ isActive }) => ({
								color: isActive ? 'white' : '#485F73',
								textDecoration: 'none'
							})}>
							Form example
						</NavLink>
					</li>
				</ul>
			</nav>
			<Dropdown
				component={<ProfileImage />}
			>
				<p onClick={logoutGoogle}>
					Log Out
				</p>
			</Dropdown>
		</div>
	)
}

