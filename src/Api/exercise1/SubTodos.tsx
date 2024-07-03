import { SingleSubTodo } from './SingleSubTodo'
import { SubTodoForm } from './SubTotoForm'
import { useSubTodos } from './hooks/useSubTodos'

type SubTodosProps = {
	todoId: string
}

export const SubTodos = ({ todoId }: SubTodosProps) => {
	const { data, errors, loading, getSubTodos } = useSubTodos(todoId)

	if (errors) return <p>{errors}</p>
	if (loading) return <p>Loading subtodos...</p>
	if (!data) return null
	return (
		<>
			<SubTodoForm todoId={todoId} onNewSubTodoCallback={getSubTodos} />
			<ul>
				{data.map((subtodo) => (
					<SingleSubTodo
						key={subtodo.id}
						element={subtodo}
						onDeleteCallback={getSubTodos}
					/>
				))}
			</ul>
		</>
	)
}
