import { FormEvent, useState } from 'react'
import { useAddTodoMutation } from '../slices/todosApiSlice'

export const TodoForm = () => {
	const [value, setValue] = useState('')
	const [create, { isLoading }] = useAddTodoMutation()

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		create(value)
		setValue('')
	}

	return (
		<>
			{isLoading ? <p>Somthing is being saved</p> : null}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					name="title"
					placeholder="Todo title"
				/>
				<button type="submit" disabled={isLoading}>
					Add Todo
				</button>
			</form>
		</>
	)
}
