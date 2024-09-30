import { createFileRoute } from '@tanstack/react-router'

const Color = () => {
	const { r, g, b } = Route.useParams()

	return (
		<div
			style={{
				height: 300,
				width: 300,
				backgroundColor: `rgb(${r}, ${g}, ${b})`,
			}}
		>
			ggg
		</div>
	)
}

export const Route = createFileRoute('/color/$r/$g/$b')({
	component: Color,
})
