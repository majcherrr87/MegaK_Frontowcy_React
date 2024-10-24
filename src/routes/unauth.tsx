import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/unauth')({
	component: () => <div>You have no access!</div>,
})
