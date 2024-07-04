import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApiTodos } from '../hooks/useApiTodos'
import { TodosType } from '../types'

export const useDeleteTodoMutation = () => {
	const { apiDelete } = useApiTodos()
	const queryClient = useQueryClient()

	const { data, mutate, error, isPending } = useMutation({
		mutationKey: ['todos'],
		mutationFn: async (todoId: string) => {
			return apiDelete<TodosType>(`todovs/${todoId}`)
		},
		onSuccess: (deleteDto) => {
			queryClient.setQueryData<TodosType[]>(['todos'], (oldTodos) => {
				return oldTodos?.filter((todo) => todo.id !== deleteDto?.id)
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
