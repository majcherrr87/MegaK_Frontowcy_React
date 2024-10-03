import { createFileRoute } from '@tanstack/react-router'

const IP = () => {
	const { ip } = Route.useLoaderData()
	return (
		<div>
			<h1>{ip}</h1>
		</div>
	)
}

export const Route = createFileRoute('/ip/')({
	loader: async () => {
		const response = await fetch('https://api.ipify.org?format=json')
		return response.json() as Promise<{ ip: string }>
	},
	component: IP,
})
