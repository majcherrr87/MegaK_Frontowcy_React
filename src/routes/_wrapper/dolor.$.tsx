import { createFileRoute } from '@tanstack/react-router'

const WrongPostPlace = () => {
	return (
		<div>
			<h1>Such Post does not exist</h1>
		</div>
	)
}

export const Route = createFileRoute('/_wrapper/dolor/$')({
	component: WrongPostPlace,
})
