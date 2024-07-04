import { SingleTodo } from './SingleTodo'
import { TodoForm } from './TodoForm'
import { useTodos } from './hooks/useTodos'

export const Todos = () => {
	const { data, errors, loading, removeTodo, addTodo } = useTodos()

	if (loading) return <p>Loading ...</p>
	if (errors) return <p>{errors}</p>
	return (
		<div>
			<h1>TODOS</h1>

			<TodoForm onNewTodo={addTodo} />

			<ul>
				{data?.map((element) => (
					<SingleTodo
						key={element.id}
						onTodoRemove={removeTodo}
						element={element}
					/>
				))}
			</ul>
		</div>
	)
}
