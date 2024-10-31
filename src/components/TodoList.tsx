import { useGetAllTodosQuery } from '../slices/todosApiSlice'
import { SingleTodo } from './SingleTodo'

export const TodoList = () => {
	const { data, isLoading } = useGetAllTodosQuery()

	if (isLoading) return <p>Loading...</p>
	if (!data) <p>Todos are not available...</p>

	return (
		<ul>{data?.map((todo) => <SingleTodo todo={todo} key={todo.id} />)}</ul>
	)
}
