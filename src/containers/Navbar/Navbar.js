import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import styles from './navbar.module.css';

export default function Navbar() {
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
							Om mig
						</NavLink>
					</li>
				</ul>
			</nav>
			<ProfileImage />
		</div>
	)
}
