import React from 'react'
import { useNavigate, useLoaderData } from 'react-router-dom';
import Container from '../Container/Container';




export default function ListUsers() {
	const navigate = useNavigate();
	const users = useLoaderData();

	if (users.error) {
		return <>{users.error}</>
	}


	return (
		<div>
			<h4>Alla users</h4>
			<p>click a user to show detailed information</p>
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
