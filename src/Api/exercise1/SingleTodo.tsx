import { useEffect, useState } from 'react'
import { useTodoDelete } from './hooks/useTodoDelete'
import { TodosType } from './types'
import { SubTodos } from './SubTodos'

type SingleTodoProps = {
	element: TodosType
	onTodoRemove: (id: string) => void
}

export const SingleTodo = ({
	element: { id, title },
	onTodoRemove,
}: SingleTodoProps) => {
	const { data, deleteTodos, errors, loading } = useTodoDelete()
	const [showTodos, setShowTodos] = useState(false)

	const onDelete = () => {
		deleteTodos(id)
	}

	const toggleSubTodos = () => {
		setShowTodos((prev) => !prev)
	}

	useEffect(() => {
		if (!data) return
		onTodoRemove(data.id)
	}, [data])

	return (
		<li>
			{title}
			<button disabled={loading} onClick={onDelete}>
				Delete
			</button>
			<button disabled={loading} onClick={toggleSubTodos}>
				Show details
			</button>
			{showTodos && <SubTodos todoId={id} />}

			{errors && <p>{errors}</p>}
		</li>
	)
}
