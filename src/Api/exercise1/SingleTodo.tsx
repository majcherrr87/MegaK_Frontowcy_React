import { useState } from 'react'
import { TodosType } from './types'
import { SubTodos } from './SubTodos'
import { useDeleteTodoMutation } from './Queries/useDeleteTodoMutation'

type SingleTodoProps = {
	element: TodosType
}

export const SingleTodo = ({ element: { id, title } }: SingleTodoProps) => {
	const { mutate: deleteTodos, error, isPending } = useDeleteTodoMutation()
	const [showTodos, setShowTodos] = useState(false)

	const onDelete = () => {
		deleteTodos(id)
	}

	const toggleSubTodos = () => {
		setShowTodos((prev) => !prev)
	}

	return (
		<li>
			{title}
			<button disabled={isPending} onClick={onDelete}>
				Delete
			</button>
			<button disabled={isPending} onClick={toggleSubTodos}>
				Show details
			</button>
			{showTodos && <SubTodos todoId={id} />}

			{error && <p>{error.message}</p>}
		</li>
	)
}
