import { queryOptions } from '@tanstack/react-query'
import { apiCall } from '../utils/apiCall'
import { Task } from '../types'

export const taskOptions = (id: string) =>
	queryOptions({
		queryKey: ['task', id],
		queryFn: async () => {
			return apiCall<Task>(`tasks/${id}`)
		},
	})
