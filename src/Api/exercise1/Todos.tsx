import { useGetTodosQuery } from './Queries/useGetTodosQuery'
import { SingleTodo } from './SingleTodo'
import { TodoForm } from './TodoForm'
import { TopTodos } from './TopTodos'

export const Todos = () => {
	const { data, error, isLoading } = useGetTodosQuery()

	if (isLoading) return <p>Loading ...</p>
	if (error) return <p>{error.message}</p>
	return (
		<div>
			<h1>TODOS</h1>
			<TopTodos />
			<TopTodos />
			<TopTodos />

			<TodoForm />

			<ul>
				{data?.map((element) => (
					<SingleTodo key={element.id} element={element} />
				))}
			</ul>
		</div>
	)
}
