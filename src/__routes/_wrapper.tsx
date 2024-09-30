import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'

const isLogged = true

const Wrapper = () => {
	if (!isLogged) return <Navigate to="/" />
	return (
		<main>
			<strong>Hello, i am the wrapper</strong>
			<Outlet />
		</main>
	)
}

export const Route = createFileRoute('/_wrapper')({
	component: Wrapper,
})
