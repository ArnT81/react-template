export const getUsers = async (params) => {
	let response;

	if (params.id) {
		response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
	} else {
		response = await fetch("https://jsonplaceholder.typicode.com/users");
	}

	if (response.status !== 200) {
		return { error: response.statusText }
	} else {
		return await response.json();
	}
}