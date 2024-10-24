import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { FormEvent, useEffect, useState } from 'react'
import { taskOptions } from '../../queries/task'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useUpdateTaskMutation } from '../../mutations/useUpdateTaskMutation'

const Edit = () => {
	const { id } = Route.useParams()
	const { data } = useSuspenseQuery(taskOptions(id))

	const [title, setTitle] = useState(data.title)
	const [description, setDescription] = useState(data.description)

	const navigate = useNavigate()

	const { mutate, isSuccess } = useUpdateTaskMutation(id)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		mutate({
			title,
			description,
		})
	}

	useEffect(() => {
		if (!isSuccess) return

		navigate({ to: '/tasks/$id', params: { id } })
	}, [isSuccess])

	return (
		<div>
			<h1>Edit Task</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Description"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button type="submit">Edit</button>
			</form>
		</div>
	)
}

export const Route = createFileRoute('/tasks/edit/$id')({
	component: Edit,
	// loader: ({ context, params }) => {
	// 	const { queryClient } = context
	// 	const { id } = params

	// 	return queryClient.ensureQueryData(taskOptions(id))
	// },
})
