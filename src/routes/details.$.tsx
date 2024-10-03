import { createFileRoute } from '@tanstack/react-router'

const WrongPlace = () => {
	const { _splat } = Route.useParams()
	return (
		<div>
			<h1>This is a wrong place, you need go to back.</h1>
			<p>You tied to load {_splat}</p>
		</div>
	)
}

export const Route = createFileRoute('/details/$')({
	component: WrongPlace,
})
