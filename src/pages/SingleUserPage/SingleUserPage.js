import React, { useState } from 'react';
import { useNavigate, Link, useLoaderData } from 'react-router-dom';
import Container from '../../components/Container/Container';
import styles from './singleuserpage.module.css'

export default function SingleUserPage() {
	const [showContact, setShowContact] = useState(false);
	const navigate = useNavigate();
	const user = useLoaderData();

	console.log(user);

	if (user.error) {
		return <>{user.error} </>
	}

	return (
		<div className={styles.singleuserpage}>
			<h1>SingleUserPage</h1>

			<Container
				width='fit-content'
				border='1px solid white'
			>
				<p>name: {user.name}</p>
				<p>username: {user.username}</p>
				<p>email: {user.email}</p>

				<button onClick={() => setShowContact(!showContact)}>
					Show contact info
				</button>

				{showContact &&
					<Container
						background='white'
						color='black'
						width='fit-content'
						border='1px solid black'
					>
						<p>city: {user.address.city}</p>
						<p>street: {user.address.street}</p>
						<p>suite: {user.address.suite}</p>
						<p>zip: {user.address.zipcode}</p>
					</Container>
				}
			</Container>
			<br />

			<button
				onClick={() => navigate(-1)}
			>
				Go back button
			</button>
			<br />
			<br />

			<Link to={-1}>
				Go back link
			</Link>
		</div>
	)
}