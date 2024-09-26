import { useLoaderData } from 'react-router-dom'
import { SingleTask } from '../types/task'

export const Task = () => {
	const { title, description } = useLoaderData() as SingleTask
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}
