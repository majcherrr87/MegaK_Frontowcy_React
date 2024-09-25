import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

export const ProtectedRoute = () => {
	const { user, loading } = useUser()

	if (loading) return <h1>Ładowanie...</h1>

	if (!user) return <Navigate to="/" />

	return (
		<div>
			<Outlet />
		</div>
	)
}
