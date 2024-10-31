import { useDeleteTodoMutation } from '../slices/todosApiSlice'
import { Todo } from '../types'

export type SingleTodoProps = {
	todo: Todo
}

export const SingleTodo = ({ todo }: SingleTodoProps) => {
	const [deleteTodo] = useDeleteTodoMutation()

	const handleDelete = () => {
		deleteTodo(todo.id)
	}

	return (
		<li>
			<strong>{todo.title}</strong>
			<button onClick={handleDelete}>Delete</button>
		</li>
	)
}
