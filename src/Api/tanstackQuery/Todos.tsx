import { useQuery } from '@tanstack/react-query'

type Todo = {
	id: string
	title: string
}

export const Todos = () => {
	const { data } = useQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			const response = await fetch('http://localhost:3000/todos')
			return response.json() as Promise<Todo[]>
		},
	})

	return <ul>{data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
}
