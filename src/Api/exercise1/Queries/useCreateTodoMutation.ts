import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApiTodos } from '../hooks/useApiTodos'
import { TodosDto, TodosType } from '../types'

export const useCreateTodoMutation = () => {
	const { apiPost } = useApiTodos()
	const queryClient = useQueryClient()

	const { data, mutate, error, isPending } = useMutation({
		mutationKey: ['todos'],
		mutationFn: async (title: string) => {
			return apiPost<TodosType, TodosDto>(`todos`, { title })
		},
		onSuccess: (CreatedTodo) => {
			queryClient.setQueryData<TodosType[]>(['todos'], (oldTodos) => {
				return [...(oldTodos || []), CreatedTodo]
			})
		},
	})
	return {
		data,
		mutate,
		error,
		isPending,
	}
}
