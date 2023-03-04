import React from 'react';
import { useNavigate, Link, useLoaderData } from 'react-router-dom';


export default function SingleUserPage() {
	const navigate = useNavigate();
	const user = useLoaderData();
console.log(user);

	if (user.error) {
		return <>{user.error} </>
	}

	return (
		<div>
			<h1>SingleUserPage</h1>
			<p>id: {user.id}</p>
			<p>name: {user.name}</p>
			<button
				onClick={() => navigate(-1)}
			>
				back
			</button>
			<br />
			<Link to={-1}>
				Back
			</Link>
		</div>
	)
}