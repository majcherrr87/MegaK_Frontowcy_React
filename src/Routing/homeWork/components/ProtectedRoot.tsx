import { Navigate, Outlet } from 'react-router-dom'
import { useUserData } from '../hooks/useUserData'

type ProtectedRootProps = {
	redirect?: string
}

export const ProtectedRoot = ({ redirect }: ProtectedRootProps) => {
	const { isAuthorized } = useUserData()

	if (!isAuthorized) return <Navigate to={redirect || '/'} />
	return <Outlet />
}
