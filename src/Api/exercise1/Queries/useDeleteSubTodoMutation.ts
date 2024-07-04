import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApiTodos } from '../hooks/useApiTodos'
import { SubTodo } from '../types'

export const useDeleteSubTodoMutation = () => {
	const { apiDelete } = useApiTodos()
	const queryClient = useQueryClient()

	const { data, mutate, error, isPending } = useMutation({
		mutationKey: ['subtodos'],
		mutationFn: async (subTodoId: string) => {
			return apiDelete<SubTodo>(`subtodos/${subTodoId}`)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['subtodos'] })
		},
	})
	return {
		data,
		mutate,
		error,
		isPending,
	}
}
