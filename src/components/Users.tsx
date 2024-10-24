import { useUsers } from '../hooks/useUsers'
import { UsersList } from './UsersList'

export const Users = () => {
	const { getUsers } = useUsers()
	const users = getUsers()

	return <UsersList users={users} />
}
