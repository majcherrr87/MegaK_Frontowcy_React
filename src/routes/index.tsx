import { createFileRoute } from '@tanstack/react-router'

const Index = () => {
	return <p>You need to select a view from the menu.</p>
}

export const Route = createFileRoute('/')({
	component: Index,
})
