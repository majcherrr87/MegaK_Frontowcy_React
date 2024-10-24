import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCall } from '../utils/apiCall'
import { Task } from '../types'

export const useDeleteTaskMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['delete-task'],
		mutationFn: async (id: string) =>
			apiCall<Task>(`tasks/${id}`, {
				method: 'DELETE',
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['tasks'],
			})
		},
	})
}
