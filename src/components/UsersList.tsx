import { UserContext } from '../context/UserContext'
import { SingleUser } from '../type'
import { User } from './User'

type UsersListProps = {
	users: SingleUser[]
}

export const UsersList = ({ users }: UsersListProps) => {
	return (
		<ul>
			{users.map((user) => (
				<UserContext.Provider value={{ user }} key={user.id}>
					<User />
				</UserContext.Provider>
			))}
		</ul>
	)
}
