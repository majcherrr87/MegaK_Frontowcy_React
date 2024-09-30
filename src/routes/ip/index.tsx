import { createFileRoute } from '@tanstack/react-router'
import { ipLoader } from './-loaders'

const MyIP = () => {
	const { ip } = Route.useLoaderData()
	return (
		<div>
			<h1>{ip}</h1>
		</div>
	)
}

const Loading = () => {
	return (
		<div>
			<h1>Loading...</h1>
		</div>
	)
}
const Error = () => {
	return (
		<div>
			<h1>Error!!!</h1>
		</div>
	)
}

export const Route = createFileRoute('/ip/')({
	loader: ipLoader,
	component: MyIP,
	pendingComponent: Loading,
	errorComponent: Error,
})
