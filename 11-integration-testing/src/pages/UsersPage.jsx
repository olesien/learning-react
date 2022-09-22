import { useEffect, useState } from 'react'
import UserList from '../components/UserList'
import { getRandomUsers } from '../services/RandomUser'

const UsersPage = () => {
	const [users, setUsers] = useState([])

	const getUsers = async() => {
		const res = await getRandomUsers()
		setUsers(res.results)
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<>
			<h1>Users</h1>

			<UserList users={users} />
		</>
	)
}

export default UsersPage
