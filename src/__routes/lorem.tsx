import { createFileRoute, useNavigate } from '@tanstack/react-router'

const Lorem = () => {
	const navigate = useNavigate()

	const goToDolor = () => {
		navigate({ to: '/value/$value', params: { value: 'gggg' } })
	}

	return (
		<div>
			<p>Lorem</p>
			<button onClick={goToDolor}>Go to Dolor</button>
		</div>
	)
}

export const Route = createFileRoute('/lorem')({
	component: Lorem,
})
