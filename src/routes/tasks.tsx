import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/tasks')({
	component: () => <Outlet />,
	// beforeLoad: ({ context }) => {
	// 	const { isAuthorized, unauthRedirect } = context
	// 	if (!isAuthorized) throw redirect({ to: unauthRedirect })
	// },
})
