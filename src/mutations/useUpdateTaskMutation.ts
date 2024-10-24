import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCall } from '../utils/apiCall'
import { taksDto, Task } from '../types'

export const useUpdateTaskMutation = (id: string) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['edit-task', id],
		mutationFn: async (body: taksDto) =>
			apiCall<Task, taksDto>(`tasks/${id}`, {
				method: 'PUT',
				body,
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['tasks'],
			})
		},
	})
}
