import { useEffect } from 'react'
import { useTodoDelete } from './hooks/useTodoDelete'
import { TodosType } from './types'

type SingleTodoProps = {
	element: TodosType
	onTodoRemove: (id: string) => void
}

export const SingleTodo = ({
	element: { id, title },
	onTodoRemove,
}: SingleTodoProps) => {
	const { data, deleteTodos, errors, loading } = useTodoDelete()

	const onDelete = () => {
		deleteTodos(id)
	}
	useEffect(() => {
		if (!data) return
		onTodoRemove(data.id)
	}, [data])

	return (
		<li>
			<p>
				{title}
				<button disabled={loading} onClick={onDelete}>
					Delete
				</button>
				{errors && <p>{errors}</p>}
			</p>
		</li>
	)
}
