import { useQuery } from '@tanstack/react-query'
import { useApiTodos } from '../hooks/useApiTodos'
import { TodoWithSubTodos } from '../types'

export const useGetSubTodoQuery = (todoId: string) => {
	const { apiGet } = useApiTodos()
	const { data, error, isLoading } = useQuery({
		queryKey: ['subtodos', todoId],
		queryFn: async () => {
			return apiGet<TodoWithSubTodos>(`todos/${todoId}?_embed=subtodos`)
		},
	})

	return {
		data: data ? data.subtodos : undefined,
		error,
		isLoading,
	}
}
