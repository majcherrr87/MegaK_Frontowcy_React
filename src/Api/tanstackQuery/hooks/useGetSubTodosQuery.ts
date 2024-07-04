import { useQuery } from '@tanstack/react-query'

export type Subtodo = {
	id: string
	title: string
}
export type TodoWithSubtobo = {
	id: string
	title: string
	subtodos: Subtodo[]
}

export const useGetSubTodosQuery = (todoId?: string) => {
	const { data } = useQuery({
		queryKey: ['subtodos', todoId],
		queryFn: async () => {
			const response = await fetch(
				`http://localhost:3000/todos/${todoId}?_embed=subtodos`,
			)
			return response.json() as Promise<TodoWithSubtobo>
		},
		enabled: !!todoId,
	})
	return { data: data?.subtodos }
}
