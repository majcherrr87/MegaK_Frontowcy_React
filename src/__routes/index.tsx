import { createFileRoute } from '@tanstack/react-router'

const Index = () => {
	return <p>select an option from the menu</p>
}

export const Route = createFileRoute('/')({
	component: Index,
})
