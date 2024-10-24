import { queryOptions } from '@tanstack/react-query'
import { apiCall } from '../utils/apiCall'
import { Task } from '../types'

export const tasksOptions = queryOptions({
	queryKey: ['tasks'],
	queryFn: async () => {
		return apiCall<Task[]>('tasks')
	},
	staleTime: 60000,
})
