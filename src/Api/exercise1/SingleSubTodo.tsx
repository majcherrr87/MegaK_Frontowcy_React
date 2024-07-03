import { useEffect } from 'react'
import { useSubTodoDelete } from './hooks/useSubTodoDelete'
import { SubTodo } from './types'

type SingleSubTodoProps = {
	element: SubTodo
	onDeleteCallback: () => void
}

export const SingleSubTodo = ({
	element,
	onDeleteCallback,
}: SingleSubTodoProps) => {
	const { data, deleteSubTodos } = useSubTodoDelete()

	const onDelete = () => {
		deleteSubTodos(element.id)
	}

	useEffect(() => {
		if (!data) return
		onDeleteCallback()
	}, [data])

	return (
		<li>
			<p>{element.title}</p>
			<button onClick={onDelete}>Delete subtodo</button>
		</li>
	)
}
