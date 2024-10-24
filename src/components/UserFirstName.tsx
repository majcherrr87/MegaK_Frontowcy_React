import { useUserContext } from '../context/useUserContext'

export const UserFirstName = () => {
	const { user } = useUserContext()
	if (!user) return null
	const { name } = user
	return (
		<p>
			<strong>First name: {name}</strong>
		</p>
	)
}
