import { useDeleteSubTodoMutation } from './Queries/useDeleteSubTodoMutation'
import { SubTodo } from './types'

type SingleSubTodoProps = {
	element: SubTodo
}

export const SingleSubTodo = ({ element }: SingleSubTodoProps) => {
	const { mutate: deleteSubTodos } = useDeleteSubTodoMutation()

	const onDelete = () => {
		deleteSubTodos(element.id)
	}

	return (
		<li>
			<p>{element.title}</p>
			<button onClick={onDelete}>Delete subtodo</button>
		</li>
	)
}
