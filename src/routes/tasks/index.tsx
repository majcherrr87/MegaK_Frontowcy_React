import { createFileRoute, Link } from '@tanstack/react-router'
import { tasksOptions } from '../../queries/tasks'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useDeleteTaskMutation } from '../../mutations/useDeleteTaskMutation'

const Index = () => {
	const { data } = useSuspenseQuery(tasksOptions)

	const { mutate, isPending } = useDeleteTaskMutation()

	const handleDelete = (id: string) => {
		mutate(id)
	}
	if (isPending) return <p>Loading...</p>

	return (
		<div>
			<h1>Tasks</h1>
			<ul>
				{data.map(({ id, title }) => (
					<li key={id}>
						<h2>{title}</h2>
						<Link to="/tasks/$id" params={{ id }}>
							Details
						</Link>
						<Link to="/tasks/edit/$id" params={{ id }}>
							Edit
						</Link>
						<button onClick={() => handleDelete(id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export const Route = createFileRoute('/tasks/')({
	component: Index,
	// loader: ({ context }) => {
	// 	const { queryClient } = context
	// 	return queryClient.ensureQueryData(tasksOptions)
	// },
})
