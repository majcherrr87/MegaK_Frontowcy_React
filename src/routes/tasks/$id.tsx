import { createFileRoute } from '@tanstack/react-router'
import { taskOptions } from '../../queries/task'
import { useSuspenseQuery } from '@tanstack/react-query'

const SingleTask = () => {
	const { id } = Route.useParams()
	const { data } = useSuspenseQuery(taskOptions(id))
	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.description}</p>
		</div>
	)
}

export const Route = createFileRoute('/tasks/$id')({
	component: SingleTask,
	// loader: ({ context, params }) => {
	// 	const { queryClient } = context
	// 	const { id } = params
	// 	queryClient.ensureQueryData(taskOptions(id))
	// },
})
