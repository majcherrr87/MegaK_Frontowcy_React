import { useQuery } from '@tanstack/react-query'
import { useApiTodos } from '../hooks/useApiTodos'
import { TodosType } from '../types'

export const useGetTodosQuery = () => {
	const { apiGet } = useApiTodos()
	const { data, error, isLoading } = useQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			return apiGet<TodosType[]>('todos')
		},
	})

	return { data, error, isLoading }
}
