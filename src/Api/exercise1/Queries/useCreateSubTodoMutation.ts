import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApiTodos } from '../hooks/useApiTodos'
import { SubTodo, SubToDoDto } from '../types'

export const useCreateSubTodoMutation = () => {
	const { apiPost } = useApiTodos()
	const queryClient = useQueryClient()

	const { data, mutate, error, isPending } = useMutation({
		mutationKey: ['subtodos'],
		mutationFn: async (payload: SubToDoDto) => {
			return apiPost<SubTodo, SubToDoDto>(`subtodos`, payload)
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
