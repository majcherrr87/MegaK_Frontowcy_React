import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCall } from '../utils/apiCall'
import { taksDto, Task } from '../types'

export const useCreateTaskMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['new-task'],
		mutationFn: async (body: taksDto) =>
			apiCall<Task, taksDto>('tasks', {
				method: 'POST',
				body,
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['tasks'],
			})
		},
	})
}
