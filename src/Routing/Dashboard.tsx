import { useUser } from './hooks/useUser'

export const Dashboard = () => {
	const { user } = useUser()

	return (
		<div>
			<h1>Hello! You are authenticated user I guess?</h1>
			<p>
				You are {user?.name} with Id [{user?.id}]
			</p>
		</div>
	)
}
