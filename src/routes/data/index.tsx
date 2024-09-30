import { createFileRoute } from '@tanstack/react-router'

const Data = () => {
	const { value } = Route.useLoaderData()
	return <h1>{value}</h1>
}

export const Route = createFileRoute('/data/')({
	loader: async () => {
		return new Promise<{ value: string }>((resulve) => {
			setTimeout(() => {
				resulve({
					value: 'Value:)',
				})
			}, 5_000)
		})
	},
	component: Data,
	pendingComponent: () => <p>Ładowanie....</p>,
})
