import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokemon/')({
	component: () => <div>Please select a Pokemon</div>,
})
