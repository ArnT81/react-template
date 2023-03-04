import React from 'react'
import { useNavigate, useLoaderData } from 'react-router-dom';
import Container from '../../components/Container/Container';




export default function ListUsersPage() {
	const navigate = useNavigate();
	const users = useLoaderData();

	if (users.error) {
		return <>{users.error}</>
	}

	console.log(users.id);

	return (
		<div>
			<h4>Alla användare</h4>
			<p>klicka på en användare för att se</p>
			<br />

			<Container
				background='white'
				width='fit-content'
				border='1px solid black'
			>
				{users.length >= 2 ?
					users.map((user, id) => {
						return (
							<Container
								key={id}
								onClick={() => {
									navigate(`/users/${user.id}`)
								}}
							>
								{user.name}
							</Container>
						)
					})
					:
					<Container
						style={{ margin: 10, cursor: 'pointer' }}
						onClick={() => {
							navigate(`/users/${users.id}`)
						}}
					>
						{users.name}
					</Container>
				}
			</Container>
		</div>
	)

}
