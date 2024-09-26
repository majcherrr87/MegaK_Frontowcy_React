import { Form, useActionData } from 'react-router-dom'
import { SingleTask } from '../types/task'

export const AddTask = () => {
	const data = useActionData() as SingleTask | undefined
	return (
		<div>
			<h1>Add new task</h1>
			<Form method="POST">
				<input type="text" name="title" />
				<textarea name="description" />
				<button type="submit">Add task</button>
			</Form>
			{data ? <p>Task {data.title} was created seccessfull!</p> : null}
		</div>
	)
}
